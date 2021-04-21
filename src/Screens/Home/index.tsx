import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SectionList,
  Image,
  Button,
  AppState,
  AppStateStatus,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import CTA from "../../Components/CTA";
import Environment from "../../config/environment";
import { addBoards, logOut } from "../../Redux/Actions";
import { sections } from "../../Styles/components";
import { IBoard } from "../../Types/boards";
import { IQueryResult } from "../../Types/trelloQuery";
import notifications from "../../Utils/notifications";
import trello from "../../Utils/trello";

interface ItemProps {
  object: IBoard;
}

interface BoardsWithStarProps {
  boards: Array<IBoard>;
}

const BoardsWithStar: FunctionComponent<BoardsWithStarProps> = ({ boards }) => {
  useEffect(() => {
    console.log(boards.length);
  }, [boards]);
  return (
    // <View>
    //   <Text style={sections.sectionHeader}>Borden met ster</Text>
    //   {boards.map((board) => (
    //     <TouchableOpacity>

    //     </TouchableOpacity>
    //   ))}
    // </View>
    <></>
  );
};

const Item: FunctionComponent<ItemProps> = ({ object }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Board", {
      title: object.name,
      object,
      color: object.prefs.backgroundColor,
    });
  };

  return (
    <TouchableOpacity style={sections.itemContainer} onPress={handlePress}>
      {!object.prefs.backgroundImage ? (
        <View
          style={[
            sections.itemSquare,
            { backgroundColor: object.prefs.backgroundColor },
          ]}
        />
      ) : (
        <Image
          style={sections.itemSquare}
          source={{ uri: object.prefs.backgroundImageScaled[0].url }}
        />
      )}
      <Text style={sections.itemTitle}>{object.name}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [data, setData] = useState<any>();
  const [refreshing, setRefreshing] = useState(false);

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const dispatch = useDispatch();

  //@ts-ignore
  const { user } = useSelector((state) => state);

  const fetchboards = async () => {
    setRefreshing(true);
    const boards = await trello.boards();
    if (boards) {
      dispatch(addBoards(boards));
      setData(trello.groupBoards(boards));
    }
    setRefreshing(false);
  };

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = async (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      // create notifications here!
      const { cards } = (await trello.dueDates()) as IQueryResult;
      const uncompletedDueCards = cards
        .filter(({ due, dueComplete }) => {
          // add check to see if
          if (due && new Date(due) >= new Date()) {
            return due;
          }
        })
        .map(({ due, dueReminder, name, id, dueComplete }) => ({
          due,
          dueReminder,
          name,
          id,
          dueComplete,
        }));

      const test = await Promise.all(
        uncompletedDueCards.map(
          async ({ due, dueReminder, name, id, dueComplete }) => {
            return await notifications
              .scheduleLocalNotification(
                due,
                dueReminder,
                name,
                id,
                dueComplete
              )
              .then((id) => id)
              .catch((e) => e);
          }
        )
      );

      // const testItem = uncompletedDueCards[0];
      // const not = await notifications
      //   .scheduleLocalNotification(
      //     testItem.due,
      //     testItem.dueReminder,
      //     testItem.name,
      //     testItem.id,
      //     testItem.dueComplete
      //   )
      //   .then((id) => id)
      //   .catch((e) => e);
      console.log("====================================");
      console.log(test);
      console.log("====================================");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  useEffect(() => {
    fetchboards();
  }, []);

  return (
    <>
      <SectionList
        // ListHeaderComponent={<BoardsWithStar boards={data[1].data} />}
        sections={data}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <Item object={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={sections.sectionHeader}>{title}</Text>
        )}
        refreshing={refreshing}
        onRefresh={fetchboards}
      />
      <CTA />
      <Button
        title="logout"
        onPress={() => {
          dispatch(logOut());
        }}
      />
    </>
  );
};

export default Home;

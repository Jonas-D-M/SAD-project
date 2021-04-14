import { useNavigation } from "@react-navigation/core";
import React, { FunctionComponent, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  useWindowDimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../Redux/Actions";

import { cta } from "../../Styles/components";
import googleVision from "../../Utils/googleVision";

const MenuItems: FunctionComponent = () => {
  return (
    <View style={cta.menuItemContainer}>
      <Text style={cta.menuItemText}>Kaart</Text>
      <View style={cta.small}>
        <Text>+</Text>
      </View>
    </View>
  );
};

const CTA = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const takePicture = async () => {
    dispatch(toggleLoading());
    const string: string = await googleVision.createCardsFromPicture();
    const tempString = string.split("* ").join("");
    const titles = tempString.split(/\r?\n/);
    titles.pop();
    dispatch(toggleLoading());
    navigation.navigate("NewCards", { titles });
  };

  return (
    <View style={cta.container}>
      {/* <MenuItems /> */}
      <TouchableOpacity style={cta.main} onPress={takePicture}>
        <Text style={cta.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CTA;

import { Dimensions, Platform, StyleSheet, StatusBar } from "react-native";
import { theme, neutral } from "./colors";

export const button = StyleSheet.create({
  default: {
    backgroundColor: theme["blue-200"],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 8,
    alignSelf: "center",
    borderRadius: 2,
  },
  titleDefault: {
    color: "white",
    fontSize: 16,
  },

  light: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 8,
    alignSelf: "center",
    borderRadius: 2,
  },
  titleLight: {
    color: theme["blue-200"],
  },
});

export const imageStyle = StyleSheet.create({
  logo: {
    height: 100,
    width: Dimensions.get("screen").width - 32,
  },
});

export const sections = StyleSheet.create({
  sectionListContainer: {
    flex: 1,
    backgroundColor: neutral[200],
  },

  itemContainer: {
    paddingHorizontal: 16,
    backgroundColor: neutral[200],
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },

  itemSquare: {
    marginRight: 16,
    height: 32,
    width: 32,
    borderRadius: 2,
    backgroundColor: "white",
  },

  itemTitle: {
    fontSize: 16,
  },

  sectionHeader: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: neutral[600],
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: neutral[100],
  },
});

export const board = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export const list = StyleSheet.create({
  container: {
    backgroundColor: neutral[300],
    borderRadius: 3,
    marginHorizontal: 8,
    maxWidth: 184,
    width: 184,
    paddingTop: 8,
    paddingBottom: 16,
  },
  title: {
    fontWeight: "700",
    color: "black",
    marginHorizontal: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  contentContainer: {
    // justifyContent: "flex-start",
    // flexGrow: 0,
  },
});

export const card = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: "white",
    marginHorizontal: 4,
    marginVertical: 2,
    maxWidth: 176,
    width: "100%",
    paddingVertical: 8,
    elevation: 1,
  },
  title: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
    fontWeight: "200",
  },
  labelContainer: {
    marginHorizontal: 4,
    flexDirection: "row",
    marginBottom: 8,
  },
  tinyLabel: {
    width: 24,
    height: 12,
    borderRadius: 3,
    marginRight: 4,
  },
});

export const cta = StyleSheet.create({
  container: {},
  main: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme["green"],
    borderRadius: 100,
  },
  small: {
    width: 30,
    height: 30,
    backgroundColor: theme["green"],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  menuItemText: {
    fontSize: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 3,
    marginRight: 16,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
});

export const picker = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  title: {},
  picker: {},
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: neutral[600],
    marginHorizontal: 8,
    marginTop: -10,
  },
  itemDisabled: {
    color: "white",
  },
  header: {
    marginBottom: 16,
  },
});

export const newCard = StyleSheet.create({
  main: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 16,
    paddingVertical: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  description: {},
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme["blue-200"],
    marginTop: 8,
    marginBottom: 16,
  },
  inputFocus: {
    borderBottomColor: theme["green"],
  },
});

export const dot = StyleSheet.create({
  dot: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: neutral["300"],
    marginHorizontal: 1,
  },
  active: {
    backgroundColor: theme["blue-100"],
  },
});

export const pagination = StyleSheet.create({
  main: {
    marginTop: 32,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 16,
  },
});

export const carousel = StyleSheet.create({
  container: {},
});

export const header = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: theme["blue-100"],
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  containerOnBoard: {
    height: 72,
    backgroundColor: theme["blue-100"],
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  title: {
    marginLeft: 16,
    color: "white",
    fontSize: 24,
  },
  actionContainer: {
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  icon: {
    color: "white",
    marginLeft: 16,
  },
  bell: {
    color: "white",
  },
  youHaveNotifications: {
    backgroundColor: theme["red-100"],
    padding: 4,
    borderRadius: 3,
    marginRight: 16,
  },
  noNotifications: {
    marginRight: 16,
  },
});

export const loadingScreen = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export const notificationItem = StyleSheet.create({
  main: {
    flexDirection: "row",
    backgroundColor: neutral[200],
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 16,
  },
  textContainer: {
    width: Dimensions.get("screen").width - (16 + 32 + 16),
  },
  highLight: {
    fontWeight: "bold",
  },
  commentContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginRight: 16,
  },
  comment: {
    backgroundColor: "white",
  },
  dueSoonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const separator = StyleSheet.create({
  main: {
    height: 1,
    width: "100%",
    backgroundColor: neutral["300"],
  },
});

export const error = StyleSheet.create({
  container: {
    borderColor: "#cc0000",
    backgroundColor: "white",
    borderWidth: 1,
    height: 40,
    marginHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    position: "absolute",
    bottom: 0,
    padding: 8,
    marginBottom: 16,
    alignSelf: "center",
  },
  text: {
    color: "#cc0000",
  },
});

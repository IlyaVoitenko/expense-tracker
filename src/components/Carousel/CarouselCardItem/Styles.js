import { StyleSheet } from "react-native";
import { ITEM_WIDTH } from "./CarouselCardItem";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 100,
    shadowColor: "#000",
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
  },
});

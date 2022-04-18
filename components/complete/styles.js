import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "space-around",
  },
  text: {
    marginLeft: 0,
  },
  deleteButton: {
    backgroundColor: "#0067B1",
  },
  editButton: {
    backgroundColor: "#0067B1",
  },
  completeButton: {
    backgroundColor: "#0067B1",
  },
  flatTextTrue: {
    fontSize: 18,
    textDecorationLine: "line-through",
    marginLeft: 40,
  },
  flatTextFalse: {
    fontSize: 18,
    textDecorationLine: "none",
    marginLeft: 40,
  },
});

export default styles;

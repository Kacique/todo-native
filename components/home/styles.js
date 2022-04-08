import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  inputContainer: {
    width: "90%",
    height: "8%",
    marginTop: "15%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listContainer: {
    width: "90%",
    height: "8%",
    marginTop: "15%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
  },
  headerText: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",

    backgroundColor: "yellow",
  },
  inputText: {
    width: "80%",
    height: "80%",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
    borderBottomWidth: 1.5,
  },
  addButton: {
    width: "20%",
    height: "80%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
  },
});

export default styles;

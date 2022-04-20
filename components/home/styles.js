import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    height: "100%",
    backgroundColor: "#fff",
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
    height: "60%",
    marginTop: "10%",
    flexDirection: "column",
  },
  flatListContainer: {
    width: "100%",
    paddingVertical: "8%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flatList: {
    width: "100%",
    height: "45%",
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -22,
    marginBottom: -18,
  },
  highlight: {
    marginTop: 30,
    marginBottom: 10,
    padding: 0,
    backgroundColor: "#acd3d5",
    transform: [{ rotate: "-5deg" }],
  },
  inputText: {
    width: "80%",
    height: "80%",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 18,
    marginLeft: 10,
    borderBottomWidth: 1.5,
  },
  addButton: {
    width: "20%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#2d3436",
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#0067B1",
  },
  editButton: {
    backgroundColor: "#0067B1",
  },
  addText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    color: "#2d3436",
  },
  //--------Modal---------------//
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 300,
    height: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;

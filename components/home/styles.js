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
    height: "60%",
    marginTop: "10%",
    flexDirection: "column",
    //justifyContent: "flex-start",
    //alignItems: "center",
    //backgroundColor: "red",
  },
  flatListContainer: {
    width: "100%",
    paddingVertical: "8%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "black",
  },
  flatList: {
    width: "100%",
    height: "45%",
    //marginTop: "15%",
    //flexDirection: "column",
    //justifyContent: "flex-start",
    //alignItems: "center",
    //backgroundColor: "blue",
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
  deleteButton: {
    backgroundColor: "#0067B1",
  },
  editButton: {
    backgroundColor: "#0067B1",
  },

  //--------Modal---------------//
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
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

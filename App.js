import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Todo List</Text>
            <View style={styles.divisionLine}></View>
            <View style={styles.list}>
                <Text style={styles.item}>1. Clean the house</Text>
                <Text style={styles.item}>2. Math homework</Text>
                <Text style={styles.item}>3. Cooking</Text>
            </View>
            <View style={styles.button}>
                <Button title="Add New Todo" onPress={() => {
                  // functionality to be added
                }} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 20,
    },
    list: {
      flex: 1,
      width: "80%",
      marginBottom: 20,
    },
    item: {
      fontSize: 16,
      marginBottom: 10,
      backgroundColor: "#ADD8E6",
      padding: 5,
    },
    button: {
      width: "80%",
      borderTopWidth: 1,
      borderBottomColor: "#111",
      paddingTop: 10,
      position: "absolute",
      bottom: 20,
    },
    divisionLine: {
      width: "80%",
      borderBottomWidth: 1,
      borderBottomColor: "#111",
      marginBottom: 20,
    }
});
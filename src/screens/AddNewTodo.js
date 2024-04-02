import { StyleSheet, Text, TextInput, View } from "react-native";
import { ImageButton } from "../components/ImageButton";

export const AddNewTodo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Todo</Text>
            <View style={styles.divisionLine}></View>
            <View style={styles.inputContainer}>
                <Text style={styles.textInContainer}>Title</Text>
                <TextInput style={styles.input} placeholder="Title" />
                <Text style={styles.textInContainer}>Description</Text>
                <TextInput
                    style={[styles.input, styles.multiline]}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={4}
                />
            </View>
            <View style={styles.button}>
                <ImageButton
                    icon="add-circle-sharp"
                    label="Cancel"
                    color="red"
                    screen="Home"
                ></ImageButton>
                <ImageButton
                    icon="add-circle-sharp"
                    label="Save"
                    color="green"
                    screen="Home"
                ></ImageButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        alignItems: "center",
        // justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 20,
    },
    divisionLine: {
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#111",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        color: "black",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    multiline: {
        height: 120,
        textAlignVertical: "top",
    },
    button: {
        flex: 1,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        position: "absolute",
        bottom: 20,
    },
    inputContainer: {
        width: "90%",
        gap: 5,
    },
    textInContainer: {
        fontWeight: "bold",
        fontSize: 16,
    },
});

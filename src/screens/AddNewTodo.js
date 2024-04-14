import { StyleSheet, Text, TextInput, View } from "react-native";
import { ImageButton } from "../components/ImageButton";
import { ScreenTitle } from "../components/ScreenTitle";
import { useState } from "react";
import { CustomAlert } from "../components/CustomAlert";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AddNewTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const titleChangeHandler = (text) => {
        setTitle(text);
    };
    const descriptionChangeHandler = (text) => {
        setDescription(text);
    };
    const clearFields = () => {
        setTitle("");
        setDescription("");
    };
    const saveTodo = async (todo) => {
        try {
            const existingTodos = await AsyncStorage.getItem("todos");
            let updatedTodos = [];
            if (existingTodos) {
                updatedTodos = JSON.parse(existingTodos);
            }
            updatedTodos.push(todo);
            await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
            CustomAlert("Todo Added Succesfully");
            clearFields();
        } catch (error) {
            console.error("Error while saving todo: ", error);
        }
    };
    const saveHandler = () => {
        if (title.trim() !== "" && description.trim() !== "") {
            saveTodo({
                id: Date.now(),
                title: title,
                description: description,
                finished: false,
            });
        }
    };
    return (
        <View style={styles.container}>
            <ScreenTitle label={"Add New Todo"}></ScreenTitle>
            <View style={styles.inputContainer}>
                <Text style={styles.textInContainer}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={titleChangeHandler}
                />
                <Text style={styles.textInContainer}>Description</Text>
                <TextInput
                    style={[styles.input, styles.multiline]}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={4}
                    value={description}
                    onChangeText={descriptionChangeHandler}
                />
            </View>
            <View style={styles.button}>
                <ImageButton
                    icon="arrow-back-circle"
                    label="Back"
                    color="red"
                    screen="Back"
                ></ImageButton>
                <ImageButton
                    icon="save"
                    label="Save"
                    color="green"
                    onClick={saveHandler}
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

import { StyleSheet, View } from "react-native";
import { ImageButton } from "../components/ImageButton";
import { ScreenTitle } from "../components/ScreenTitle";
import { TodoList } from "../components/TodoList";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export const Home = () => {
    const isFocused = useIsFocused();

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, [isFocused]);

    const loadTodos = async () => {
        try {
            const todosJSON = await AsyncStorage.getItem("todos");
            if (todosJSON !== null) {
                const storedTodos = JSON.parse(todosJSON);
                setTodos(storedTodos);
            }
        } catch (error) {
            console.error("Error while loading todos: ", error);
        }
    };
    const saveTodos = async (updatedTodos) => {
        try {
            const todosJSON = JSON.stringify(updatedTodos);
            await AsyncStorage.setItem("todos", todosJSON);
        } catch (error) {
            console.error("Error while saving todos: ", error);
        }
    };
    const deleteHandler = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };
    const finishHandler = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, finished: true }; // Update the finished property
            }
            return todo;
        });
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };
    return (
        <View style={styles.container}>
            <ScreenTitle label={"My Todo List"}></ScreenTitle>
            <TodoList
                data={todos}
                onDelete={deleteHandler}
                onFinish={finishHandler}
            ></TodoList>
            <View style={styles.homeButton}>
                <ImageButton
                    icon="add-circle-sharp"
                    label="Add New Todo"
                    color="green"
                    screen="Add New Todo"
                ></ImageButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    homeButton: {
        width: "90%",
        position: "absolute",
        bottom: 20,
    },
});

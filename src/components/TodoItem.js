import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ImageButton } from "./ImageButton";

export const TodoItem = ({ todo, onDelete, onFinish }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
    const deleteHandler = () => {
        onDelete(todo.id);
    };
    const finishHandler = () => {
        onFinish(todo.id);
    };
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{todo.title}</Text>
                <ImageButton
                    icon={expanded ? "caret-up" : "caret-down"}
                    onClick={toggleExpansion}
                    color={"green"}
                ></ImageButton>
            </View>
            {expanded && (
                <View style={styles.expanded}>
                    <Text style={styles.description}>{todo.description}</Text>
                    <View style={styles.controls}>
                        {!todo.finished && (
                            <ImageButton
                                icon="cloud-done"
                                color={"green"}
                                onClick={finishHandler}
                            ></ImageButton>
                        )}
                        <ImageButton
                            icon="trash"
                            color={"red"}
                            onClick={deleteHandler}
                        ></ImageButton>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        backgroundColor: "#ADD8E6",
        marginVertical: 5,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        marginBottom: 5,
        fontSize: 14,
        color: "#000000",
    },
    controls: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

import { View, StyleSheet, FlatList } from "react-native";
import { TodoItem } from "../components/TodoItem";

export const TodoList = ({ data, onDelete, onFinish }) => {
    return (
        <View style={styles.list}>
            <FlatList
                style={{
                    flexGrow: 0,
                    height: "90%",
                }}
                data={data}
                renderItem={({ item }) => (
                    <TodoItem
                        todo={item}
                        onDelete={onDelete}
                        onFinish={onFinish}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        height: 50,
        flexGrow: 1,
        width: "90%",
        marginBottom: 20,
    },
});

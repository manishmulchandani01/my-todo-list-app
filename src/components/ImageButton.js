import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ImageButton = ({ color, icon, screen, label }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
            onPress={() => navigation.navigate(screen)}
        >
            <View style={styles.container}>
                <Ionicons name={icon} size={20} color={color} />
                <Text style={styles.text}>{label}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#ADD8E6",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    text: {
        color: "black",
        fontWeight: "bold",
    },
});

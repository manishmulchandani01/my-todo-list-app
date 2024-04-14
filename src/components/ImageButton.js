import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ImageButton = ({ color, icon, screen, label, onClick }) => {
    const navigation = useNavigation();
    const pressHandler = () => {
        if (screen && !onClick) {
            if (screen !== "Back") {
                navigation.navigate(screen);
            } else {
                navigation.goBack();
            }
        } else if (!screen && onClick) {
            onClick();
        } else if (screen && onClick) {
            onClick();
            if (screen !== "Back") {
                navigation.navigate(screen);
            } else {
                navigation.goBack();
            }
        }
    };
    return (
        <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
            onPress={pressHandler}
        >
            <View style={styles.container}>
                {icon && <Ionicons name={icon} size={20} color={color} />}
                {label && <Text style={styles.text}>{label}</Text>}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#ADD8E6",
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

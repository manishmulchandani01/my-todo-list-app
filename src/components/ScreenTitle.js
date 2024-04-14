import { Text, View, StyleSheet } from "react-native";

export const ScreenTitle = ({ label }) => {
    return (
        <>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.divisionLine}></View>
        </>
    );
};

const styles = StyleSheet.create({
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
});

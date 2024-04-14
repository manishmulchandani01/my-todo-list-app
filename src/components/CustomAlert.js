import { Alert } from "react-native";

export const CustomAlert = (label) => {
    Alert.alert(label, "", [
        {
            text: "OK",
        },
    ]);
};

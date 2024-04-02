import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/screens/Home";
import { AddNewTodo } from "./src/screens/AddNewTodo";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddNewTodo" component={AddNewTodo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

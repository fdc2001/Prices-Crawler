import {createStackNavigator} from "@react-navigation/stack";
import BottomNavigation from "../BottomNavigation";
import ProductDetails from "../../Screens/ProductDetails";

export default function StackNavigation(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShadowVisible: false,headerMode:'float',headerStyle:{height:60},headerBackTitle:'Pesquisa'}}
                name="tabs"
                component={BottomNavigation}
            />
            <Stack.Screen
                name="productDetails"
                component={ProductDetails}
                options={{
                    headerBackTitle: 'Voltar',
                }}
                screenOptions={{
                    headerTruncatedBackTitle: 'Voltar',
                    headerBackTitleVisible: false,
                }}

            />
        </Stack.Navigator>
    )
}
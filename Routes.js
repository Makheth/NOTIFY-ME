import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";





const stack =createNativeStackNavigator();

export default function Routes()
{
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name ="login" component = {login}/>
            <stack.Screen name ="SignUp" component = {SignUp}/>
            <stack.Screen name ="Home" component = {Home}/>
          
           
          



            

            </stack.Navigator>
            </NavigationContainer>
            

          
           
    );
}
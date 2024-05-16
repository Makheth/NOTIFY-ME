import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import FindRoute from "./FindRoute";
import  Specials from "./Specials";
import Temparature from "./Temperature";



const stack =createNativeStackNavigator();

export default function Routes()
{
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name ="login" component = {login}/>
            <stack.Screen name ="SignUp" component = {SignUp}/>
            <stack.Screen name ="Home" component = {Home}/>
            <stack.Screen name ="FindRoute" component = {FindRoute}/>
            <stack.Screen name ="Specials" component = {Specials}/>
            <stack.Screen name ="Temperature" component = {Temparature}/>



            

            </stack.Navigator>
            </NavigationContainer>
            

          
           
    );
}
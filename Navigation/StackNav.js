import { createStackNavigator } from "react-navigation-stack";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Cart from "../Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    //give names to your components that you will be using throughout your project
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen: Login,
    CartScreen: Cart
  },
  {
    //define the intial component when the app runs
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },

      cardStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default StackNav;

import { createBottomTabNavigator } from "react-navigation-tabs";

//Import your stacks
import AuthTab from "./AuthTab";
import OrderTab from "./OrderTab";
import CoffeeTab from "./CoffeeTab";

const BottomTabNav = createBottomTabNavigator(
  {
    Auth: AuthTab,
    Order: OrderTab,
    Coffee: CoffeeTab
  },
  {
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

export default BottomTabNav;

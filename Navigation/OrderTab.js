import OrderHistory from "../Components/OrderHistory";
import CoffeeCart from "../Components/CoffeeCart";
import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import { Icon } from "native-base";

const OrderHistoryTab = createStackNavigator(
  {
    OrderHistoryScreen: OrderHistory,
    Cart: CoffeeCart
  },
  // { initialRouteName: "OrderHistoryScreen" },
  {
    nitialRouteName: "OrderHistoryScreen",
    navigationOptions: {
      tabBarLabel: "Order History",
      tabBarIcon: () => <Icon type="Octicons" name="list-unordered" size={20} />
    }
  }
);

export default OrderHistoryTab;

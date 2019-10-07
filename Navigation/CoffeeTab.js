import React, { Component } from "react";
import { Icon } from "native-base";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

import { createStackNavigator } from "react-navigation-stack";

const CoffeeTab = createStackNavigator(
  {
    CoffeeListScreen: CoffeeList,
    CoffeeDetailScreen: CoffeeDetail
  },
  // { initialRouteName: "CoffeeListScreen" },

  {
    initialRouteName: "CoffeeListScreen",
    navigationOptions: {
      tabBarLabel: "Shops",
      tabBarIcon: () => <Icon type="Entypo" name="shop" size={20} />
    }
  }
);

export default CoffeeTab;

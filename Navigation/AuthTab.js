import Profile from "../Components/Profile";
import React, { Component } from "react";
import { Icon } from "native-base";
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

import { createStackNavigator } from "react-navigation-stack";

const AuthTab = createStackNavigator(
  {
    Profile: Profile,
    LoginScreen: Login,
    CoffeeListScreen: CoffeeList,
    CoffeeDetailScreen: CoffeeDetail
  },
  // { initialRouteName: "LoginScreen" },

  {
    initialRouteName: "LoginScreen",
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: () => <Icon type="Octicons" name="person" size={20} />
    }
  }
);

export default AuthTab;

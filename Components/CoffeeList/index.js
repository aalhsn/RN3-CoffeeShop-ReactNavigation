import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Icon, Button } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = ({ navigation }) => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: (
      <Icon
        onPress={() => navigation.navigate("CartScreen")}
        type="FontAwesome"
        name="shopping-cart"
        style={{ marginRight: 15, color: "black" }}
      ></Icon>
    )
  };

  // <icon type="FontAwesome" name="shopping-cart"></icon>
};
export default observer(CoffeeList);

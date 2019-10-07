import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Data
import items from "../../data/items";

const OrderHistory = () => {
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      <Text>Order History</Text>
      {cartItems}
    </List>
  );
};

export default observer(OrderHistory);

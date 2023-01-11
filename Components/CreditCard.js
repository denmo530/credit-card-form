import React from "react";
import { View, Text, Image } from "react-native";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const CreditCard = ({
  cardNumber,
  cardHolder,
  expireDate,
  cardType,
  setCardType,
  CVC,
  focused,
}) => {
  return (
    <View style={{ marginBottom: -110, zIndex: 100 }}>
      {focused.cvc === false ? (
        <CardFront
          cardHolder={cardHolder}
          cardNumber={cardNumber}
          cardType={cardType}
          expireDate={expireDate}
          setCardType={setCardType}
          CVC={CVC}
          focused={focused}
        />
      ) : (
        <CardBack cardType={cardType} CVC={CVC} />
      )}
    </View>
  );
};

export default CreditCard;

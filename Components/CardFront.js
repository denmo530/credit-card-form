import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

const CardFront = ({
  cardNumber,
  cardHolder,
  expireDate,
  cardType,
  setCardType,
  CVC,
  focused,
  onFocus,
  onBlur,
}) => {
  const cardTypeHandler = () => {
    let number = cardNumber;
    let re = new RegExp("^4");
    if (number.match(re) != null) return require("../images/visa.png");

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return require("../images/amex.png");

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return require("../images/mastercard.png");

    re = new RegExp("^6011");
    if (number.match(re) != null) return require("../images/discover.png");

    re = new RegExp("^9792");
    if (number.match(re) != null) return require("../images/troy.png");

    return require("../images/visa.png"); // default type
  };

  useEffect(() => {
    setCardType(cardTypeHandler());
  }, [cardNumber]);

  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={require("../images/4.jpeg")}
        style={styles.ccBackground}
        imageStyle={{
          borderRadius: 7,
        }}
      >
        <View style={styles.row}>
          <Image
            source={require("../images/chip.png")}
            resizeMode="cover"
            style={{ width: 101 / 2, height: 82 / 2 }}
          />
          <Image
            source={cardType}
            style={{ width: 75, height: 40, resizeMode: "contain" }}
          />
        </View>
        <View>
          <Text style={[styles.cardNumber, focused.num && styles.focused]}>
            {cardNumber}
          </Text>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontSize: 10, color: "white" }}>Card Holder</Text>
            <Text
              style={[
                { fontSize: 14, color: "white" },
                focused.name && styles.focused,
              ]}
            >
              {cardHolder}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: "white" }}>Expires</Text>
            <Text
              style={[
                { fontSize: 14, color: "white" },
                focused.date && styles.focused,
              ]}
            >
              {expireDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ccBackground: {
    width: 675 / 2.2,
    height: 435 / 2.2,
    padding: 20,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardNumber: {
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: 23,
  },
  focused: {
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderRadius: 4,
    padding: 5,
  },
});
export default CardFront;

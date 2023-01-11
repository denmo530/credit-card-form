import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

const CardBack = ({ cardType, CVC }) => {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={require("../images/4.jpeg")}
        style={[styles.ccBackground]}
        imageStyle={{
          borderRadius: 7,
          transform: [{ scaleX: -1 }],
        }}
      >
        <View style={styles.blackBar}></View>
        <View style={styles.items}>
          <Text style={{ fontSize: 10, color: "white", paddingRight: 10 }}>
            CVC
          </Text>
          <TextInput
            value={CVC}
            style={styles.cvcContainer}
            editable={false}
            secureTextEntry={true}
          ></TextInput>
          <Image
            source={cardType}
            style={{
              width: 75,
              height: 40,
              resizeMode: "contain",
              marginVertical: 20,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ccBackground: {
    width: 675 / 2.2,
    height: 435 / 2.2,
    justifyContent: "space-between",
    paddingTop: 25,
    paddingBottom: 25,
  },
  focused: {
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderRadius: 4,
    padding: 5,
  },
  blackBar: {
    backgroundColor: "rgba(0, 0, 19, 0.8)",
    width: "100%",
    height: 40,
  },
  cvcContainer: {
    width: "100%",
    backgroundColor: "white",
    textAlign: "right",
    position: "relative",
    padding: 10,
    borderRadius: 4,
  },
  items: {
    alignItems: "flex-end",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default CardBack;

import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
const Input = ({
  label,
  type,
  setCardNumber,
  setCardHolder,
  setCVC,
  maxLength,
  onFocus,
  onBlur,
}) => {
  const onChange = (text) => {
    if (setCardNumber) {
      const formattedText = text.replace(/(.{4})/g, "$1 ").trim();
      setCardNumber(formattedText);
    } else if (setCardHolder) {
      const regex = /^[a-zA-ZöÖ\s]*$/;
      if (regex.test(text)) setCardHolder(text);
    } else if (setCVC) {
      setCVC(text);
    }
  };
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        keyboardType={type}
        style={styles.inputField}
        onChangeText={(text) => onChange(text)}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#4d4b4b91",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "100%",
    fontSize: 18,
    marginTop: 5,
  },
});

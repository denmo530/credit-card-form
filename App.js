import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Form from "./Components/Form";
import CreditCard from "./Components/CreditCard";

export default function App() {
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardHolder, setCardHolder] = useState("FULL NAME");
  const [expireDate, setExpireDate] = useState("MM/YY");
  const [cardType, setCardType] = useState("visa.png");
  const [CVC, setCVC] = useState("");
  const [focused, setFocused] = useState({
    num: false,
    name: false,
    date: false,
    cvc: false,
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CreditCard
        setCardType={setCardType}
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        expireDate={expireDate}
        cardType={cardType}
        CVC={CVC}
        focused={focused}
      />
      <View style={styles.formContainer}>
        <Form
          setCardType={setCardType}
          setCardNumber={setCardNumber}
          setCardHolder={setCardHolder}
          setExpireDate={setExpireDate}
          setCVC={setCVC}
          setFocused={setFocused}
          focused={focused}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddeefc",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 300,
    paddingTop: 100,
    maxHeight: 600,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});

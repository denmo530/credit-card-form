import { StyleSheet, Text, View, Button } from "react-native";
import { react, useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Input from "./Input";

const Form = ({
  setCardNumber,
  setCardHolder,
  setExpireDate,
  setCVC,
  setFocused,
  focused,
}) => {
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [monthValue, setMonthValue] = useState("MM");
  const [yearValue, setYearValue] = useState("YY");

  useEffect(() => {
    setExpireDate(`${monthValue}/${yearValue}`);
  }, [monthValue, yearValue]);

  useEffect(() => {
    if (openMonth || openYear) {
      setFocused({ ...focused, date: true });
    } else {
      setFocused({ ...focused, date: false });
    }
  }, [openMonth, openYear]);

  const months = [
    { label: "Month", value: "month", disabled: true },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
  ];
  const years = [
    { label: "Year", value: "year", disabled: true },
    { label: "2020", value: "20" },
    { label: "2021", value: "21" },
    { label: "2022", value: "22" },
    { label: "2023", value: "23" },
    { label: "2024", value: "24" },
    { label: "2025", value: "25" },
    { label: "2026", value: "26" },
    { label: "2027", value: "27" },
    { label: "2028", value: "28" },
    { label: "2029", value: "29" },
  ];
  return (
    <View style={styles.container}>
      <Input
        label={"Card Number"}
        type="numeric"
        setCardNumber={setCardNumber}
        onFocus={() => {
          setFocused({ ...focused, num: true });
        }}
        onBlur={() => {
          setFocused({ ...focused, num: false });
        }}
        maxLength={16}
      />
      <Input
        label={"Card Holders"}
        type="alphabetical"
        setCardHolder={setCardHolder}
        onFocus={() => {
          setFocused({ ...focused, name: true });
        }}
        onBlur={() => {
          setFocused({ ...focused, name: false });
        }}
      />
      <Text>Expiration Date</Text>
      <View style={styles.row}>
        <View style={styles.dropDown}>
          <DropDownPicker
            items={months}
            placeholder={"Month"}
            open={openMonth}
            value={monthValue}
            setOpen={setOpenMonth}
            setValue={setMonthValue}
            dropDownContainerStyle={{ borderColor: "#5c5b5b" }}
          />
        </View>
        <View style={styles.dropDown}>
          <DropDownPicker
            items={years}
            placeholder={"Year"}
            open={openYear}
            value={yearValue}
            dropDownContainerStyle={{ borderColor: "#5c5b5b" }}
            setOpen={setOpenYear}
            setValue={setYearValue}
          />
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Input
          label={"CVC"}
          type={"numeric"}
          setCVC={setCVC}
          maxLength={3}
          onFocus={() => {
            setFocused({ ...focused, cvc: true });
          }}
          onBlur={() => {
            setFocused({ ...focused, cvc: false });
          }}
        />
      </View>
      <Button title="Submit" style={{ width: 250, height: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },

  dropDown: {
    width: "49%",
    marginVertical: 5,
  },
});

export default Form;

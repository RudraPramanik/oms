import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from "react-native";
import React from "react";

const adddetails = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a new Employee
        </Text>
        <TextInput
          placeholder="Usa"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#DODODO",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Full Name (First and last Name)
          </Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        {/*  */}
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>designation</Text>
          <TextInput
            placeholder="Designation"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Phone:</Text>
          <TextInput
            placeholder="Phone :"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Date of Birth
          </Text>
          <TextInput
            placeholder="Enter Date of Birth"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining date</Text>
          <TextInput
            placeholder="joining date"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#DODODO",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        {/*  */}
    
        <View style={{ marginVertical: 0 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Salary
        </Text>
        <TextInput
          placeholder="Designation"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#DODODO",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
      
      </View>
        <View style={{ marginVertical: 0 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Address
        </Text>
        <TextInput
          placeholder="Designation"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#DODODO",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
      
      </View>
      <Pressable
          onPress={()=>{}}
          style={{
            backgroundColor: "#ABCABA",
            padding: 10,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Add Employee
          </Text>
        </Pressable>
        {/*  */}
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({});

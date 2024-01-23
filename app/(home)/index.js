import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  Entypo,
  Feather,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <StatusBar backgroundColor="#c2f0ea" translucent={false} />
      <LinearGradient colors={["#c2f0ea", "#c2f0ea"]} style={{ flex: 1, marginTop:-10 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              employee management system
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              
            }}
          >
            <Pressable
            onPress={()=>router.push("/(home)/employees")}
              style={{
                backgroundColor: "#a7d1cc",
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                borderWidth:1,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
            onPress={()=>router.push("/(home)/markattendence")}
              style={{
                backgroundColor:"#a7d1cc",
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                borderWidth:1,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          {/* 2nd */}
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#c2f0ea",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
              borderColor:""
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#a7d1cc",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="newspaper-o" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
            onPress={()=>router.push("/(home)/summary")}
              style={{
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="newspaper-o" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Summery report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="newspaper-o" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                All Generate Reports
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="newspaper-o" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                Overtime Employee
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>

          {/*  */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#f79d00",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,

              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{}}>Attendance Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ABCABA",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,

              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{}}>Icreased Workflow</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,

              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{}}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ABCABA",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                backgroundColor: "#a7d1cc",
                borderWidth:1.5,
                borderRadius: 8,
                borderColor: '#b6c2c0',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 4,
                elevation: 5,

              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{}}>Employee Performance</Text>
            </View>
          </View>
          {/*  */}
        </View>
        <View
        style={{
          height:48,
          backgroundColor:"#c2f0ea"
        }}>

        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});

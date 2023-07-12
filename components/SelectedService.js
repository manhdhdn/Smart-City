import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const SelectedService = (props) => {
  const services = () => {
    let element = [];

    props.services.forEach(service => {
      element.push(
        <Pressable key={service.id} onPress={() => props.handleServiceChange(service.id)}>
          <View style={styles.service}>
            <View style={styles.iconEllipse}>
              {props.selectedService === service.id ? (
                <Image
                  style={styles.ellipse}
                  contentFit="cover"
                  source={require("../assets/ellipse-46.png")}
                />
              ) : (
                <Image
                  style={styles.ellipse}
                  contentFit="cover"
                  source={require("../assets/ellipse-52.png")}
                />
              )}
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/group-152.png")}
              />
            </View>
            <Text style={styles.organizingTypo}>
              {service.name}
            </Text>
          </View>
        </Pressable>
      );
    });

    return element;
  }

  return (
    <View style={styles.selectedextras}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.ellipseGroup}>
          {props.services && services()}
        </View>
      </ScrollView>
      <Text style={styles.selectedExtras}>Selected Service</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  service: {
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  ellipse: {
    width: 68,
    height: 68,
  },
  iconEllipse: {
    width: 73,
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseLayout: {
    height: 90,
    top: 47,
  },
  organizingTypo: {
    opacity: 0.83,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: 11,
    textAlign: "left",
    color: Color.black,
  },
  ellipseGroup: {
    flexDirection: "row",
    gap: 45,
    top: 47,
    height: 90,
  },
  selectedExtras: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    opacity: 0.7,
    textAlign: "left",
    color: Color.black,
    left: 0,
    top: 0,
    position: "absolute",
  },
  selectedextras: {
    top: 394,
    width: 307,
    height: 137,
    position: "absolute",
  },
});

export default SelectedService;

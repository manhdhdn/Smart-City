import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const WelcomeInfo = () => {
  const [dataUser, setDataUser] = React.useState("");
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const loadDataOrder = async () => {
      const user_info_json = await AsyncStorage.getItem("user");
        user_info_json != null
          ? JSON.parse(user_info_json)
          : {
              id: "001",
              isLogin: false,
            };
      const access_token = await AsyncStorage.getItem("token");
      if(!access_token){
        setDataUser("");
        return
      };
      try {
        const res = await axios.get(`http://192.168.1.178:8089/api/user`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setDataUser(res.data.user);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    if (isFocused) {
      loadDataOrder();
    }
  }, [isFocused]);

  return (
    <View style={styles.welcomeinfo}>
      {dataUser ? (
        <>
          <Text style={[styles.completed, styles.completedTypo]}>
            70% Completed
          </Text>
          <Text style={[styles.hiKateWelcomeBack, styles.completedTypo]}>
            {`Hi ${dataUser.name},\n Welcome Back`}
          </Text>
          <Image
            style={styles.pictureIcon}
            contentFit="cover"
            source={{ uri: dataUser.image }}
          />
        </>
      ) : (
        <><Text style={[styles.hiKateWelcomeBack, styles.completedTypo]}>
            {`Welcome to app`}
          </Text><Image
              style={styles.pictureIcon}
              contentFit="cover"
              source={require("../assets/traidep.png")} /></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  completedTypo: {
    textAlign: "left",
    fontWeight: "700",
    left: 138,
    position: "absolute",
  },
  completed: {
    top: 60,
    fontSize: 15,
    fontFamily: FontFamily.montserratBold,
    color: Color.sandybrown,
  },
  hiKateWelcomeBack: {
    top: 0,
    fontSize: 19,
    fontFamily: FontFamily.ubuntuBold,
    color: Color.white,
  },
  pictureIcon: {
    top: 1,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 40,
  },
  welcomeinfo: {
    top: 57,
    width: 269,
    height: 85,
    position: "absolute",
  },
});

export default WelcomeInfo;

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../baseUrl.json";
import axios from "axios";


const WelcomeInfo = () => {
  const [dataUser, setDataUser] = React.useState("");
  const [image, setImage] = React.useState('https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg');

  const isFocused = useIsFocused();
  const loadDataOrder = async () => {
    const user_info_json = await AsyncStorage.getItem("user");
    user_info_json != null
      ? JSON.parse(user_info_json)
      : {
        id: "001",
        isLogin: false,
      };
    const access_token = await AsyncStorage.getItem("token");
    if (!access_token) {
      setDataUser("");
      return
    };
    try {
      const res = await axios.get(`http://${config.baseURL}:8089/api/user`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      await AsyncStorage.setItem("user", JSON.stringify({
        id: res.data.user._id,
        image: res.data.user.image,
        email: res.data.user.email,
        name: res.data.user.name,
        phone: res.data.user.phone,
        block: res.data.user.block,
        room: res.data.user.room,
        role: res.data.user.role[0],
        isLogin: true
      }))
      setDataUser(res.data.user);
      setImage(res.data.user.image);
      console.log("image:",  image);
    } catch (error) {
      console.error("API error:", error);
    }
  };
  React.useEffect(() => {
    if (isFocused) {
      loadDataOrder();
    }
  }, [isFocused]);

  const chooseImage = async () => {
    try {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.canceled) {
      const selectedImage = result.assets[0];
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        type: 'image/jpeg', // Change the type accordingly if it's not JPEG
        name: 'image.jpg', // Provide a name for the image
      });
      console.log(formData);
      const configImage = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      };
      try {
        const upload = await axios.post(`http://${config.baseURL}:8089/api/upload`, formData, configImage);
      
        console.log('Upload Response:', upload.data.filename);
        const userData = await AsyncStorage.getItem("user");
        const parsedDataUser = JSON.parse(userData);
        const res = await axios.put(`http://${config.baseURL}:8089/api/user/${parsedDataUser.id}`,
        {
          name: parsedDataUser.name,
          phone: parsedDataUser.phone,
          email: parsedDataUser.email,
          block: parsedDataUser.block,
          room: parsedDataUser.room,
          image: upload.data.filename,
        }
        );
        console.log(res.data.image);
      } catch (error) {
        console.error("API error:", error);
        
      }

      loadDataOrder();
    }
    
    } catch (error) {
      console.error(error);
    }
  };

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
            source={require("../assets/picture.png")}
          />
          <Pressable onPress={chooseImage}>
            <Image
              style={styles.profileImage}
              contentFit="cover"
              source={{uri : image}}
            />
          </Pressable>
        </>
      ) : (
        <>
          <Text style={[styles.hiKateWelcomeBack, styles.completedTypo]}>
            {`Hi,\nWelcome to app`}
          </Text>
          <Image
            style={styles.pictureIcon}
            contentFit="cover"
            source={require("../assets/picture.png")}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    top: 10,
    left: 16,
    width: 61.37,
    height: 61.93,
    borderRadius: 30,
    position: "absolute",
  },
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
    width: 93,
    height: 84,
    position: "absolute",
  },
  welcomeinfo: {
    top: 57,
    width: 269,
    height: 85,
    position: "absolute",
  },
});

export default WelcomeInfo;

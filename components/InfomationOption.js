import * as React from "react";

import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FontFamily, Color } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/core";
import config from "../baseUrl.json";
import axios from "axios";

const phoneRegex = /^[0-9]{10,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const blockRegex = /^[A-Z]\d{2}$/;
const roomRegex = /^[0-8][0-2][0-9]$/;

const InfomationOption = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState(false);
  const isFocused = useIsFocused();
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [block, setBlock] = React.useState('');
  const [image, setImage] = React.useState('');
  React.useEffect(() => {
    const checkUser = async () => {
      const dataUser = await AsyncStorage.getItem("user");
      if (dataUser) {
        try {
          const parsedDataUser = JSON.parse(dataUser);
          setId(parsedDataUser.id);
          setName(parsedDataUser.name);
          setEmail(parsedDataUser.email);
          setPhone(parsedDataUser.phone);
          setRoom(parsedDataUser.room);
          setBlock(parsedDataUser.block);
          setImage(parsedDataUser.image);
        } catch (error) {
          console.error("API error:", error);
        }

      }
    };
    if (isFocused) {
      checkUser();
    }
  }, [isFocused]);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
  };

  const handleRoomChange = (text) => {
    setRoom(text);
  };

  const handleBlockChange = (text) => {
    setBlock(text);
  };

  const handleUpdatePress = async () => {
    if (!name.trim()) {
      alert("Vui lòng nhập tên của bạn.");
      return;
    }
  
    if (!phone.trim()) {
      alert("Vui lòng nhập số điện thoại của bạn.");
      return;
    }else if(!phoneRegex.test(phone)) {
      alert("Số điện thoại phải có đủ 10 số.");
      return;
    }

    if (!email.trim()) {
      alert("Vui lòng nhập email của bạn.");
      return;
    }else if(!emailRegex.test(email)) {
      alert("Email phải phải như này abc@gmail.com.");
      return;
    }
  
    if (!block.trim()) {
      alert("Vui lòng nhập block của bạn.");
      return;
    }else if(!blockRegex.test(block)) {
      alert("Block không hợp lệ(C01).");
      return;
    }
  
    if (!room.trim()) {
      alert("Vui lòng nhập room của bạn.");
      return;
    }else if(!roomRegex.test(room)) {
      alert("Room không hợp lệ(001).");
      return;
    }
    const access_token = await AsyncStorage.getItem("token");
      if (access_token) {
        try {
          const res = await axios.put(`http://${config.baseURL}:8089/api/user/${id}`,
          {
            name: name,
            phone: phone,
            email: email,
            block: block,
            room: room,
            image: image,
          }
          );
          console.log(name);
        } catch (error) {
          console.error("API error:", error);
        }

      }
    navigation.goBack();
  };

  const handleEditPress = () => {
    setUserInfo(true);
  };

  const updateInfo = () => {
    return (
      <>
        <TextInput
          style={styles.textField}
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
        />
        <TextInput
          style={styles.textField}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={styles.textField}
          placeholder="Phone"
          value={phone}
          onChangeText={handlePhoneChange}
        />
        <TextInput
          style={styles.textField}
          placeholder="Room"
          value={room}
          onChangeText={handleRoomChange}
        />
        <TextInput
          style={styles.textField}
          placeholder="Block"
          value={block}
          onChangeText={handleBlockChange}
        />
        <Pressable style={styles.updateButton} onPress={handleUpdatePress}>
          <Text style={styles.updateButtonText}>Update</Text>
        </Pressable>
      </>
    );
  };

  const editInfo = () => {
    return (
      <View>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Phone: {phone}</Text>
        <Text style={styles.text}>Room: {room}</Text>
        <Text style={styles.text}>Block: {block}</Text>
        <Pressable style={styles.updateButton} onPress={handleEditPress}>
          <Text style={styles.updateButtonText}>Edit</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={[styles.accountoption, styles.optionsPosition]}>
      <View style={styles.options}>
        {userInfo ? updateInfo() : editInfo()}
      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    width: "100%",
    fontSize: 24,
    marginBottom: 10,
    height: 80,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
    paddingVertical: 5,
  },
  textField: {
    height: 80,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  updateButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Color.slateblue,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  accountoption: {
    bottom: 0,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: Color.white,
    width: "100%",
    height: 600,
  },
  optionsPosition: {
    position: "absolute",
  },
  options: {
    top: 50,
  },
});

export default InfomationOption;

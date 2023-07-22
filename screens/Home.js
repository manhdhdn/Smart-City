import * as React from "react";

import { StyleSheet, View, ScrollView, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";

import SelectedOption from "../components/SelectedOption";
import SelectedCleaning from "../components/SelectedCleaning";
import SelectedService from "../components/SelectedService";
import SelectedTime from "../components/SelectedTime";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import config from "../baseurl.json";

const Home = ({ navigation }) => {
  const [selectedCleaning, setSelectedCleaning] = React.useState(0);
  const [selectedService, setSelectedService] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(0);
  const [searchText, setSearchText] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  const [services, setServices] = React.useState(null);
  const [options, setOptions] = React.useState(null);


  React.useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`${config.baseUrl}/service`);
        setServices(res.data.list);
      } catch (error) {
        console.error("Error loading services:", error);
      }
    };
    fetchService();
  }, []);

  const handleBookNowPress = async () => {
    const access_token = await AsyncStorage.getItem("token");
    if (!access_token) {
      navigation.navigate("SignIn");
      return
    };
    try {
      //call order
      const data = await axios.post(`${config.baseUrl}/order`, {}, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      //call orderDetail
      const dataDetail = await axios.post(`${config.baseUrl}/orderDetail`, {
        orderDetail: {
          optionID: selectedOption,
          orderID: data.data.order._id,
        }
      }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      //cập nhật giá tổng cho order
      const updateOrder = await axios.put(`${config.baseUrl}/order/${data.data.order._id}`, {
      }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      //trả về option theo id
      const getOptionByID = await axios.get(`${config.baseUrl}/option/${dataDetail.data.orderDetail.optionID}`, {}, {
      });

      //trả về user đang đăng nhập
      const getUser = await axios.get(`${config.baseUrl}/user`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }, {});

      //check điều kiện thực thi
      if (data.data && dataDetail.data) {
        navigation.navigate("Payment", { userName: getUser.data.user.name, total: updateOrder.data.order.total, optionName: getOptionByID.data.option.optionName })
        return
      } else {
        console.error("data null or empty");
      }
    } catch (error) {
      console.log(error);
      // Xử lý lỗi
      if (error.response && error.response.data) {
        console.error(error.response.data);
      }
    }
  }

  const handleCleaningChange = (id) => {
    setSelectedCleaning(id);
  }
  const fetchOption = async (serviceID) => {
    try {
      const res = await axios.get(`${config.baseUrl}/service/${serviceID}`)
      console.log(res.data);
      setOptions(res.data.options);
    } catch (error) {
      console.error("Error loading option:", error);
    }
  };
  const handleServiceChange = (serviceID) => {
    setSelectedService(serviceID);
    fetchOption(serviceID)
  }

  const handleOptionChange = (optionID) => {
    setSelectedOption(optionID);
  }


  return (
    <ScrollView>
      <View style={styles.home}>
        <View style={[styles.homcontent, styles.homcontentBg]}>
          <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
            <View style={styles.interfaceAdjustHorizontalParent}>
              <Image
                style={[
                  styles.interfaceAdjustHorizontal,
                  styles.basicsSearchLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface--adjusthorizontalalt.png")}
              />
              <View style={[styles.basicsSearchParent, styles.badgeFlexBox]}>
                <Image
                  style={styles.basicsSearchLayout}
                  contentFit="cover"
                  source={require("../assets/basics--search.png")}
                />
                <TextInput
                  style={[styles.searchService, styles.scheduleTypo]}
                  onChangeText={setSearchText}
                  placeholder="Search service..."
                />
              </View>
            </View>
          </View>
          <SelectedCleaning cleaning={selectedCleaning} handleCleaningChange={handleCleaningChange} />
          <SelectedService services={services} selectedService={selectedService} handleServiceChange={handleServiceChange} />
          <SelectedOption options={options} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
          <SelectedTime date={date} setDate={setDate} />
          <Pressable style={[styles.badge, styles.badgeFlexBox]} onPress={handleBookNowPress}>
            <Text style={[styles.labelText, styles.am9Typo]}>Book Now</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homcontentBg: {
    backgroundColor: Color.white,
  },
  scheduleTypo: {
    fontFamily: FontFamily.nunitoSansRegular,
    lineHeight: 16,
    textAlign: "left",
  },
  am9Typo: {
    fontFamily: FontFamily.nunitoSansBold,
    fontWeight: "700",
  },
  groupInnerLayout: {
    width: 319,
    height: 56,
    position: "absolute",
  },
  basicsSearchLayout: {
    width: 20,
    height: 20,
  },
  badgeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  schedule: {
    color: Color.black03,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  am9: {
    fontSize: 17,
    letterSpacing: 0.2,
    lineHeight: 23,
    color: Color.black01,
    marginTop: 6,
    textAlign: "left",
  },
  groupInner: {
    borderRadius: 18,
    backgroundColor: "#eef6fc",
    top: 0,
    left: 0,
  },
  interfaceAdjustHorizontal: {
    left: 264,
    top: 4,
    position: "absolute",
  },
  searchService: {
    fontSize: 12,
    color: "#8aa0bc",
    marginLeft: 10,
    letterSpacing: 0.4,
    textAlign: "left",
    width: "85%",
    height: "100%",
  },
  basicsSearchParent: {
    top: 0,
    left: 0,
  },
  interfaceAdjustHorizontalParent: {
    top: 14,
    left: 15,
    width: 284,
    height: 20,
    position: "absolute",
  },
  rectangleContainer: {
    top: 49,
  },
  labelText: {
    lineHeight: 18,
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
  },
  badge: {
    height: "5.11%",
    width: "85.07%",
    top: "82.69%",
    bottom: "2.19%",
    borderRadius: 14,
    paddingHorizontal: 8,
    backgroundColor: Color.slateblue,
  },
  homcontent: {
    top: 30,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    width: "100%",
    height: 1095,
    position: "relative",
    alignItems: "center",
  },
  home: {
    flex: 1,
    width: "100%",
    height: 1025,
    backgroundColor: Color.slateblue,
  },
});

export default Home;

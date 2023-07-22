import * as React from "react";

import { Text, StyleSheet, View, ScrollView, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import config from "../baseurl.json";

import MoMo from "../apis/momo/MoMo";

const PaymentMethod = ({ navigation, route }) => {
  const [paymentInfo, setPaymentInfo] = React.useState(null);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const paidStatusOrder = async () => {
    const access_token = await AsyncStorage.getItem("token");
    if (!access_token) {
      navigation.navigate("SignIn");
      return
    };
    await axios.put(`${config.baseUrl}/order/${data.data.order._id}`, {
      status: "paid",
    }, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  React.useEffect(() => {
    if (paymentSuccess) {
      paidStatusOrder();
      navigation.navigate("Schedule");
    }
  }, [paymentSuccess]);

  React.useEffect(() => {
    const interval = paymentInfo && setInterval(async () => {
      let status = (await MoMo.checkPayment(paymentInfo)).resultCode;

      if (status === 0) {
        setPaymentSuccess(true);

        clearInterval(interval);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    }
  }, [paymentInfo]);

  const handlePaymentPress = async () => {
    let paymentInfo = await MoMo.createRequest(route.params.total);

    setPaymentInfo(paymentInfo);
    await Linking.openURL(paymentInfo.qrCodeUrl);
  }

  return (
    <ScrollView>
      <View style={styles.paymentMethod}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <View style={[styles.groupParent, styles.parentLayout]}>
            <View style={[styles.visaPng1Parent, styles.parentLayout]}>
              <Image
                style={styles.visaPng1Icon}
                contentFit="cover"
                source={require("../assets/81810053-visapng-1.png")}
              />
              <View style={styles.availableBalanceParent}>
                <Text style={[styles.availableBalance, styles.text2Typo]}>
                  Available balance
                </Text>
                <Text style={[styles.text1, styles.text1FlexBox]}>$3,578.99</Text>
              </View>
            </View>
            <Text style={[styles.text2, styles.text2Typo]}>
              5172 4567 8888 0000
            </Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={[styles.detail1, styles.text1FlexBox]}>Detail</Text>
          <View style={styles.detailChild} />
          <View style={[styles.options, styles.optionsPosition]}>
            <View style={[styles.option4, styles.optionLayout1]}>
              <View style={[styles.optionInner, styles.optionLayout]} />
              <Text style={[styles.service, styles.totalTypo]}>Name:</Text>
              <Text style={[styles.insideFridge, styles.textTypo]}>{route.params.userName}</Text>
              <MaterialCommunityIcons
                style={[styles.icon, styles.iconPosition]}
                name="room-service-outline"
                size={24}
                color={Color.slateblue} />
            </View>
            <View style={[styles.option1, styles.optionLayout1]}>
              <View style={[styles.optionItem, styles.optionLayout]} />
              <Text style={[styles.option2, styles.totalTypo]}>Option:</Text>
              <Text style={[styles.option3, styles.textTypo]}>{route.params.optionName}</Text>
              <MaterialCommunityIcons
                style={[styles.icon, styles.iconPosition]}
                name="apple-keyboard-option"
                size={24}
                color={Color.slateblue} />
            </View>
            <View style={[styles.option, styles.optionLayout1]}>
              <View style={[styles.optionChild, styles.optionLayout]} />
              <Text style={[styles.total, styles.totalTypo]}>Total:</Text>
              <Text style={[styles.text, styles.textTypo]}>{route.params.total.toLocaleString("vi-VN")}</Text>
              <MaterialCommunityIcons
                style={[styles.icon, styles.iconPosition]}
                name="credit-card-outline"
                size={24}
                color={Color.slateblue} />
            </View>
          </View>
          <Pressable
            onPress={() => handlePaymentPress()}
            style={styles.badge}
          >
            <Text style={styles.labelText}>Pay now</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  optionsPosition: {
    position: "absolute",
  },
  text1FlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  optionLayout1: {
    width: 373,
    position: "absolute",
  },
  optionLayout: {
    opacity: 0.1,
    height: 1,
    borderTopWidth: 0.6,
    borderColor: "#707070",
    borderStyle: "solid",
    width: 373,
    left: 0,
    position: "absolute",
  },
  totalTypo: {
    color: Color.darkslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    fontSize: 16,
    textAlign: "left",
    letterSpacing: 0.2,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.darkslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    fontSize: 16,
    letterSpacing: 0.2,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupLayout: {
    height: 183,
    width: 311,
  },
  parentLayout: {
    width: 264,
    position: "absolute",
  },
  text2Typo: {
    fontWeight: "500",
    textAlign: "left",
  },
  labelText: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSansBold,
    color: Color.slateblue,
    textAlign: "center",
  },
  badge: {
    height: "12.1%",
    width: "84.84%",
    top: "75.16%",
    right: "7.69%",
    bottom: "12.74%",
    left: "7.47%",
    borderRadius: Border.br_sm,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  detailChild: {
    top: 131,
    borderRadius: 36,
    width: 366,
    height: 200,
    backgroundColor: Color.white,
  },
  detail1: {
    top: 61,
    left: 26,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoSansExtrabold,
    letterSpacing: 0.2,
    color: Color.white,
    position: "absolute",
  },
  optionChild: {
    top: 44,
  },
  total: {
    left: 84,
    color: Color.darkslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    fontSize: 16,
    top: 1,
  },
  text: {
    right: 25,
    top: 0,
  },
  myplanIcon: {
    height: 18,
    top: 4,
    overflow: "hidden",
    width: 18,
    left: 30,
  },
  option: {
    height: 44,
    top: 115,
    left: 0,
  },
  optionItem: {
    top: 43,
  },
  option2: {
    top: 0,
    left: 84,
    color: Color.darkslategray,
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    fontSize: 16,
  },
  option3: {
    right: 25,
    top: 1,
  },
  calendarIcon: {
    top: 5,
    height: 24,
    width: 24,
    left: 30,
  },
  option1: {
    top: 55,
    height: 43,
    left: 0,
  },
  optionInner: {
    top: 42,
  },
  service: {
    left: 83,
    top: 0,
  },
  insideFridge: {
    right: 25,
    top: 1,
  },
  icon: {
    top: 2,
    left: 28,
  },
  option4: {
    left: 1,
    height: 42,
    top: 0,
  },
  options: {
    top: 152,
    width: 374,
    height: 159,
  },
  detail: {
    top: 349,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    backgroundColor: Color.slateblue,
    height: 463,
    width: "100%",
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  groupChild2: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.brandBlue,
    top: 0,
    left: 0,
  },
  visaPng1Icon: {
    left: 208,
    width: 56,
    height: 31,
    top: 0,
    position: "absolute",
  },
  availableBalance: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: FontFamily.interMedium,
    color: "rgba(255, 255, 255, 0.7)",
  },
  text1: {
    fontSize: 32,
    letterSpacing: -0.3,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    marginTop: 16,
  },
  availableBalanceParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  visaPng1Parent: {
    height: 70,
    top: 0,
    left: 0,
  },
  text2: {
    fontSize: 18,
    fontFamily: FontFamily.robotoMonoMedium,
    color: "rgba(255, 255, 255, 0.64)",
    top: 115,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 22,
    left: 23,
    height: 139,
  },
  rectangleGroup: {
    top: 126,
  },
  paymentMethod: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
    alignItems: "center",
  },
});

export default PaymentMethod;
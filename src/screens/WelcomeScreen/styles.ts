import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    box: {
      alignItems: "center",
      backgroundColor: Colors.WHITE,
      flex: 1,
      justifyContent: "center",
    },
    button: {
      backgroundColor: Colors.GOLD,
      borderRadius: RFValue(16),
      marginVertical: RFValue(6),
      paddingHorizontal: RFValue(48),
      paddingVertical: RFValue(16),
      width: "100%",
    },
    buttonContainer: {
      paddingVertical: RFValue(40),
    },
    buttonText: {
      color: Colors.WHITE,
      fontSize: RFValue(24),
      textAlign: "center",
    },
    colorBlack: {
      color: Colors.BLACK,
    },
    container: {
      marginVertical: RFValue(16),
      width: "88%",
    },
    fontSizeBig: {
      fontSize: RFValue(40),
    },
    fontSizeMedium: {
      fontSize: RFValue(22),
    },
    imageContainer: {
      alignItems: "center",
      height: "24%",
      width: "88%",
    },
    image: {
      height: "100%",
      resizeMode: "contain",
      width: "100%",
    },
    RubikBold: {
      fontFamily: "Rubik_700Bold",
    },
    RubikItalic: {
      fontFamily: "Rubik_300Light_Italic",
    },
    RubikRegular: {
      fontFamily: "Rubik_400Regular",
    },
    text: {
      color: Colors.BLACK,
      textAlign: "center",
    },
    textContainer: {
      alignItems: "center",
    },
  });

export default createStyles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    airportName: {
      backgroundColor: Colors.YELLOW,
      borderTopLeftRadius: RFValue(8),
      borderTopRightRadius: RFValue(8),
      color: Colors.BLACK,
    },
    body: {
      alignItems: "center",
      backgroundColor: Colors.GREY,
      flex: 1,
      justifyContent: "center",
    },
    buttonsContainer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: RFValue(16),
    },
    center: {
      alignItems: "center",
    },
    colorBlack: {
      color: Colors.BLACK,
    },
    colorPrimary: {
      color: Colors.WHITE,
    },
    colorSecondary: {
      color: Colors.GOLD,
    },
    container: {
      marginVertical: RFValue(16),
      width: "88%",
    },
    fontSizeBig: {
      fontSize: RFValue(40),
    },
    fontSizeMedium: {
      fontSize: RFValue(20),
    },
    fontSizeSmall: {
      fontSize: RFValue(16),
    },
    iconColorBlue: {
      backgroundColor: Colors.BLUE,
      width: RFValue(70),
    },
    iconColorRed: {
      backgroundColor: Colors.RED,
      width: RFValue(70),
    },
    iconContainer: {
      alignItems: "center",
      backgroundColor: Colors.YELLOW,
      borderRadius: RFValue(8),
      display: "flex",
      flexDirection: "row",
      height: RFValue(148),
      justifyContent: "center",
      marginBottom: RFValue(4),
      marginTop: RFValue(8),
      width: RFValue(148),
    },
    padding: {
      paddingVertical: RFValue(16),
    },
    paddingSm: {
      paddingVertical: RFValue(4),
    },
    row: {
      backgroundColor: Colors.ANTHRACITE,
      height: RFValue(48),
      justifyContent: "center",
      marginTop: RFValue(4),
      paddingLeft: RFValue(4),
    },
    RubikBold: {
      fontFamily: "Rubik_700Bold",
      textAlign: "center",
    },
    RubikRegular: {
      fontFamily: "Rubik_400Regular",
    },
    RubikMedium: {
      fontFamily: "Rubik_500Medium",
    },
  });

export default createStyles;

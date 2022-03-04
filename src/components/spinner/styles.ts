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
    loading: {
      alignItems: "center",
      height: RFValue(128),
      justifyContent: "center",
      marginTop: RFValue(24),
    },
    spinner: {
      height: RFValue(96),
      width: RFValue(96),
    },
  });

export default createStyles;

import React, { FC, useMemo } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useAirportsQuery } from "../../services/airportsApi";
import { LOGO } from "../../assets/Images";
import Spinner from "../../components/spinner";
import createStyles from "./styles";

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const WelcomeScreen: FC<Props> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  const { data, error, isLoading, isSuccess } = useAirportsQuery();

  return (
    <SafeAreaView style={styles.box}>
      <View style={[styles.container, styles.imageContainer]}>
        <Image style={styles.image} source={LOGO} />
      </View>

      <View style={[styles.container, styles.textContainer]}>
        <Text style={[styles.text, styles.fontSizeBig, styles.RubikBold]}>
          Airport Finder
        </Text>

        <Text style={[styles.text, styles.fontSizeMedium, styles.RubikItalic]}>
          Find the airport and go there!
        </Text>
      </View>

      <View>
        {isLoading && <Spinner />}
        {error && <Text>{error}</Text>}
        {isSuccess && data && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("MapScreen")}
          >
            <Text
              style={[
                styles.button,
                styles.buttonText,
                styles.colorBlack,
                styles.RubikBold,
              ]}
            >
              Start!
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

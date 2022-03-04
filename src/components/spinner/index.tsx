import React, { FC, useMemo } from "react";
import { Image, Text, View } from "react-native";
import { SPINNER } from "../../assets/Images";
import createStyles from "./styles";

const Spinner: FC = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.loading}>
      <Image style={styles.spinner} source={SPINNER} />
      <Text>Your planes are flying in from the server...</Text>
    </View>
  );
};

export default Spinner;

import React, { FC, useMemo } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getEmojiFlag } from "countries-list";
import openMap from "react-native-open-maps";
import createStyles from "./styles";

import type { RouteProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: any;
  // route: RouteProp<Props>; // What type should it be?
}

const AirportDetailsScreen: FC<Props> = ({ navigation, route }: Props) => {
  const { airport } = route.params;
  const styles = useMemo(() => createStyles(), []);
  const lookup = require("country-code-lookup");
  const enableAirportNavigation = () => {
    openMap({
      latitude: Number(airport.lat),
      longitude: Number(airport.lon),
      end: airport.name,
    });
  };

  const flagCode = lookup.byCountry(airport.country).internet;
  const flag = getEmojiFlag(flagCode);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={[styles.airportName, styles.paddingSm]}>
          <Text
            style={[
              styles.colorBlack,
              styles.fontSizeBig,
              styles.padding,
              styles.RubikBold,
            ]}
          >
            {airport.name}
          </Text>
        </View>

        <View style={[styles.paddingSm, styles.row]}>
          <Text
            style={[
              styles.colorPrimary,
              styles.fontSizeMedium,
              styles.RubikRegular,
            ]}
          >
            Code:{" "}
            <Text
              style={[
                styles.colorSecondary,
                styles.fontSizeMedium,
                styles.RubikMedium,
              ]}
            >
              {airport.code}
            </Text>
          </Text>
        </View>

        <View style={[styles.paddingSm, styles.row]}>
          <Text
            style={[
              styles.colorPrimary,
              styles.fontSizeMedium,
              styles.RubikRegular,
            ]}
          >
            Country:{" "}
            <Text
              style={[
                styles.colorSecondary,
                styles.fontSizeMedium,
                styles.RubikMedium,
              ]}
            >
              {airport.country}{" "}
            </Text>
            <Text>{flag}</Text>
          </Text>
        </View>

        {airport.url ? (
          <View style={[styles.paddingSm, styles.row]}>
            <Text
              style={[
                styles.colorSecondary,
                styles.fontSizeMedium,
                styles.RubikRegular,
              ]}
            >
              <Text
                style={{ paddingVertical: 20 }}
                onPress={() => {
                  Linking.openURL(airport.url);
                }}
              >
                {airport.url}
              </Text>
            </Text>
          </View>
        ) : null}

        {airport.phone ? (
          <View style={[styles.paddingSm, styles.row]}>
            <Text
              style={[
                styles.colorPrimary,
                styles.fontSizeMedium,
                styles.RubikRegular,
              ]}
            >
              Phone:{" "}
              <Text
                onPress={() => {
                  Linking.openURL(`tel:${airport.phone}`);
                }}
                style={[
                  styles.colorSecondary,
                  styles.fontSizeMedium,
                  styles.RubikMedium,
                ]}
              >
                {airport.phone}
              </Text>
            </Text>
          </View>
        ) : null}

        <View style={[styles.paddingSm, styles.row]}>
          <Text
            style={[
              styles.colorPrimary,
              styles.fontSizeMedium,
              styles.RubikRegular,
            ]}
          >
            Runway length:{" "}
            {airport.runway_length ? (
              <Text
                style={[
                  styles.colorSecondary,
                  styles.fontSizeMedium,
                  styles.RubikMedium,
                ]}
              >
                {airport.runway_length}
              </Text>
            ) : (
              <Text style={styles.RubikItalic}>no data</Text>
            )}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={[styles.center]}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.navigate("MapScreen")}
            >
              <MaterialCommunityIcons
                name="map-search-outline"
                size={96}
                color="black"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.colorPrimary,
                styles.RubikMedium,
                styles.fontSizeSmall,
              ]}
            >
              Back to the map
            </Text>
          </View>

          <View style={[styles.center]}>
            <TouchableOpacity
              style={[styles.iconContainer]}
              onPress={() => enableAirportNavigation()}
            >
              <MaterialCommunityIcons
                name="map-marker-right-outline"
                size={96}
                color="black"
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.colorPrimary,
                styles.RubikMedium,
                styles.fontSizeSmall,
              ]}
            >
              Start navigation
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AirportDetailsScreen;

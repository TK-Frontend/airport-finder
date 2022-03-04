import React, { FC, useEffect, useMemo, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { useAirportsQuery } from "../../services/airportsApi";
import * as Location from "expo-location";
import { Airport } from "../../models/airport.model";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
  airport: Airport;
}

const MapScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  const { data } = useAirportsQuery();

  const [location, setLocation] = useState<null | Object>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: 51.09877,
        longitude: 17.03651,
        latitudeDelta: 4.015,
        longitudeDelta: 0.4021,
      }}
    >
      {data?.map((airport) => (
        <Marker
          key={airport.code}
          coordinate={{
            latitude: Number(airport.lat),
            longitude: Number(airport.lon),
          }}
          title={airport.name}
          description={airport.code}
          onPress={() =>
            navigation.navigate("AirportDetailsScreen", {
              airport,
            })
          }
        />
      ))}
    </MapView>
  );
};

export default MapScreen;

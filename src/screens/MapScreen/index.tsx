import React, { FC, useEffect, useMemo, useState } from "react";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { useAirportsQuery } from "../../services/airportsApi";
import * as Location from "expo-location";

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const MapScreen: FC<Props> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  const { data } = useAirportsQuery(); // How to use this data without using useQuery? // It's already in our store, isn't it?

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
      clusterColor="#de4032"
      radius={36}
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
              airport, // How to pass airport.id instead whole object. And how to pass it from store.
              // https://reactnavigation.org/docs/params#what-should-be-in-params
            })
          }
        />
      ))}
    </MapView>
  );
};

export default MapScreen;

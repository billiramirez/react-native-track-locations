import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h3>Track Create Screen</Text>
      <Map />
      {err ? <Text>Please Enable Location Services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

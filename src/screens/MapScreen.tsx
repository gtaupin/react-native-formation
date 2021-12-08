import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { ProviderPropType } from "react-native-maps";
import MapView, { AnimatedRegion, MarkerAnimated } from "react-native-maps";
import * as Location from "expo-location";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tieFighterImg from "../../assets/tie-fighter.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import xWingImg from "../../assets/x-wing.png";
const screen = Dimensions.get("window");

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface MapScreenProps {
  provider: ProviderPropType;
}

const MapScreen = (props: MapScreenProps) => {
  const [coordinate] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    })
  );
  const [coordinate2] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    })
  );
  const [marker, setMarker] = useState(null);
  const [marker2, setMarker2] = useState(null);
  const [location, setLocation] = useState(null);
  const [userRegion, setUserRegion] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      const locationTmp = await Location.getCurrentPositionAsync({});
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setLocation(locationTmp);
      setUserRegion({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        latitude: locationTmp.coords.latitude,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        longitude: locationTmp.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    })();
  }, []);
  function animate() {
    if (location) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const currentLatitude = location ? location.coords.latitude : LATITUDE;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const currentLongitude = location ? location.coords.longitude : LONGITUDE;
    /* PART 1 */
    const newCoordinate = {
      latitude: currentLatitude + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude:
        currentLongitude + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    if (Platform.OS === "android") {
      if (marker) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        marker._component.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      // `useNativeDriver` defaults to false if not passed explicitly
      coordinate.timing({ ...newCoordinate, useNativeDriver: true }).start();
    }

    /* PART 2 */
    const newCoordinate2 = {
      latitude: currentLatitude + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude:
        currentLongitude + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    if (Platform.OS === "android") {
      if (marker2) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        marker2._component.animateMarkerToCoordinate(newCoordinate2, 500);
      }
    } else {
      // `useNativeDriver` defaults to false if not passed explicitly
      coordinate2.timing({ ...newCoordinate2, useNativeDriver: true }).start();
    }
  }

  animate();
  return (
    <View style={styles.container}>
      <MapView
        provider={props.provider}
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        region={userRegion}
      >
        <MarkerAnimated
          key="marker-1"
          ref={(markerTmp) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMarker(markerTmp);
          }}
          image={xWingImg}
          title="X-Wing"
          coordinate={coordinate}
        />
        <MarkerAnimated
          key="marker-2"
          ref={(markerTmp2) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMarker2(markerTmp2);
          }}
          image={tieFighterImg}
          title="Tie Fighter"
          coordinate={coordinate2}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => animate()}
          style={[styles.bubble, styles.button]}
        >
          <Text>Refresh Spaceships Position</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//<Text>Location : {JSON.stringify(location)}</Text>
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

// eslint-disable-next-line import/no-default-export
export default MapScreen;

import React, { useState } from "react";
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
      latitudeDelta: 0,
      longitudeDelta: 0,
    })
  );
  const [coordinate2] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0,
    })
  );
  const [marker, setMarker] = useState(null);
  const [marker2, setMarker2] = useState(null);
  animate();
  function animate() {
    const newCoordinate = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
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

    const newCoordinate2 = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
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
          ref={(markerTmp) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMarker2(markerTmp);
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
          <Text>Refresh positions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  ActivityIndicator,
  useTheme,
} from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="space-station" />;
import { useStarships } from "../hooks/useStarships";
import { AppRoutes } from "../navigation/AppRoutes";

const Item = ({ item, open }) => (
  <Card elevation={3} style={styles.itemCard}>
    <Card.Title title={item.name} subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{item.starship_class}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button onPress={open}>Open</Button>
    </Card.Actions>
  </Card>
);

const WhatEverScreen = (props) => {
  function openWhatEvenItemScreen(item) {
    props.navigation.navigate(AppRoutes.WHAT_EVER_ITEM_SCREEN, { item: item });
  }

  const { isLoading, isError, data } = useStarships();
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("data", data);

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} />;
  } else {
    const renderItem = ({ item }) => (
      <Item item={item} open={() => openWhatEvenItemScreen(item)} />
    );

    return (
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data.results}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={() => (
              <React.Fragment>
                <Text
                  style={{
                    padding: 20,
                    color: "white",
                    backgroundColor: useTheme().colors.primary,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  My Spaceships
                </Text>
              </React.Fragment>
            )}
            stickyHeaderIndices={[0]}
          />
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  loader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  itemCard: {
    margin: 20,
  },
});

// eslint-disable-next-line import/no-default-export
export default WhatEverScreen;

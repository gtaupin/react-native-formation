import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph, ActivityIndicator } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="space-station" />;
import { useStarships } from "../hooks/useStarships";
import { AppRoutes } from "../navigation/AppRoutes";

const Item = ({ item, open }) => (
  <Card elevation={3}>
    <Card.Title title={item.name} subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{item.starship_class}</Title>
      <Paragraph>passengers : {item.passengers}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button onPress={open}>Open</Button>
    </Card.Actions>
  </Card>
);

const WhatEverScreen = (props) => {
  function openWhatEvenItemScreen(item) {
    console.log("ABC - to open item", item);
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
                <Text style={styles.listTitle}>My Spaceships</Text>
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
  listTitle: {
    padding: 20,
    color: "white",
    backgroundColor: "purple",
    fontSize: 20,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 400,
  },
});

export default WhatEverScreen;

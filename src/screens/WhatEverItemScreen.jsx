import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="space-invaders" />;

const WhatEverItemScreen = (props) => {
  const { item } = props.route.params;
  return (
    <Card elevation={3}>
      <Card.Title
        title={item.name}
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>{item.starship_class}</Title>
        <Paragraph>{item.consumables}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  );
};

const styles = StyleSheet.create({});

// eslint-disable-next-line import/no-default-export
export default WhatEverItemScreen;

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
        <Paragraph>model : {item.model}</Paragraph>
        <Paragraph>passengers : {item.passengers}</Paragraph>
        <Paragraph>starship_class : {item.starship_class}</Paragraph>
        <Paragraph>cargo_capacity : {item.cargo_capacity}</Paragraph>
        <Paragraph>consumables : {item.consumables}</Paragraph>
        <Paragraph>cost_in_credits : {item.cost_in_credits}</Paragraph>
        <Paragraph>created : {item.created}</Paragraph>
        <Paragraph>crew : {item.crew}</Paragraph>
        <Paragraph>edited : {item.edited}</Paragraph>
        <Paragraph>hyperdrive_rating : {item.hyperdrive_rating}</Paragraph>
        <Paragraph>length : {item.length}</Paragraph>
        <Paragraph>manufacturer : {item.manufacturer}</Paragraph>
        <Paragraph>
          max_atmosphering_speed : {item.max_atmosphering_speed}
        </Paragraph>
        <Paragraph>MGLT : {item.MGLT}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

// eslint-disable-next-line import/no-default-export
export default WhatEverItemScreen;

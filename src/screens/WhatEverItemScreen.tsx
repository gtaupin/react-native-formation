import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="space-invaders" />;

const WhatEverItemScreen = (props) => {
  const { item } = props.route.params;
  return (
    <Card elevation={3} style={styles.mainItem}>
      <Card.Title
        title={item.name}
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>{item.starship_class}</Title>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>model : </Paragraph>
          {item.model}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>passengers : </Paragraph>
          {item.passengers}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>starship_class : </Paragraph>
          {item.starship_class}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>cargo_capacity : </Paragraph>
          {item.cargo_capacity}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>consumables : </Paragraph>
          {item.consumables}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>
            cost_in_credits :{" "}
          </Paragraph>
          {item.cost_in_credits}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>created : </Paragraph>
          {item.created}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>crew : </Paragraph>
          {item.crew}
        </Paragraph>

        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>edited : </Paragraph>
          {item.edited}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>
            hyperdrive_rating :{" "}
          </Paragraph>
          {item.hyperdrive_rating}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>length : </Paragraph>
          {item.length}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>manufacturer : </Paragraph>
          {item.manufacturer}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>
            max_atmosphering_speed :{" "}
          </Paragraph>
          {item.max_atmosphering_speed}
        </Paragraph>
        <Paragraph>
          <Paragraph style={styles.paragraphTitle}>MGLT : </Paragraph>
          {item.MGLT}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainItem: {
    margin: 20,
  },
  paragraphTitle: {
    fontWeight: "bold",
  },
});

// eslint-disable-next-line import/no-default-export
export default WhatEverItemScreen;

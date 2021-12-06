import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const DATA = [
  {
    key: '1',
    title: 'Main Title - 1',
    description: 'Main description - 1'
  },
  {
    key: '2',
    title: 'Main Title - 2',
    description: 'Main description - 2'
  },
  {
    key: '3',
    title: 'Main Title - 3',
    description: 'Main description - 3'
  },
  {
    key: '4',
    title: 'Main Title - 4',
    description: 'Main description - 4'
  },
  {
    key: '5',
    title: 'Main Title - 5',
    description: 'Main description - 5'
  },
  {
    key: '6',
    title: 'Main Title - 6',
    description: 'Main description - 6'
  }
];

const Item = ({ title, description }) => (
  <Card elevation={3}>
    <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent}/>
    <Card.Content>
      <Title>{description}</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const WhatEverScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default WhatEverScreen;
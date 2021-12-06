import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import {useStarships} from '../hooks/useStarships'

const Item = ({ item }) => (
  <Card elevation={3}>
    <Card.Title title={item.name} subtitle="Card Subtitle" left={LeftContent}/>
    <Card.Content>
      <Title>{item.starship_class}</Title>
      <Paragraph>{item.consumables}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const WhatEverScreen = () => {
  const { isLoading, isError, data } = useStarships();
  console.log('isLoading', isLoading)
  console.log('isError', isError)
  console.log('data', data)

  if (isLoading) {
    return 'Loading...'
  } else {
    const renderItem = ({item}) => (
      <Item item={item}/>
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>
    );
  }
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
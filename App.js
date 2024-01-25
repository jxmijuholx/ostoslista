import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  // käyttäjän syöte tallennetaan tähän
  const [item, setItem] = useState('');
  // ostoslista joka koostuu käyttäjän syötteistä
  const [items, setItems] = useState([]);

  // Lisää ostoslistaan
  const addItem = () => {
      const newItems = [...items, item];
      setItem('');
   setItems(newItems);
  };

  // Tyhjennä ostoslista
  const clearList = () => {
   setItems([]);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.otsikko}>Ostoslista</Text>
      <TextInput
        style={styles.input}
        placeholder="Syötä ostos"
        value={item}
        onChangeText={(text) => setItem(text)}
      />
      <TouchableOpacity style={styles.addNappi} onPress={addItem}>
        <Text>Lisää</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearNappi} onPress={clearList}>
        <Text>Tyhjennä</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  addNappi: {
    backgroundColor: 'lightgreen',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  clearNappi: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },otsikko:{
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    fontSize: '50',
  }
});

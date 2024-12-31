```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyComponent;
```
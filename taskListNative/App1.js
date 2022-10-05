import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    // css em linha
    <View style={{flex: 1, backgroundColor: '#333', paddingTop: 28}}>
      {/* texto sempre dentro da tag TEXT */}
      <Text style={{fontSize: 30, color: 'white'}}>Hello World!</Text> 
    </View>
  );
}



import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CoinPage = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTC/USDT');

  const coins = [
    'BTC/USDT',
    'ETH/USDT',
    'FET/USDT',
    'INJ/USDT',
    'AVAX/USDT',
    'BNB/USDT',
    'WLD/USDT',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedCoin}
          onValueChange={(itemValue) => setSelectedCoin(itemValue)}
          style={styles.dropdown}
        >
          {coins.map((coin) => (
            <Picker.Item key={coin} label={coin} value={coin} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Get Last Price</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 550,
  },
  dropdown: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#f0c040', // Yellowish
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    bottom:520,
    width:'80%',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CoinPage;

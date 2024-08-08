import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const CoinPage = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTCUSDT');
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCoinData, setShowCoinData] = useState(false);

  const coins = [
    'BTCUSDT',
    'ETHUSDT',
    'FETUSDT',
    'INJUSDT',
    'AVAXUSDT',
    'BNBUSDT',
    'WLDUSDT',
  ];

  const fetchCoinData = async () => {
    setLoading(true);
    setShowCoinData(false); // Hide the container while fetching data
    try {
      const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${selectedCoin}`);
      setCoinData(response.data);
      setShowCoinData(true); // Show the container after data is fetched
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
    }
  };

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

      <TouchableOpacity style={styles.button} onPress={fetchCoinData}>
        <Text style={styles.buttonText}>Get Last Price</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        showCoinData && coinData && (
          <View style={styles.coinDataContainer}>
            <Text style={styles.coinDataTitle}>{coinData.symbol}</Text>
            <View style={styles.coinDataRow}>
              <Text style={styles.coinDataLabel}>Mark</Text>
              <Text style={styles.coinDataValue}>{coinData.lastPrice}</Text>
            </View>
            <View style={styles.coinDataRow}>
              <Text style={styles.coinDataLabel}>24h High</Text>
              <Text style={styles.coinDataValue}>{coinData.highPrice}</Text>
            </View>
            <View style={styles.coinDataRow}>
              <Text style={styles.coinDataLabel}>24h Low</Text>
              <Text style={styles.coinDataValue}>{coinData.lowPrice}</Text>
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 390,
  },
  dropdownContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#f0c040',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  coinDataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
  },
  coinDataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coinDataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  coinDataLabel: {
    fontSize: 14,
    color: '#555',
  },
  coinDataValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CoinPage;

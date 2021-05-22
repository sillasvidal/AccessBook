import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Voice from 'react-native-voice';
// import Speech from 'expo-speech';

import Icon from 'react-native-vector-icons/Feather';
import logoImg from './assets/AccessBook.png';

const App = () => {
  const [rate, setRate] = useState(0.8);
  const [book, setBook] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = (res) => {
      setBook(res.value[0]);
    }
    Voice.onSpeechRecognized = () => {
      console.log('reconhecendo');
    }
    Voice.onSpeechStart = () => {
      console.log('iniciou');
    }
    Voice.onSpeechEnd = () => {
      console.log('parou');
    }
    Voice.onSpeechError = (error) => {
      console.log(error);
    }	
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        
      <Image source={logoImg} />


      <TouchableOpacity
        style={styles.buttonSearchContainer}
        onPress={() => Voice.start('pt-BR')} 
      >
        <Icon name="search" size={70} color="#F6FBF7" />
        <Text style={styles.textButtonSearch}>Buscar Livro</Text>
      </TouchableOpacity>


      <View style={styles.containerFooterOptions}>
        <TouchableOpacity style={styles.itemFooterOptionsWhite}>
          <Icon name="rewind" size={30} color="#4d4d4d" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFooterOptionsGreen}>
          <Icon name="fast-forward" size={30} color="#F6FBF7" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFooterOptionsWhite}>
          <Icon name="volume-1" size={30} color="#4d4d4d" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFooterOptionsGreen} >
          <Icon name="volume-x" size={30} color="#F6FBF7" />
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#F6FBF7',
    paddingTop: 50
  },
  buttonSearchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4db592',
    width: 350,
    height: 350,
    borderRadius: 175
  },
  textButtonSearch: {
    color: '#F6FBF7',
    fontSize: 36,
    fontWeight: 'bold'
  },
  containerFooterOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 63
  },
  itemFooterOptionsWhite: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 63,
  },
  itemFooterOptionsGreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 63,
    backgroundColor: '#4db592'
  },
});

export default App;

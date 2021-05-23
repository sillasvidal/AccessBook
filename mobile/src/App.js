import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import Voice from 'react-native-voice';
import * as Speech from 'expo-speech';

import api from './services/api';

import Icon from 'react-native-vector-icons/Feather';
import logoImg from './assets/AccessBook.png';

const App = () => {
  const [rate, setRate] = useState(0.8);
  const [text, setText] = useState('');
  const [book, setBook] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = (res) => {
      setText(res.value[0]);
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

  useEffect(async () => {
    if(text === '') {
      return;
    }
    const books = await api.get(`books/${text}`);

    setBook(books.data);
  }, [text]);

  useEffect(() => {
    if(book === '') return;

    Speech.speak(book, {
      language: 'pt-BR',
      rate: rate
    });
  }, [book]);

  console.log(rate)


  const rateSum = () => {
    if (rate<1) setRate(rate + 0.1)
  }

  const rateSub = () => {
    if (rate>0) setRate(rate - 0.1)
  }

  return (
    <SafeAreaView style={styles.container}>
        
      <Image source={logoImg} style={styles.logoImage} />

      {/* <Button 
        title="teste"
        onPress={() => Speech.speak(book, {
          language: 'pt-BR',
          rate: rate
        })}
      /> */}

      <TouchableOpacity
        style={styles.buttonSearchContainer}
        onPress={() => Voice.start('pt-BR')} 
      >
        <Icon name="search" size={70} color="#F6FBF7" />
        <Text style={styles.textButtonSearch}>Buscar Livro</Text>
      </TouchableOpacity>


      <View style={styles.containerFooterOptions}>
        <TouchableOpacity onPress={rateSub} style={styles.itemFooterOptionsWhite}>
          <Icon name="rewind" size={30} color="#4d4d4d" />
        </TouchableOpacity>
        <TouchableOpacity onPress={rateSum} style={styles.itemFooterOptionsGreen}>
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
  logoImage: {
    width: 250,
    height: 35
  },
  buttonSearchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4db592',
    width: 350,
    height: 350,
    borderRadius: 175,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
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

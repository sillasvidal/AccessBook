import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import Voice from 'react-native-voice';
import * as Speech from 'expo-speech';

import api from './services/api';

import Icon from 'react-native-vector-icons/Feather';
import logoImg from './assets/AccessBook.png';

import styles from './styles';

const App = () => {
  const [rate, setRate] = useState(0.8);
  const [text, setText] = useState('');
  const [book, setBook] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = (res) => {
      setText(res.value[0]);
    }

    Voice.onSpeechRecognized = () => {
      console.log('recognizing');
    }

    Voice.onSpeechStart = () => {
      console.log('started');
    }

    Voice.onSpeechEnd = () => {
      console.log('stopped');
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

  const rateSum = () => {
    if (rate<1) setRate(rate + 0.1);
  }

  const rateSub = () => {
    if (rate>0) setRate(rate - 0.1);
  }

  return (
    <SafeAreaView style={styles.container}>
        
      <Image source={logoImg} style={styles.logoImage} />

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

export default App;

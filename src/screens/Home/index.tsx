import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hero } from './types';
import api from '../../services/apiService';
import theme from '../../styles/themes';

import styles from './styles';

const Home:React.FC = () => {
  const [heroName, setHeroName] = useState<string>();
  const [heroes, setHeroes] = useState<Array<Hero>>();

  const navigation = useNavigation();

  async function searchHero():Promise<void> {
    if (!(heroName?.trim())) {
      Alert.alert('Aviso', 'Nenhum nome informado!');
      return;
    }

    try {
      const response = await api.get(`/search/${heroName}`);

      if (!response.data.results) {
        return Alert.alert('Erro', 'Hero not found!');
      }

      const data = response.data.results.map((item:any) => ({
        id: item.id,
        name: item.name,
        image: item.image.url,
      }));

      setHeroes(data);

    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search a hero!'
          placeholderTextColor={theme.placeholder}
          onChangeText={text => setHeroName(text)}
          onEndEditing={searchHero}
        />
      </View>

      {!heroes && 
        <View style={styles.noHeroesContainer}>
          <Text style={styles.noHeroesText}>No heroes found!</Text>
        </View>
      }

      <FlatList
        data={heroes}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.heroCard}>
            <Image style={styles.heroCardImage} source={{ uri: item.image }}/>
            <View style={styles.heroCardDetails}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { hero: item })}>
                <Text style={styles.heroCardText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Home;
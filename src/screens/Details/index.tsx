import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Props, Hero } from './types';
import api from '../../services/apiService';
import styles from './styles';

const Details:React.FC<Props> = ({ route }) => {
  const [heroData, setHeroData] = useState<Hero>();

  const { id, name, image } =  route.params.hero;

  useEffect(() => {
    async function getHeroData() {
      const response = await api.get(`/${id}`);

      const data = {
        name: response.data.name,
        biography: {
          full_name: response.data['biography']['full-name'],
          alter_egos: response.data['biography']['alter-egos'],
          place_of_birth: response.data['biography']['place-of-birth'],
          first_appearance: response.data['biography']['first-appearance'],
          publisher: response.data.biography.publisher,
          alignment: response.data.biography.alignment,
        },

        appearance: {
          gender: response.data.appearance.gender,
          race: response.data.appearance.race,
        },

        work: {
          occupation: response.data.work.occupation,
          base: response.data.work.base,
        },

        connections: {
          group_affiliation: response.data['connections']['group-affiliation'],
          relatives: response.data.connections.relatives,
        }
      };

      setHeroData(data);
    }

    getHeroData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.heroImage} source={{ uri: image }}/>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.span}>{name}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Full name:</Text>
          <Text style={styles.span}>{heroData?.biography.full_name}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Alter Egos:</Text>
          <Text style={styles.span}>{heroData?.biography.alter_egos}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.span}>{heroData?.appearance.gender}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Race:</Text>
          <Text style={styles.span}>{heroData?.appearance.race}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Place of Birth:</Text>
          <Text style={styles.span}>{heroData?.biography.place_of_birth}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.label}>Debut:</Text>
          <Text style={styles.span}>{heroData?.biography.first_appearance}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Publisher:</Text>
          <Text style={styles.span}>{heroData?.biography.publisher}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>alignment:</Text>
          <Text style={styles.span}>{heroData?.biography.alignment}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.label}>Ocupation:</Text>
          <Text style={styles.span}>{heroData?.work.occupation}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Base:</Text>
          <Text style={styles.span}>{heroData?.work.base}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.label}>Affiliation:</Text>
          <Text style={styles.span}>{heroData?.connections.group_affiliation}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Relatives:</Text>
          <Text style={styles.span}>{heroData?.connections.relatives}</Text>
        </View>
      </View>

    </ScrollView>
  );
}

export default Details;
import {View, Image, FlatList} from "react-native"

import { GAMES } from "../../utils/games";

import logoImage from "../../assets/logo-nlw-esports.png"
import { styles } from './styles';

import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage} />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            cover={item.cover}
            ads={item.ads}
            id={item.id}
            name={item.name}
          />
        )}
        contentContainerStyle={styles.contentList}
      />
      
    </View>
  );
}
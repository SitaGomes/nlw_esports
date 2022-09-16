import React from 'react';
import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps, Text } from 'react-native';

import {LinearGradient} from "expo-linear-gradient"

import { styles } from './styles';
import { THEME } from '../../theme';

export interface IGameCard extends TouchableOpacityProps{
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

export function GameCard({cover, ads, id, name, ...rest}: IGameCard) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
        <ImageBackground
            style={styles.cover} 
            source={cover}
        >

            <LinearGradient 
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.ads}>{ads} Anúncios</Text>
            </LinearGradient>

        </ImageBackground>

    </TouchableOpacity>
  );
}
import React, { Component, useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import FlatListScroll from './FlatListScroll';
const data = [
{
"title": "Galão",
"description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
"ingredients": [
"Espresso",
"Foamed milk"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg",
"id": 9
},
{
"title": "Lungo",
"description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
"ingredients": [
"Long pulled espresso"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG",
"id": 10
},
{
"title": "Mocha",
"description": "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
"ingredients": [
"Espresso",
"Steamed Milk",
"Chocolate"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg",
"id": 12
},
{
"title": "Ristretto",
"description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
"ingredients": [
"Short pulled espresso"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg",
"id": 13
},
{
"title": "Flat White",
"description": "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
"ingredients": [
"Espresso",
"Steamed Milk"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg",
"id": 14
},
{
"title": "Affogato",
"description": "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
"ingredients": [
"Espresso",
"Ice cream"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg",
"id": 15
},
{
"title": "Café au Lait",
"description": "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
"ingredients": [
"Coffee",
"Steamed Milk"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg",
"id": 16
},
{
"title": "Irish",
"description": "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
"ingredients": [
"Coffee",
"Whiskey",
"Sugar",
"Cream"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Irish_coffee_glass.jpg",
"id": 17
},
{
"title": "Guayoyo",
"description": "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
"ingredients": [
"Coffee",
"Traditional",
"Hot Water"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
"id": 18
},
{
"title": "Cortadito",
"description": "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
"ingredients": [
"Coffee",
"Traditional",
"Sugar",
"Milk"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg",
"id": 19
},
{
"title": "Aguapanela Coffee",
"description": "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
"ingredients": [
"Coffee",
"Sweet",
"Panela",
"Traditional"
],
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg/640px-Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg",
"id": 20
}
]
export default function FlatListComp({ navigation }) {
  const animation = useRef(null);
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=6f75a5bb81c342e6bdee8526a2482c8d&offset=0&number=100';
  // const url = 'https://jsonplaceholder.typicode.com/photos';
  const windowWidth = Dimensions.get('window').width;
  

  const [loaded] = useFonts({
    'sf-pro-medium': require('../assets/fonts/sf-pro-med.otf'),
  });

  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <>
    {
            <ScrollView>
            {
              data.map((dataOfData) => {
                return( 
                  <View style={{margin: 10, marginBottom: 20, alignItems: 'center', overflow: 'hidden', padding: 10}}>
                    <Image style={{height: 250, width: '100%', borderRadius: 20}} source={{uri: dataOfData.image}} />
                    <Text style={{textAlign: 'center',fontFamily: "sf-pro-medium", margin: 10,marginBottom: 5, fontSize: 14}}>
                      {dataOfData.title}
                    </Text>
                    <Text style={{textAlign: 'center',color: 'grey',fontFamily: "sf-pro-medium", fontSize: 14}} numberOfLines={1}>
                      {dataOfData.description}
                    </Text>
                  </View>
                )

              })
            }
          </ScrollView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  
});

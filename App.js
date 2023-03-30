import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FlatListComp from './components/FlatListComp';
import { useFonts } from 'expo-font';
import Beverages from './components/Beverages'
import Salads from './components/Salads'
import Seafood from './components/Seafood'

const listTab = [
  {
    status: 'Make',
    img: 'https://i.ibb.co/pvk1Kk2/481489.png',
  },
  {
    status: 'Restraunts',
    img: 'https://i.ibb.co/VtgmzFy/Group-2-3.png',
  },
  {
    status: 'Salads',
    img: 'https://i.ibb.co/L5WS2Gr/4421199.png',
  },
  {
    status: 'Seafood',
    img: 'https://i.ibb.co/RP2Qz2r/3081974.png',
  },
];

// 

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  const [showMake, setShowMake] = useState(true);
  const [showRestraunts, setShowRestraunts] = useState(false);
  const [showSalads, setSalads] = useState(false);
  const [showSeafood, setSeafood] = useState(false);
  const [status, setStatus] = useState('Make');
  const setStatusFilter = (status) => {
    setStatus(status);
    if (status === 'Make') {
      setShowRestraunts(false);
      setShowRestraunts(false)
      setShowMake(true);
    }
    if (status === 'Restraunts') {
      setShowMake(false);
      setShowRestraunts(false);
      setSeafood(false);
      setShowRestraunts(true);
    }
    if (status === 'Salads') {
      setShowMake(false);
      setShowRestraunts(false);
      setSeafood(false);
      setSalads(true);
    }
    if (status === 'Seafood') {
      setShowMake(false);
      setShowRestraunts(false);
      setSalads(false);
      setSeafood(true);
    }
  };

  const [loaded] = useFonts({
    'sf-pro-medium': require('./assets/fonts/sf-pro-med.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={{ flexDirection: 'column' }}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 35,
            marginTop: 35,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{ height: 45, width: 45, marginRight: 15 }}
            source={{ uri: 'https://i.ibb.co/TwFTZrP/Logo-3.png' }}
          />
          <View>
            <Text style={{ fontSize: 35, fontFamily: 'sf-pro-medium' }}>
              Eatables
            </Text>
            <Text style={{ fontSize: 13, fontFamily: 'sf-pro-medium', color: 'grey' }}>
              Made By Sai Santosh Pal
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            marginBottom: 12,
            height: 2,
            width: 350,
            backgroundColor: '#eee',
            alignSelf: 'stretch',
            marginLeft: 20,
          }}></View>
        <View style={styles.safeview}>
          <View style={styles.listTab}>
            {listTab.map((e) => (
              <TouchableOpacity
                style={styles.btnTab}
                onPress={() => setStatusFilter(e.status)}>
                <View style={{ flexDirection: 'column' }}>
                  <Image source={{ uri: e.img }} style={styles.textTab} />
                  <View
                    style={[
                      styles.slideTab,
                      status === e.status && styles.slideTabActive,
                    ]}></View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ flexDirection: 'column' }}>
            {showMake && <FlatListComp />}
            {showRestraunts && <Beverages />}
            {showSalads && <Salads />}
            {showSeafood && <Seafood />}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeview: {
    // flex: 1,
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // marginTop: 20,
    // backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    // flexDirection: 'row'
  },
  listTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  btnTab: {
    width: 50,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 30,
  },
  textTab: {
    // fontSize: 16
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginBottom: 2,
  },
  slideTab: {
    height: 0,
    width: 0,
    backgroundColor: '#000',
  },
  slideTabActive: {
    height: 3,

    width: 30,
    backgroundColor: '#1CD471',
    alignSelf: 'center',
  },
});

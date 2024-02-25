import { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles as s } from './index.styles';

import coldBg from '@/assets/images/cold.png';
import hotBg from '@/assets/images/hot.png';

const Page = () => {
  const [selectedTempUnit, setSelectedTempUnit] = useState('celcius');
  const [inputValue, setInputValue] = useState('0');
  const [convertedValue, setConvertedValue] = useState('0');
  const [bgImage, setBgImage] = useState(coldBg);
  const isCelcius = selectedTempUnit === 'celcius';

  const convertToFahrenheit = (temp: string): string => {
    return ((Number(temp) * 9) / 5 + 32).toFixed(1) + '°F';
  };

  const convertToCelcius = (temp: string): string => {
    return (((Number(temp) - 32) * 5) / 9).toFixed(1) + '°C';
  };

  const determineBgImage = (temp: string): void => {
    const convertedTemp = Number(temp.slice(0, -2));

    if (!isCelcius && convertedTemp > 0) {
      setBgImage(hotBg);
    } else if (convertedTemp <= 32) {
      setBgImage(coldBg);
    } else {
      setBgImage(hotBg);
    }
  };

  useEffect(() => {
    setConvertedValue(convertToFahrenheit(inputValue));
  }, []);

  useEffect(() => {
    determineBgImage(convertedValue);
  }, [convertedValue, selectedTempUnit]);

  return (
    <ImageBackground source={bgImage} style={s.image} resizeMode="cover">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            <Text style={s.temperature}>{convertedValue}</Text>
            <View style={s.inputContainer}>
              <TextInput
                placeholder="Please enter a temperature"
                style={s.input}
                keyboardType="numbers-and-punctuation"
                maxLength={3}
                defaultValue={inputValue}
                onChangeText={(value) => {
                  setInputValue(value);
                  return isCelcius
                    ? setConvertedValue(convertToFahrenheit(value))
                    : setConvertedValue(convertToCelcius(value));
                }}
                onPressIn={() => setInputValue('')}
              />
              <Text style={s.inputSuffix}>{isCelcius ? '°C' : '°F'}</Text>
            </View>
            <View style={s.buttonsContainer}>
              <TouchableOpacity
                style={[s.button, s.buttonLeft, isCelcius && s.buttonActive]}
                activeOpacity={1}
                onPress={() => {
                  setSelectedTempUnit('celcius');
                  setConvertedValue(convertToFahrenheit(inputValue));
                }}>
                <Text style={isCelcius ? s.buttonTextSelected : s.buttonText}>Celcius</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[s.button, s.buttonRight, !isCelcius && s.buttonActive]}
                activeOpacity={1}
                onPress={() => {
                  setSelectedTempUnit('fahrenheit');
                  setConvertedValue(convertToCelcius(inputValue));
                }}>
                <Text style={!isCelcius ? s.buttonTextSelected : s.buttonText}>Fahrenheit</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Page;

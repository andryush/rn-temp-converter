import { ImageBackground, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles as s } from './index.styles';

import coldBg from '@/assets/images/cold.png';
import hotBg from '@/assets/images/hot.png';

const Page = () => {
  return (
    <ImageBackground source={coldBg} style={s.image}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Text style={s.temperature}>aaaa</Text>
          <View style={s.inputContainer}>
            <TextInput
              placeholder="Please enter a temperature"
              style={s.input}
              keyboardType="numeric"
              maxLength={3}
            />
            <Text style={s.inputSuffix}>°C</Text>
          </View>
          <TouchableOpacity style={s.button} activeOpacity={0.5}>
            <Text style={s.buttonText}>Convert</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Page;

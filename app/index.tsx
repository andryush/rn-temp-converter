import { ImageBackground, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import coldBg from '@/assets/images/cold.png';
import hotBg from '@/assets/images/hot.png';

const Page = () => {
  return (
    <ImageBackground source={coldBg} style={{ height: '100%' }}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Text>aaaa</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Page;

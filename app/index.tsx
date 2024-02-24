import { Box, ImageBackground, Text } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import coldBg from '@/assets/images/cold.png';
import hotBg from '@/assets/images/hot.png';

const Page = () => {
  return (
    <ImageBackground source={coldBg} h="$full">
      <SafeAreaProvider>
        <SafeAreaView>
          <Box h="$full" w="$full" justifyContent="center" alignItems="center">
            <Text>aaaa</Text>
          </Box>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Page;

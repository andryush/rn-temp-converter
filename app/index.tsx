import { Box, Text } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Page = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Box width="100%" justifyContent="center" alignItems="center">
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Page;

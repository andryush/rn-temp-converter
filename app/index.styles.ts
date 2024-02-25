import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    gap: 20,
  },
  temperature: {
    fontSize: 90,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    fontSize: 20,
  },
  inputSuffix: {
    position: 'absolute',
    fontSize: 24,
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  button: {
    backgroundColor: '#000000',
    color: '#ffffff',
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    display: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

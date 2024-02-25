import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    gap: 20,
  },
  temperature: {
    fontSize: 50,
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
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    height: 50,
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLeft: {
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
  },
  buttonRight: {
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },
  buttonText: {
    color: '#000000',
    display: 'flex',
    fontSize: 22,
  },
  buttonTextSelected: {
    color: '#FFFFFF',
    display: 'flex',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonActive: {
    backgroundColor: '#52c41a',
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  formContainer: {
    width: '100%',
    maxWidth: 370,
    alignSelf: 'center',
    backgroundColor: 'rgba(13,17,23,0.95)',
    borderRadius: 30,
    padding: 40,
    shadowColor: '#1F6FEB',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 10,
  },
  title: {
    color: '#7FDBFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 1.2,
  },
  subtitle: {
    color: '#AAB8C2',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#161B22',
    color: '#fff',
    marginBottom: 16,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F6FEB',
    fontSize: 16,
    shadowColor: '#1F6FEB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#1F6FEB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#7FDBFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1.1,
  },
  secondaryButton: {
    marginTop: 18,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#7FDBFF',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default styles;
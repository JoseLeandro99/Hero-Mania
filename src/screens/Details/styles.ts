import { StyleSheet } from 'react-native';
import theme from '../../styles/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgPrimary,
    paddingBottom: 5,
  },

  imageContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },

  heroImage: {
    padding: 10,
    resizeMode: 'cover',
    width: '100%',
    height: 400,
    backgroundColor: '#eeeeee',
  },

  infoContainer: {
    padding: 10,
    backgroundColor: theme.bgSecondary,
    marginHorizontal:10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#dddddd55',
    borderRadius: 5,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.textPrimary,
  },

  span: {
    fontSize: 14,
    color: theme.textSecondary,
    marginLeft: 4,
  }
});
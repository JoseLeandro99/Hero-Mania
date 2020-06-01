import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../styles/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20,
    backgroundColor: theme.bgPrimary,
  },

  searchContainer: {
    marginBottom: 20,
    backgroundColor: theme.bgSecondary,
    borderRadius: 25,
  },

  searchInput: {
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 15,
    color: theme.textPrimary,
  },

  heroCard: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: theme.bgSecondary,
  },

  heroCardImage: {
    borderRadius: 15,
    resizeMode: 'cover',
    height: 300,
    backgroundColor: '#eeeeee',
  },

  heroCardDetails: {
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroCardText: {
    color: theme.textPrimary,
    fontSize: 18,
  },

  noHeroesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noHeroesText: {
    color: theme.textSecondary,
    fontSize: 25,
  }
});
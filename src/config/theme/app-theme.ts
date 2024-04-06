import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2d2d2d',
  lightGray: '#9b9b9b',
  orange: '#ff9427',
  textPrimary: '#fff',
  textSecondary: '#666',
  background: '#000',
};

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  mainResolve: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: colors.darkGray,
  },
  button_label: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '300',
  },
});

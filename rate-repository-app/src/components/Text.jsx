import Constants from 'expo-constants';

const colors = {
  textPrimary: '#24292e',
  textSecondary: '#586069',
  primary: '#0366d6',
  white: '#FFFFFF',
  black: '#000000',
  background: '#e1e4e8',
  blue:'#0366d6',
  red:'#d73a4a'
}

const theme = {
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: colors.textPrimary,
  },
  colors: {
    textPrimary: colors.textPrimary,
    textSecondary: colors.textSecondary,
    primary: colors.primary,
    white: colors.white,
    black: colors.black,
    backgroundColor : colors.background,
    blue:colors.blue,
    red:colors.red,
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    android: 'Roboto',
    ios:'Arial',
    default: 'System'
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  flexContainer: {
    display: 'flex',
    padding: 10,
    gap: 5,
    justifyContent:'flex-start',
    backgroundColor:'white'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
};



export default theme;
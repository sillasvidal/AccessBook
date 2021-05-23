import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: '#F6FBF7',
      paddingTop: 50
    },
    logoImage: {
      width: 250,
      height: 35
    },
    buttonSearchContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4db592',
      width: 350,
      height: 350,
      borderRadius: 175,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
    },
    textButtonSearch: {
      color: '#F6FBF7',
      fontSize: 36,
      fontWeight: 'bold'
    },
    containerFooterOptions: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: 63
    },
    itemFooterOptionsWhite: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '25%',
      height: 63,
    },
    itemFooterOptionsGreen: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '25%',
      height: 63,
      backgroundColor: '#4db592'
    },
  });

  export default styles;
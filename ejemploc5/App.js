import {  StyleSheet } from 'react-native';
import Cajita from './components/cajita';
import Sumar from './components/sumar';


export default function App() {



  return (
    <>
      <Sumar/>
    </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

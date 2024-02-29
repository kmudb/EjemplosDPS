import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import GridH from './componentes/GridH';


export default function App() {
  return (
    <GridH/>

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

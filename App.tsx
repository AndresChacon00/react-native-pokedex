import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { MainNavigator } from './src/navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';


const queryClient = new QueryClient()

const linking = {
  prefixes: ['http://localhost:19006', 'https://react-native-pokedex.vercel.app'],
  config: {
    screens: {
      Home: '',
      Detail: 'detail',
      Search: 'search',
    },
  },
};


export default function App() {
  return (
    <QueryClientProvider  client={queryClient}>
      <NavigationContainer linking={linking}>
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

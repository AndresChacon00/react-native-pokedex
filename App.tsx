import { StyleSheet } from 'react-native';
import { Home } from './src/screens/Home'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { MainNavigator } from './src/navigators/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider  client={queryClient}>
      <NavigationContainer>
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

import { Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function HomeScreen() {
  return (
    <View>
      <Text>This is my App</Text>
      <Link href="/home">Home</Link>
      <Link href="/cheese">Cheese</Link>
    </View>

  );
}

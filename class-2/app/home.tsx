import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return(
        <>
            <h1>Swag</h1>
            <Link href="/cheese">Cheese</Link>
        </>
    )
}
import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Id = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription ID: {id}</Text>
      <Link href="/subscriptions" className="mt-4 rounded bg-primary px-4 py-2">
        <Text className="text-white">Go Back to Home</Text>
      </Link>
    </View>
  );
};

export default Id;

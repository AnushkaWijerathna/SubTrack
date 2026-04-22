import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2">
        <Text className="text-white">Get onBoard</Text>
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-secondary px-4 py-2"
      >
        <Text className="text-white">Sign In</Text>
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-secondary px-4 py-2"
      >
        <Text className="text-white">Sign Up</Text>
      </Link>

      <Link
        href="/subscriptions/123"
        className="mt-4 rounded bg-secondary px-4 py-2"
      >
        <Text className="text-white">Go to Subscription 123</Text>
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        <Text className="mt-4 rounded bg-secondary px-4 py-2 text-white">
          Go to claude
        </Text>
      </Link>
    </SafeAreaView>
  );
}

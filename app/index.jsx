import { Text, View } from "react-native";
import TextC from "../components/TextC";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">Hello World</Text>
      <TextC />
    </View>
  );
}

import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

import {
  ViewProfilePageNavigationProp,
  ViewProfilePageRouteProp,
} from "../../routes";
import Box from "../themed/Box";
import ThemedAvatar from "../themed/ThemedAvatar";
import Text from "../themed/Text";
import ThemedButton from "../themed/ThemedButton";

// React Navigation Types and Page Options

type ViewProfilePageProps = {
  navigation: ViewProfilePageNavigationProp;
  route: ViewProfilePageRouteProp;
};

export const ViewProfilePageOptions: StackNavigationOptions = {
  title: "View Profile",
};

// Page Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

// Page Definition

export default function ViewProfilePage({ navigation }: ViewProfilePageProps) {
  return (
    <Box backgroundColor="mainBackground" style={styles.root}>
      <Box marginVertical="md">
        <ThemedAvatar
          uri="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
          size="xlarge"
        />
      </Box>
      <Text marginBottom="md" variant="header">
        Dummy Text
      </Text>
      <ThemedButton
        title="Press ME"
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: "Login" }] })
        }
      />
    </Box>
  );
}

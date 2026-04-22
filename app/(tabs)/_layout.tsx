//👉 “This sets up the bottom tabs of the app and controls which screens appear in the tab bar.”
import { tabs } from "@/consatants/data";
import { colors, components } from "@/consatants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar; //👉 This extracts the tabBar configuration from your theme constants, which includes properties like height, horizontalInset, radius, iconFrame, and itemPaddingVertical. These properties are used to style the tab bar and its icons consistent.

const TabLayout = () => {
  const insets = useSafeAreaInsets(); //👉 This hook is used to get the safe area insets of the device, which helps in adjusting the layout to avoid overlapping with system UI elements like the notch or home indicator.

  //👉 This controls how each tab icon looks
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    //Shows an icon If tab is active (focused): adds "tabs-active" style, otherwise just shows the icon with "tabs-glyph" style.
    //clsx is used to combine multiple styles conditionally based on whether the tab is focused or not.
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  //👉 Creates tab navigation
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {/* Loops through your tabs array */}
      {tabs.map((tab) => (
        //👉 For each tab, it creates a screen in the tab navigator with the appropriate name, title, and icon mapped from the tabs array.
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};
export default TabLayout;

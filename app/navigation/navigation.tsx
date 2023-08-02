import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./index";

import Settings from "../screen/settings";
import Navbar from "./nav-bar";
import Statistic from "../screen/statistic";

import { colors } from "../consts/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: colors.dark.bg.main },
				}}>
				<Stack.Screen name="Tab" component={Navbar} />
				<Stack.Screen name="Statistic" component={Statistic} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

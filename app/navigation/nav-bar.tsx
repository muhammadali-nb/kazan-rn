import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import Home from "../screen/home";
import { RootStackParamList } from ".";
import Training from "../screen/training";
import Earning from "../screen/earning";
import { colors } from "../consts/colors";

const Tab = createBottomTabNavigator<RootStackParamList>();

const Navbar = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={() => ({
				headerShown: false,
				contentStyle: { backgroundColor: colors.dark.bg.main },

				tabBarStyle: {
					height: 68,
					paddingBottom: 10,
					paddingTop: 10,
					backgroundColor: colors.dark.bg.main,
				},
			})}>
			<Tab.Screen name="Training" component={Training} />
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Earning" component={Earning} />
		</Tab.Navigator>
	);
};

export default Navbar;

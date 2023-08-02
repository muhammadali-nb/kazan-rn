import React from "react";
import { Text, View } from "react-native";

import tw from "twrnc";
import { colors } from "../../consts/colors";


import LuckyCoin from "../../icons/lucky-coin";
import SettingsBtn from "./settings-btn";

const ScoreCard = () => {
	return (
		<View
			style={tw`w-38 flex flex-row items-center justify-between bg-[${colors.dark.bg.drawer}] rounded-full pl-3 pr-2 py-1.5`}>
			<View style={tw`flex flex-row items-center`}>
				<LuckyCoin width={24} height={24} />
				<Text
					style={tw`text-base font-semibold  text-[${colors.dark.text.white}] ml-1.5`}>
					142,1k
				</Text>
			</View>
			<SettingsBtn />
		</View>
	);
};

export default ScoreCard;

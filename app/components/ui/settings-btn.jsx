import React from "react";
import { View } from "react-native";
import Settings from "../../icons/settings";
import tw from "twrnc";
import { colors } from "../../consts/colors";

const SettingsBtn = () => {
	return (
		<View
			style={tw`w-10 h-10 flex items-center justify-center bg-[${colors.dark.bg.secondary}] rounded-full`}>
			<Settings width={30} height={30} />
		</View>
	);
};

export default SettingsBtn;
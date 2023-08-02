import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";

interface IRulesCard {
	style?: object;
	title: string;
	description: string;
	color: string;
}

const RulesCard = (props: IRulesCard) => {
	const { style, title, description, color } = props;

	return (
		<View style={{ ...tw`bg-[${color}] px-5 py-4 rounded-2xl`, ...style }}>
			<Text style={tw`text-[${colors.dark.text.white}] text-xl font-bold`}>
				{title}
			</Text>
			<Text
				style={tw`text-[${colors.dark.text.white}] text-base font-semibold mt-2`}>
				{description}
			</Text>
		</View>
	);
};

export default RulesCard;

import React from "react";
import { Text, View } from "react-native";

import tw from "twrnc";
import { colors } from "../../../consts/colors";

const ScoreMatch = ({ score }: { score: string }) => {
	return (
		<View style={tw`px-3 py-1 bg-[${colors.dark.bg.drawer}] rounded-xl `}>
			<Text style={tw`font-bold text-2xl text-white`}>{score}</Text>
		</View>
	);
};

export default ScoreMatch;

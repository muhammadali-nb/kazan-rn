import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";
import CoinsCard from "../../ui/coins-card";
import ScoreCard from "../../ui/score-card";

const HomeHeader = () => {
	return (
		<View
			style={tw`flex flex-row justify-between bg-[${colors.dark.bg.secondary}] py-2 px-2 rounded-full`}>
			<CoinsCard />
			<ScoreCard />
		</View>
	);
};

export default HomeHeader;

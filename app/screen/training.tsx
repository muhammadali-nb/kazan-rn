import React from "react";
import { Text } from "react-native";
import TrainingLayout from "../components/layout/training-layout";
import TrainingRulesList from "../components/section/training/training-rules-list";
import tw from "twrnc";
import { colors } from "../consts/colors";

const Training = () => {
	return (
		<TrainingLayout>
			<Text style={tw`text-[${colors.dark.text.white}] font-bold text-3xl `}>
				Hockey rules
			</Text>
			<TrainingRulesList />
		</TrainingLayout>
	);
}

export default Training;
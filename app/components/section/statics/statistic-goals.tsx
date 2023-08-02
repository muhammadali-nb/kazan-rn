import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";

interface IStatisticGoals {
	firstTeam: string[];
	secondTeam: string[];
}

const StatisticGoals = (props: IStatisticGoals) => {
	const { firstTeam, secondTeam } = props;
	return (
		<View style={tw`py-2`}>
			<View
				style={tw`bg-[${colors.dark.bg.secondary}] pt-5 pb-6 px-4 rounded-2xl`}>
				<Text style={tw`text-white text-xl font-semibold mb-2`}>
					Match Goals:
				</Text>
				<View style={tw`flex flex-row  `}>
					<View
						style={tw` w-1/2 flex  items-start
          `}>
						{firstTeam.map((_item: string, index) => (
							<Text key={index} style={tw`text-white font-semibold `}>
								{_item}
							</Text>
						))}
					</View>
					<View style={tw` w-1/2 flex items-end `}>
						{secondTeam.map((_item: string, index) => (
							<Text key={index} style={tw`text-white font-semibold `}>
								{_item}
							</Text>
						))}
					</View>
				</View>
			</View>
		</View>
	);
};

export default StatisticGoals;

import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import PlayerCard, { IPlayerCard } from "../../ui/statistics/player-card";
import { colors } from "../../../consts/colors";

interface IStatisticPlayers {
	firstTeam: object[];
	secondTeam: object[];
}

const StatisticPlayers = (props: IStatisticPlayers) => {
	const { firstTeam, secondTeam } = props;

	return (
		<View style={tw`py-2`}>
			<View
				style={tw`bg-[${colors.dark.bg.secondary}] px-4 pt-4 pb-5 rounded-2xl`}>
				<Text style={tw`text-xl text-white font-bold`}>Players list:</Text>
				<View style={tw`flex flex-row mt-3`}>
					<View style={tw`flex items-start gap-y-2 w-1/2`}>
						{firstTeam.map((_item: IPlayerCard) => (
							<PlayerCard
								side="left"
								key={_item.id}
								image={_item.image}
								name={_item.name}
							/>
						))}
					</View>
					<View style={tw`flex items-end gap-y-2 w-1/2`}>
						{secondTeam.map((_item: IPlayerCard) => (
							<PlayerCard
								side="right"
								key={_item.id}
								image={_item.image}
								name={_item.name}
							/>
						))}
					</View>
				</View>
			</View>
		</View>
	);
};

export default StatisticPlayers;

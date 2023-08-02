import React from "react";
import { View } from "react-native";

import tw from "twrnc";
import { colors } from "../../../consts/colors";

import Team from "./team";
import ScoreMatch from "./score-match";
import DateMatch from "./data-match";
import MatchOptions from "./match-options";
import DescriptionMatch from "./description-match";
import { RootStackScreenProps } from "../../../navigation";
import { useNavigation } from "@react-navigation/native";

export type TypeTeam = {
	logo: string;
	name: string;
	id: string;
};

export interface IGameCard {
	style?: object;
	date: string;
	tournament: string;
	firstTeam: TypeTeam;
	secondTeam: TypeTeam;
	id: string;
	score: string;
}

const GameCard = (props: IGameCard) => {
	const { style, tournament, id, score, firstTeam, secondTeam, date } = props;
	const navigation = useNavigation<RootStackScreenProps<"Home">>();
	return (
		<View style={style}>
			<DescriptionMatch
				style={tw`absolute -top-5 self-center z-20`}
				title={tournament}
			/>
			<View
				style={tw`w-full bg-[${colors.dark.bg.secondary}] rounded-3xl px-3 pt-7 pb-5`}>
				<View style={tw`flex flex-row items-center justify-between`}>
					<Team
						image={require("../../../../assets/ducs-logo.png")}
						title={firstTeam?.name}
					/>
					<ScoreMatch score={score} />
					<Team
						title={secondTeam?.name}
						image={require("../../../../assets/chicago-blackhawks-logo.png")}
					/>
				</View>
				<DateMatch date={date} style={tw`mt-1 mb-3`} />
				<MatchOptions
					goToStatisticScreen={() => navigation.navigate("Statistic", { id })}
				/>
			</View>
		</View>
	);
};

export default GameCard;

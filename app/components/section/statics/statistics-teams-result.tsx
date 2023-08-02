import React from "react";
import { View } from "react-native";
import Team from "../../ui/home/team";
import ScoreMatch from "../../ui/home/score-match";
import tw from "twrnc";
import { colors } from "../../../consts/colors";
import { TypeTeam } from "../../ui/home/game-card";

export interface IStatisticTeamsResult {
	firstTeam: TypeTeam;
	secondTeam: TypeTeam;
	score: string;
}

const StatisticTeamsResult = (props: IStatisticTeamsResult) => {
	const { firstTeam, secondTeam, score } = props;
	return (
		<View style={tw`py-2`}>
			<View
				style={tw`flex flex-row items-center  bg-[${colors.dark.bg.secondary}] py-5 rounded-2xl px-2 justify-between`}>
				<Team
					image={require("../../../../assets/ducs-logo.png")}
					title={firstTeam.name}
				/>
				<ScoreMatch score={score} />
				<Team
					title={secondTeam.name}
					image={require("../../../../assets/chicago-blackhawks-logo.png")}
				/>
			</View>
		</View>
	);
};

export default StatisticTeamsResult;

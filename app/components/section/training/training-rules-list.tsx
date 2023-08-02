import React from "react";
import { View } from "react-native";
import RulesCard from "../../ui/training/rules-card";
import tw from "twrnc";
const rulesHockey = [
	{
		id: 1,
		title: "Number of players",
		description:
			"The game is played by two teams, each consisting of six players.",
		color: "#FFE66A",
	},
	{
		id: 2,
		title: "Penalties",
		description:
			"Players may incur time penalties for breaking the rules, which may be used to send off or substitute for a substitute.",
		color: "#78ACD0",
	},
	{
		id: 3,
		title: "Player functions",
		description:
			"Players can perform various functions in the game, such as attacker, defender, goalkeeper, etc.",
		color: "#EC6C6C",
	},
	{
		id: 4,
		title: "Puck",
		description:
			"A puck is a round object that is used to score goals against the opponent's goal.",
		color: "#C6E0FF",
	},
	{
		id: 5,
		title: "Gates",
		description:
			"Gates are two vertical posts located at opposite ends of the court, between which there is a net.",
		color: "#D472BD",
	},
	{
		id: 6,
		title: "Ice rink",
		description: "The ice rink is rectangular and covered with ice.",
		color: "#56519D",
	},
	{
		id: 7,
		title: "Game time",
		description:
			"The game lasts 60 minutes and consists of three periods of 20 minutes each. After each period, the teams change sides of the court.",
		color: "#B5F226",
	},
	{
		id: 8,
		title: "Offside",
		description:
			"A player cannot be in an area that is behind a line drawn 5 meters from the touchline.",
		color: "#EC6C6C",
	},
];

const TrainingRulesList = () => {
	return (
		<View style={tw`gap-y-3 pb-3 pt-5`}>
			{rulesHockey.map((item) => (
				<RulesCard
					title={item.title}
					description={item.description}
					color={item.color}
					key={item.id}
				/>
			))}
		</View>
	);
};

export default TrainingRulesList;

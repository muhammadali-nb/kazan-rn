import React from "react";
import { View } from "react-native";
import GameCard, { IGameCard } from "../../ui/home/game-card";
import tw from "twrnc";

interface IHomeGamesList {
	gamesList: object[] | undefined;
}

const HomeGamesList = (props: IHomeGamesList) => {
	const { gamesList } = props;

	return (
		<View style={tw`pt-10 pb-5 gap-y-8`}>
			{gamesList &&
				gamesList.map((_item: IGameCard) => (
					<GameCard
						date={_item.date}
						tournament={_item.tournament}
						firstTeam={_item.firstTeam}
						secondTeam={_item.secondTeam}
						score={_item.score}
						id={_item.id}
						key={_item.id}
					/>
				))}
		</View>
	);
};

export default HomeGamesList;

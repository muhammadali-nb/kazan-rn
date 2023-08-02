import React, { useEffect } from "react";

import { StackScreenProps } from "../navigation";

import StatisticTeamsResult from "../components/section/statics/statistics-teams-result";
import StatisticLayout from "../components/layout/statistic-layout";
import StatisticGoals from "../components/section/statics/statistic-goals";
import StatisticPlayers from "../components/section/statics/statistic-players";
import { useQuery } from "react-query";
import { getStatistic } from "../functions/get-statistic";

const Statistic = ({ route }: StackScreenProps) => {
	const { data, isLoading } = useQuery({
		queryKey: "get-statistic",
		//@ts-ignore
		queryFn: () => getStatistic(route.params.id),
	});

	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<StatisticLayout>
			{!isLoading && (
				<>
					<StatisticTeamsResult
						score={data?.score}
						firstTeam={data?.firstTeam}
						secondTeam={data?.secondTeam}
					/>
					<StatisticGoals
						firstTeam={data?.firstTeam.goals}
						secondTeam={data?.secondTeam.goals}
					/>
					<StatisticPlayers
						firstTeam={data?.firstTeam.players_list}
						secondTeam={data?.secondTeam.players_list}
					/>
				</>
			)}
		</StatisticLayout>
	);
};

export default Statistic;

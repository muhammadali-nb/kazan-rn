import React, { useEffect } from "react";

import HomeLayout from "../components/layout/home-layout";

import HomeHeader from "../components/section/home/home-header";
import HomeGamesList from "../components/section/home/home-games-list";
import { useQuery } from "react-query";
import { getHome } from "../functions/get-home";

const Home = () => {
	const { data, isLoading } = useQuery({
		queryKey: "test",
		queryFn: getHome,
	});

	return (
		<HomeLayout>
			<HomeHeader />
			<HomeGamesList gamesList={data} />
		</HomeLayout>
	);
};

export default Home;

import React from "react";
import Layout, { ILayout } from "./layout";
import Container from "../ui/container";
import { ScrollView } from "react-native";

const StatisticLayout = ({ children }: ILayout) => {
	return (
		<Layout>
			<ScrollView>
				<Container>{children}</Container>
			</ScrollView>
		</Layout>
	);
};

export default StatisticLayout;

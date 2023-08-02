import React from "react";
import Layout, { ILayout } from "./layout";
import { ScrollView } from "react-native";
import Container from "../ui/container";

const TrainingLayout = (props: ILayout) => {
	const { children } = props;
	return (
		<Layout>
			<ScrollView>
				<Container>{children}</Container>
			</ScrollView>
		</Layout>
	);
};

export default TrainingLayout;

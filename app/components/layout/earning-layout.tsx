import React from "react";
import { View } from "react-native";
import Layout, { ILayout } from "./layout";
import Container from "../ui/container";

const EarningLayout = ({ children }: ILayout) => {
	return (
		<Layout>
			<Container>{children}</Container>
		</Layout>
	);
};

export default EarningLayout;

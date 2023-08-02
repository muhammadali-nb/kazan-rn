import React, { ReactNode } from "react";

import Layout, { ILayout } from "./layout";
import { ScrollView, View } from "react-native";
import Container from "../ui/container";

const HomeLayout = ({ children }: ILayout) => {
	return (
		<Layout>
			<ScrollView>
				<Container>{children}</Container>
			</ScrollView>
		</Layout>
	);
};

export default HomeLayout;

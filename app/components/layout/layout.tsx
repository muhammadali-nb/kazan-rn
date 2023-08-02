import React, { ReactNode } from "react";
import { View } from "react-native";

import tw from "twrnc";
import { colors } from "../../consts/colors";

export interface ILayout {
	children: ReactNode;
	style?: object;
}

const Layout = ({ children, style }: ILayout) => {
	return (
		<View
			style={{
				...tw`h-full w-full pt-10 bg-[${colors.dark.bg.main}] `,
				...style,
			}}>
			{children}
		</View>
	);
};

export default Layout;

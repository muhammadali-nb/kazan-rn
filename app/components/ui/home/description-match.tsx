import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";
interface IDescription {
	style?: object;
	title: string;
}

const DescriptionMatch = (props: IDescription) => {
	const { style, title } = props;
	return (
		<View
			style={{
				...tw`max-w-52 min-w-38 rounded-full py-2 px-3 bg-[${colors.dark.bg.drawer}]`,
				...style,
			}}>
			<Text
				style={{
					...tw`font-bold text-center text-lg text-[${colors.dark.text.white}]`,
				}}>
				{title}
			</Text>
		</View>
	);
};

export default DescriptionMatch;

import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";
interface IDateMatchProps {
	style?: object;
	date: string;
}
const DateMatch = (props: IDateMatchProps) => {
	const { style, date } = props;
	return (
		<View style={{ ...tw`flex items-center`, ...style }}>
			<Text style={tw` font-semibold text-lg text-[${colors.dark.text.white}]`}>
				{date}
			</Text>
		</View>
	);
};

export default DateMatch;

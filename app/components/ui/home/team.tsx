import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import tw from "twrnc";
import { colors } from "../../../consts/colors";

interface ITeam {
	image: ImageSourcePropType;
	title: string;
}

const Team = (props: ITeam) => {
	const { title, image } = props;
	return (
		<View style={tw`max-w-30 w-full flex items-center justify-center `}>
			<Image style={tw`w-20 h-18`} source={image} />
			<Text
				style={tw`font-semibold text-lg text-center text-[${colors.dark.text.white}] leading-5	mt-1`}>
				{title}
			</Text>
		</View>
	);
};

export default Team;

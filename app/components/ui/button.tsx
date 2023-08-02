import React, { ReactElement } from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { colors } from "../../consts/colors";

interface IButton {
	title: string;
	style?: object;
	rightIcon?: ReactElement;
	leftIcon?: ReactElement;

	onPress?: () => void;
}

const Button = (props: IButton) => {
	const { title, style, leftIcon, rightIcon, onPress } = props;

	return (
		<TouchableOpacity
			style={{
				...tw`min-w-24 max-w-32 bg-[${colors.dark.bg.main}] px-4 py-2 rounded-lg flex flex-row justify-center items-center`,
				...style,
			}}
			onPress={onPress}>
			{leftIcon}
			<Text
				style={tw`text-[${colors.dark.text.white}] font-semibold  ${
					rightIcon ? "mr-2" : leftIcon ? "ml-2" : "ml-0"
				} `}>
				{title}
			</Text>
			{rightIcon}
		</TouchableOpacity>
	);
};

export default Button;

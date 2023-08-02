import React from "react";
import { Text, View } from "react-native";
import UserAvatar from "../user-avatar";
import tw from "twrnc";

export interface IPlayerCard {
	side?: "right" | "left";
	id?: string;
	name: string;
	image: string;
	style?: object;
}

const PlayerCard = (props: IPlayerCard) => {
	const { side, name, image, style } = props;

	return (
		<View
			style={{
				...tw`flex  ${
					side === "right" ? "flex-row-reverse" : "flex-row"
				}  items-center`,
				...style,
			}}>
			<UserAvatar image={{ uri: image }} />
			<Text
				style={tw`text-white font-semibold ${
					side === "left" ? "ml-2" : "mr-2"
				} `}>
				{name}
			</Text>
		</View>
	);
};

export default PlayerCard;

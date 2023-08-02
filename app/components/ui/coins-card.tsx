import React from "react";
import { Text, View } from "react-native";
import UserAvatar from "./user-avatar";
import tw from "twrnc";
import { colors } from "../../consts/colors";
import Coin from "../../icons/coin";
const CoinsCard = () => {
	return (
		<View
			style={tw`w-38 flex flex-row items-center bg-[${colors.dark.bg.drawer}] rounded-full py-1.5 px-2`}>
			<UserAvatar image={require("../../../assets/user.jpg")} />
			<View style={tw`flex flex-row items-center ml-3`}>
				<Coin width={24} height={24} />
				<Text
					style={tw`text-base font-semibold ml-1.5 text-[${colors.dark.text.white}]`}>
					61
				</Text>
			</View>
		</View>
	);
};

export default CoinsCard;

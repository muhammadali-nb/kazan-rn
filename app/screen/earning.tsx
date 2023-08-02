import React from "react";
import { Text, View } from "react-native";
import EarningLayout from "../components/layout/earning-layout";
import EarningShake from "../components/section/earning/earning-shake";
import tw from "twrnc";
const Earning = () => {
	return (
		<EarningLayout>
			<View style={tw`w-full h-full flex justify-center`}>
				<EarningShake />
			</View>
		</EarningLayout>
	);
};

export default Earning;

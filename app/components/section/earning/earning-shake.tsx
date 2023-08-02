import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Shake from "expo-shake";
import tw from "twrnc";
import Coin from "../../../icons/coin";

interface IEarningShake {
	style?: object;
}

const EarningShake = ({ style }: IEarningShake) => {
	const [count, setCount] = useState(0);

	const shakeCounter = useCallback(() => {
		Shake.addListener(() => {
			// alert("Undo Typing");
			setCount(count + 1);
		});
	}, [count]);

	useEffect(() => {
		shakeCounter();
	}, [count]);

	return (
		<View style={style}>
			<View style={tw`flex items-center`}>
				<View style={tw`flex flex-row items-center  mb-3`}>
					<Coin width={50} height={50} />
					<Text style={tw`text-yellow-400 text-5xl ml-2  font-bold`}>
						{count}
					</Text>
				</View>
				<Text style={tw`text-white text-xl font-bold`}>
					Shake and get money!
				</Text>
			</View>
		</View>
	);
};

export default EarningShake;

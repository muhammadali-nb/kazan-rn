import React from "react";
import { TouchableOpacity, View } from "react-native";
import Button from "../button";
import tw from "twrnc";
import Play from "../../../icons/play";
import Statistics from "../../../icons/statistics";
import Save from "../../../icons/save";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../../navigation";

interface IMatchProps {
	style?: object;
	goToStatisticScreen?: () => void;
	goToWatchMatch?: () => void;
	saveGame?: () => void;
}

const MatchOptions = (props: IMatchProps) => {
	const { style, goToStatisticScreen } = props;

	return (
		<View style={{ ...tw` flex flex-row items-center px-2 `, ...style }}>
			<Button
				style={tw`  h-11 max-w-[36%] w-full  bg-[#BE1657] mr-[2%]  `}
				title="Watch"
				rightIcon={<Play width={24} height={24} />}
			/>
			<Button
				onPress={() => goToStatisticScreen()}
				leftIcon={<Statistics width={20} height={20} />}
				style={tw`bg-[#16DCD6] h-11 w-full max-w-[42%] mr-[2%] `}
				title="Statistics"
			/>
			<TouchableOpacity
				style={tw`px-2 bg-[#F8C544] rounded-lg h-11  w-[18%] flex justify-center items-center `}>
				<Save width={22} height={40} />
			</TouchableOpacity>
		</View>
	);
};

export default MatchOptions;

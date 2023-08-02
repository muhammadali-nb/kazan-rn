import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import tw from "twrnc";

const UserAvatar = ({image}: {image: ImageSourcePropType}) => {
	return (
		<View style={tw`w-10 h-10  rounded-full overflow-hidden`}>
			<Image
				style={tw`w-full h-full`}
				resizeMode="cover"
				source={image}
			/>
		</View>
	);
};

export default UserAvatar;

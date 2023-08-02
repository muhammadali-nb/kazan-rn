import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ISvgProps } from "../types/svg";

function Settings(props: ISvgProps) {
	return (
		<Svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 00-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 01-.796 1.353 1.64 1.64 0 01-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 00-1.49.396c-.318.242-.553.646-1.022 1.453-.47.807-.704 1.21-.757 1.605-.07.526.074 1.058.4 1.479.148.192.357.353.68.555.477.297.783.803.783 1.361 0 .558-.306 1.064-.782 1.36-.324.203-.533.364-.682.556-.325.421-.469.953-.399 1.479.053.394.287.798.757 1.605.47.807.704 1.21 1.022 1.453.424.323.96.465 1.49.396.242-.032.487-.13.825-.308a1.64 1.64 0 011.58.008c.486.28.774.795.795 1.353.015.38.051.64.145.863.204.49.596.88 1.09 1.083.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 001.09-1.083c.094-.223.13-.483.145-.863.02-.558.309-1.074.796-1.353a1.64 1.64 0 011.579-.008c.338.178.583.276.825.308.53.07 1.066-.073 1.49-.396.318-.242.553-.646 1.022-1.453.47-.807.704-1.21.757-1.605a1.99 1.99 0 00-.4-1.479c-.148-.192-.357-.353-.68-.555-.477-.297-.783-.803-.783-1.361 0-.558.306-1.064.782-1.36.324-.203.533-.364.682-.556a1.99 1.99 0 00.399-1.479c-.053-.394-.287-.798-.757-1.605-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 00-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 01-1.58-.008 1.615 1.615 0 01-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 00-1.09-1.083zM12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9c-1.67 0-3.023 1.343-3.023 3s1.354 3 3.023 3z"
				fill="#ffff"
			/>
		</Svg>
	);
}

export default Settings;

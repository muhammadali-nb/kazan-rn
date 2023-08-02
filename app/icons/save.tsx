import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ISvgProps } from "../types/svg";

function Save(props: ISvgProps) {
	return (
		<Svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<Path
				d="M12.89 5.879H5.11A3.12 3.12 0 002 8.989v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.28.7 2.32.09 2.32-1.36V8.989c0-1.71-1.4-3.11-3.11-3.11z"
				fill="#ffffff"
			/>
			<Path
				d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-1.93-1.08a.509.509 0 01-.26-.44V8.99c0-2.54-2.07-4.61-4.61-4.61H8.82c-.37 0-.63-.39-.46-.71C8.88 2.68 9.92 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11z"
				fill="#ffffff"
			/>
		</Svg>
	);
}

export default Save;

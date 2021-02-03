import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
		</div>
	);
}

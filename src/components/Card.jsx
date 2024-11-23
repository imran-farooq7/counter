import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

const Card = () => {
	const [count, setCount] = useState(0);
	const isReachLimit = count === 5 ? true : false;

	return (
		<div className="card">
			<Title isReachLimit={isReachLimit} />
			<Count count={count} />
			<ResetButton setCount={setCount} />
			<CountButtons setCount={setCount} />
		</div>
	);
};

export default Card;

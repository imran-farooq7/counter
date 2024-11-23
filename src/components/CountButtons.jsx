import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
const CountButtons = ({ setCount }) => {
	return (
		<div className="button-container">
			<button
				className="count-btn"
				onClick={() => setCount((count) => count - 1)}
			>
				<FaMinus className="count-btn-icon" />
			</button>
			<button
				className="count-btn"
				onClick={() => setCount((count) => count + 1)}
			>
				<IoMdAdd className="count-btn-icon" />
			</button>
		</div>
	);
};

export default CountButtons;

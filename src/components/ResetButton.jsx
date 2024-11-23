import { RxReset } from "react-icons/rx";
const ResetButton = ({ setCount }) => {
	return (
		<button className="reset-btn" onClick={() => setCount(0)}>
			<RxReset className="reset-btn-icon" />
		</button>
	);
};

export default ResetButton;

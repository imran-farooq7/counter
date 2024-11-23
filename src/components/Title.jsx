const Title = ({ isReachLimit }) => {
	return (
		<h1 className="title">
			{isReachLimit ? "You have used all the counts" : "Counter"}
		</h1>
	);
};

export default Title;

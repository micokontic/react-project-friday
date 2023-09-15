import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<AvailableJobs></AvailableJobs>
		</>
	);
}

export default App;

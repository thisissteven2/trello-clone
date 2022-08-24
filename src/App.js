import Input from "./components/Input";
import Boards from "./components/Boards";
import { TaskProvider } from "./hooks/useTasks";

function App() {
	return (
		<div className="overflow-y-scroll h-screen">
			<div className="layout pt-8">
				<div className="max-w-[26rem] mx-auto">
					<TaskProvider>
						<Input />
						<Boards />
					</TaskProvider>
				</div>
			</div>
		</div>
	);
}

export default App;

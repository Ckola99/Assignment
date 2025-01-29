import Navbar from "./components/Navbar";
import Results from "./components/Results";

export default function Home() {
  return (
		<div className="p-2 max-w-[100vw] flex flex-col justify-between">
      <Navbar />
      <Results />
    </div>
  );
}

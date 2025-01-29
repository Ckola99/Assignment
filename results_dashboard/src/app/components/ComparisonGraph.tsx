import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	ReferenceLine,
} from "recharts";

// Data for the comparison graph (you can still customize this as needed)
const data = [
	{ name: "0", percentile: 5 },
	{ name: "10", percentile: 15 },
	{ name: "20", percentile: 30 },
	{ name: "30", percentile: 45 },
	{ name: "40", percentile: 60 },
	{ name: "50", percentile: 72 },
	{ name: "60", percentile: 85 },
	{ name: "70", percentile: 90 },
	{ name: "80", percentile: 92 },
	{ name: "90", percentile: 96 },
	{ name: "100", percentile: 100 },
];

interface ComparisonGraphProps {
	percentile: number;
}

const ComparisonGraph: React.FC<ComparisonGraphProps> = ({ percentile }) => {
	const averagePercentile = 72; // Define the average percentile

	// Determine the appropriate message based on comparison
	let comparisonMessage = "";
	if (percentile > averagePercentile) {
		comparisonMessage = `higher than the average percentile of`;
	} else if (percentile < averagePercentile) {
		comparisonMessage = `lower than the average percentile of`;
	} else {
		comparisonMessage = `equal to the average percentile of`;
	}

	return (
		<div className="bg-white rounded-md shadow p-6">
			<h1 className="font-bold text-lg">Comparison Graph</h1>
			<p className="text-sm text-gray-600 mb-4">
				You scored{" "}
				<span className="font-bold text-blue-600">
					{percentile}%
				</span>
				, which is{" "}
				<span className="font-bold">
					{comparisonMessage}
				</span>{" "}
				<span className="font-bold text-green-600">
					{averagePercentile}%
				</span>
				.
			</p>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={data}
					height={400}
					margin={{
						top: 20,
						left: 10,
						bottom: 30,
						right: 40,
					}}
				>
					<XAxis
						dataKey="name"
						label={{
							value: "Percentile",
							position: "insideBottom",
							offset: -10,
						}}
					/>
					<YAxis
						label={{
							value: "Frequency",
							angle: -90,
							position: "insideLeft",
						}}
						domain={[0, 100]}
					/>
					<Tooltip
						formatter={(value) =>
							`${value}%`
						}
					/>
					{/* Reference line showing the user's percentile */}
					<ReferenceLine
						x={String(percentile)}
						stroke="blue"
						strokeDasharray="3 3"
						label={{
							value: "Your Percentile",
							position: "top",
							offset: -30,
						}}
					/>
					{/* Reference line showing the average percentile */}
					<ReferenceLine
						x="50" // Assuming 50% is the average
						stroke="green"
						strokeDasharray="3 3"
						label="Average Percentile"
					/>
					<Line
						type="monotone"
						dataKey="percentile"
						stroke="#8884d8"
						strokeWidth={2}
						dot={{ r: 0 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ComparisonGraph;

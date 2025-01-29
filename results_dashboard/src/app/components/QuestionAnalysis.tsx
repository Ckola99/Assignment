"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis: React.FC = () => {
	const score: number = 40;

	const message: string =
		score >= 70
			? "Great job! You're doing really well!"
			: score >= 40
			? "Good effort, but there's room for improvement!"
			: "Keep trying! You can do it!";

	const data = {
		labels: ["Your Score"],
		datasets: [
			{
				data: [score, 100 - score],
				backgroundColor: ["#2196F3", "#E0E0E0"],
				borderWidth: 1,
			},
		],
	};

	const options: any = {
		responsive: true,
		plugins: {
			tooltip: {
				callbacks: {
					label: (tooltipItem: { raw: number }) =>
						`${tooltipItem.raw}%`,
				},
			},
		},
	};

	return (
		<div className="bg-white shadow rounded-md text-center md:w-full w-full md:h-fit flex flex-col">
			<h1 className="font-bold mt-4">Question Analysis</h1>
			<p className="text-xs">{message}</p>
			<Doughnut
				data={data}
				options={options}
				width={3}
				height={3}
				className="p-5 max-w-[300px] max-h-[300px] self-center"
			/>
		</div>
	);
};

export default QuestionAnalysis;

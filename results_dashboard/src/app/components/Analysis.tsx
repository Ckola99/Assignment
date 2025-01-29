'use client'
import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	TooltipItem,
} from "chart.js";

// Register necessary chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SyllabusAnalysis: React.FC<{
	syllabusScores: { subject: string; score: number }[];
}> = ({ syllabusScores }) => {
	const data = {
		labels: syllabusScores.map((item) => item.subject),
		datasets: [
			{
				label: "Progress",
				data: syllabusScores.map((item) => item.score),
				backgroundColor: "#2196F3",
				borderRadius: 5,
				barThickness: 20,
			},
		],
	};

	const options = {
		responsive: true,
		indexAxis: "y" as const,
		plugins: {
			tooltip: {
				callbacks: {
					label: (
						tooltipItem: TooltipItem<"bar">
					) => `${tooltipItem.raw}%`,
				},
			},
		},
		scales: {
			x: {
				max: 100,
			},
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="border shadow rounded-md bg-white p-4 h-fit md:w-[50%]">
			<h1 className="font-bold mb-2">
				Syllabus Wise Analysis
			</h1>
			<div className="w-full h-64">
				<Bar data={data} options={options} />
			</div>
		</div>
	);
};

export default SyllabusAnalysis;

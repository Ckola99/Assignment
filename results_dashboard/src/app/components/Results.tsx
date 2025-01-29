'use client'
import React, { useState } from "react";
import { Percent, Trophy, BookCheck } from "lucide-react";
import ComparisonGraph from "./ComparisonGraph";
import SyllabusAnalysis from "./Analysis";
import QuestionAnalysis from "./QuestionAnalysis";
import Modal from "./Modal";


const Results: React.FC = () => {
	// State initialization with explicit types
	const [openModal, setOpenModal] = useState<boolean>(false);

	const [rank, setRank] = useState<number>(1);
	const [percentile, setPercentile] = useState<number>(90);
	const [correctAnswers, setCorrectAnswers] = useState<number>(12);
	const [totalQuestions] = useState<number>(15);

	const closeModal = () => setOpenModal(false);

	const scorePercentage: number =
		totalQuestions > 0
			? (correctAnswers / totalQuestions) * 100
			: 0;


	interface SyllabusScore {
		subject: string;
		score: number;
	}

	const syllabusScores: SyllabusScore[] = [
		{ subject: "Math", score: 80 },
		{ subject: "Science", score: 70 },
		{ subject: "English", score: 70 },
		{ subject: "Economics", score: 70 },
	];

	const handleSave = (): void => {
		closeModal();
	};

	const formattedResult = `${correctAnswers}/${totalQuestions}`;

	return (
		<div className="py-3 flex flex-col gap-2 h-full">
			<div className="border shadow rounded-md flex justify-between p-2 bg-white">
				<div>
					<h1 className="font-bold">
						Skills Test Summary
					</h1>
					<div className="flex gap-2 text-sm">
						<p>Questions: 15</p>
						<p>Duration: 20 mins</p>
						<p className="font-bold">
							Submitted
						</p>
					</div>
				</div>
				<button
					onClick={() => setOpenModal(true)}
					className="border p-2 rounded-md font-bold bg-blue-800 text-white text-sm"
				>
					Update
				</button>
			</div>
			<div className="border shadow p-2 rounded-md bg-white flex flex-col gap-3">
				<h1 className="font-bold text-center">
					Quick Statistics
				</h1>
				<div className="flex gap-5 justify-center md:justify-between md:w-[80%] md:m-auto">
					<div className="flex items-center gap-1">
						<Trophy />
						<div>
							<p className="font-bold">
								{rank}
							</p>
							<p className="uppercase flex flex-col text-sm">
								Rank
							</p>
						</div>
					</div>

					<div className="flex items-center gap-1">
						<Percent />
						<div>
							<p className="font-bold">
								{percentile}%
							</p>
							<p className="uppercase flex flex-col text-sm">
								Percentile
							</p>
						</div>
					</div>

					<div className="flex items-center gap-1">
						<BookCheck />
						<div>
							<p className="font-bold">
								{
									formattedResult
								}
							</p>
							<p className="uppercase flex flex-col text-sm">
								Result
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white rounded-md shadow">
				<ComparisonGraph percentile={percentile} />
			</div>
			<div className="flex flex-col w-full gap-2 md:flex-row h-fit">
				<SyllabusAnalysis
					syllabusScores={syllabusScores}
				/>
				<QuestionAnalysis score={scorePercentage} />
			</div>

			{openModal && (
				<Modal
					rank={rank}
					percentile={percentile}
					correctAnswers={correctAnswers}
					setRank={setRank}
					setPercentile={setPercentile}
					setCorrectAnswers={setCorrectAnswers}
					handleSave={handleSave}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
};

export default Results;

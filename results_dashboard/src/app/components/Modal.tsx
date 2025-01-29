import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Type definitions for Modal props
interface ModalProps {
	rank: number;
	percentile: number;
	correctAnswers: number;
	setRank: React.Dispatch<React.SetStateAction<number>>;
	setPercentile: React.Dispatch<React.SetStateAction<number>>;
	setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
	handleSave: () => void;
	closeModal: () => void;
}

// Define the type for the form data
interface FormData {
	rank: number;
	percentile: number;
	correctAnswers: number;
}

// Yup validation schema
const schema = yup.object().shape({
	rank: yup
		.number()
		.required("Rank is required")
		.min(1, "Rank must be at least 1")
		.max(100, "Rank must be less than or equal to 100"),
	percentile: yup
		.number()
		.required("Percentile is required")
		.min(0, "Percentile must be between 0 and 100")
		.max(100, "Percentile must be between 0 and 100"),
	correctAnswers: yup
		.number()
		.required("Correct answers are required")
		.min(0, "Correct answers cannot be less than 0")
		.max(15, "Correct answers cannot be greater than 15"),
});

const Modal: React.FC<ModalProps> = ({
	rank,
	percentile,
	correctAnswers,
	setRank,
	setPercentile,
	setCorrectAnswers,
	handleSave,
	closeModal,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			rank,
			percentile,
			correctAnswers,
		},
	});

	// Handle form submission
	const onSubmit: SubmitHandler<FormData> = (data) => {
		setRank(data.rank);
		setPercentile(data.percentile);
		setCorrectAnswers(data.correctAnswers);
		handleSave();
		closeModal();
	};

	return (
		<div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-4 rounded-md shadow-lg w-1/3 min-w-[300px]">
				<h2 className="font-bold text-xl mb-4">
					Update Test Results
				</h2>

				{/* Form for updating results */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-4"
				>
					<div>
						<label className="block mb-2 text-sm font-medium">
							Rank
						</label>
						<input
							type="number"
							{...register("rank")}
							className={`border p-2 rounded-md w-full ${
								errors.rank
									? "border-red-500"
									: ""
							}`}
						/>
						{errors.rank && (
							<p className="text-red-500 text-sm">
								{
									errors
										.rank
										.message
								}
							</p>
						)}
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">
							Percentile
						</label>
						<input
							type="number"
							{...register(
								"percentile"
							)}
							className={`border p-2 rounded-md w-full ${
								errors.percentile
									? "border-red-500"
									: ""
							}`}
						/>
						{errors.percentile && (
							<p className="text-red-500 text-sm">
								{
									errors
										.percentile
										.message
								}
							</p>
						)}
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">
							Correct Answers
						</label>
						<input
							type="number"
							{...register(
								"correctAnswers"
							)}
							className={`border p-2 rounded-md w-full ${
								errors.correctAnswers
									? "border-red-500"
									: ""
							}`}
						/>
						{errors.correctAnswers && (
							<p className="text-red-500 text-sm">
								{
									errors
										.correctAnswers
										.message
								}
							</p>
						)}
					</div>

					{/* Modal actions */}
					<div className="mt-4 flex justify-between">
						<button
							type="submit"
							className="border p-2 rounded-md bg-blue-800 text-white"
						>
							Save
						</button>
						<button
							type="button"
							onClick={closeModal}
							className="border p-2 rounded-md bg-red-500 text-white"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;

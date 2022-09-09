import type {
	EnhanceApiFunction,
	EnhanceApiRequest,
	EnhanceApiResponse,
} from "../types";

type Todo = {
	title: string;
	completed?: boolean;
};

export const get: EnhanceApiFunction = async function (
	request: EnhanceApiRequest,
): Promise<EnhanceApiResponse> {
	console.log(`Handling ${request.path}...`);

	const todos: Todo[] = [
		{ title: "todo 1", completed: false },
		{ title: "todo 2", completed: true },
		{ title: "todo 3" },
		{ title: "todo 4", completed: false },
		{ title: "todo 5", completed: false },
		{ title: "todo 6", completed: false },
	];

	const response: EnhanceApiResponse = {
		json: { todos },
	};

	return response;
};

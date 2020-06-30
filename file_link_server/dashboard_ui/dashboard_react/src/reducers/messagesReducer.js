import { CREATE_MESSAGE } from "../actions/types";

const initialState = {
	message: {},
	status: null,
};

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_MESSAGE:
			return (state = action.payload);
		default:
			return state;
	}
};

export default messageReducer;

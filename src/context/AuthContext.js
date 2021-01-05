import React, { createContext, useReducer, useCallback } from 'react';
import authReducer from './authReducer';

const initialState = { user: null };

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const updateUser = useCallback((payload) => {
		console.log('updating user');
		dispatch({ type: 'UPDATE_USER', payload });
	}, []);

	return (
		<AuthContext.Provider value={{ user: state.user, updateUser }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthContextProvider;

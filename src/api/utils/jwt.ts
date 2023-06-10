import { LogUser } from "../models";

const jwt = require('jsonwebtoken');

export const sign = async (user : LogUser) => {
	const token = await jwt.sign(
		{ id: user.id, email: user.email },
		process.env.TOKEN_SECRET,
	);
	return token;
};

export const verifyTokenFromUser = async (token : string) => {
	const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
	return decoded;
};

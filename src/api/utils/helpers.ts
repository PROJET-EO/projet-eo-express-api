import { NextFunction } from "express";

const ErrorResponse = require('./errorResponse');
const fieldValidation = (field : unknown, next : NextFunction) => {
	if (!field) {
		return next(new ErrorResponse(`Missing fields`, 400));
	}
};

module.exports = { fieldValidation };

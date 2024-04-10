import { Schema } from "mongoose";


export const RatSchema = new Schema({
	name: { type: String, minLength: 1, maxLength: 100, required: true },
	callsign: { type: String, minLength: 1, maxLength: 100, required: true },
	picture: { type: String, required: true, maxLength: 500 },
	specialties: [{ type: String, required: true, maxLength: 50 }]
}, { toJSON: { virtuals: true } })
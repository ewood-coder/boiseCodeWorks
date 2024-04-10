import { Schema } from "mongoose";


export const MissionSchema = new Schema({
	codename: { type: String, required: true, minLength: 1, maxLength: 50 },
	objective: { type: String, required: true, maxLength: 150 },
	year: { type: String, required: true, maxLength: 10 },
	locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
	ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
	isCompleted: { type: Boolean, required: true, default: false },
}, { toJSON: { virtuals: true } })

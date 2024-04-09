import { Schema } from "mongoose";



export const CarSchema = new Schema({
	make: { type: String, required: true, minLength: 3, maxLength: 50 },
	model: { type: String, required: true, minLength: 1, maxLength: 50 },
	year: { type: Number, required: true, min: 1886, max: 2025 },
	price: { type: Number, required: true, min: 0, max: 1000000 },
	imgUrl: { type: String, required: true, maxLength: 500 },
	description: { type: String, required: true, maxLength: 500 },
	engineType: { type: String, enum: ['V6', 'V8', 'V10', '4-cylinder', 'twin-cylinder', 'unknown'], required: true, default: 'unknown' },
	color: { type: String, required: true, maxLength: 50 },
	tags: [{ type: String }],
	mileage: { type: Number, required: true, min: 0, max: 1000000 },
	hasCleanTitle: { type: Boolean, required: true, default: true },
	creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' } // objectId is MongoDB's type, for all _ids. The ref, points to the original location of where this id came from.
}, { timestamps: true })

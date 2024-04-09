import { Schema } from "mongoose";



export const HouseSchema = new Schema({
	bedrooms: { type: Number, required: true, max: 30 },
	bathrooms: { type: Number, required: true, max: 25 },
	levels: { type: Number, required: true, min: 1, max: 4 },
	price: { type: Number, required: true, max: 10000000 },
	imgUrl: { type: String, required: true, maxLength: 500 },
	description: { type: String, required: false, maxLength: 500 },
	year: { type: Number, required: true, min: 1000, max: 2024 },
	creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' } // objectId is MongoDB's type, for all _ids. The ref, points to the original location of where this id came from.
},
	{
		timestamps: true,
		toJSON: {
			virtuals: true
		}
	})

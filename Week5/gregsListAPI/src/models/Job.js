import { Schema } from "mongoose";



export const JobSchema = new Schema({
	company: { type: String, required: true, maxLength: 100 },
	jobTitle: { type: String, required: true, maxLength: 100 },
	hours: { type: Number, required: true, min: 1, max: 168 },
	rate: { type: Number, required: true, max: 100000000 },
	imgUrl: { type: String, required: true, maxLength: 500 },
	description: { type: String, required: false, maxLength: 500 },
	creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' } // objectId is MongoDB's type, for all _ids. The ref, points to the original location of where this id came from.
},
	{
		timestamps: true,
		toJSON: {
			virtuals: true
		}
	})

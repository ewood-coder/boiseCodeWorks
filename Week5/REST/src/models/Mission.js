import { Schema } from "mongoose";


export const MissionSchema = new Schema({
	codename: { type: String, required: true, minLength: 1, maxLength: 50 },
	objective: { type: String, required: true, maxLength: 150 },
	year: { type: String, required: true, maxLength: 10 },
	locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
	ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
	completed: { type: Boolean, required: true, default: false },
}, { toJSON: { virtuals: true } })



MissionSchema.virtual('rat', {
	localField: 'ratId',
	ref: 'Rat',
	foreignField: '_id',
	justOne: true
})

MissionSchema.virtual('location', {
	localField: 'locationId',
	ref: 'Location',
	foreignField: '_id',
	justOne: true
})
import { Schema } from "mongoose";


export const TrackedBugSchema = new Schema({
	accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
	bugId: { type: Schema.ObjectId, required: true, ref: 'Bug' },
}, { toJSON: { virtuals: true } })



TrackedBugSchema.virtual('tracker', {
	localField: 'accountId',
	ref: 'Account',
	foreignField: '_id',
	justOne: true
})

TrackedBugSchema.virtual('bug', {
	localField: 'bugId',
	ref: 'Bug',
	foreignField: '_id',
	justOne: true
})
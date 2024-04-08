import { Schema } from "mongoose";



export const BurgerSchema = new Schema({
	// id is implied, since everything in the database requires one to be stored
	name: String,
	ketchup: { type: Boolean, required: true, default: true },
	onions: { type: Boolean, required: true, default: true },
	lettuce: { type: Boolean, required: true, default: true },
	pickles: { type: Boolean, required: true, default: true },
	tomatoes: { type: Boolean, required: true, default: true },
	cheese: { type: Boolean, required: true, default: true },
	bacon: { type: Boolean, required: true, default: true },
	beef: { type: Boolean, required: true, default: true },
})
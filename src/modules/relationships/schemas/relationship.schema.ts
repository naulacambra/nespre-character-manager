import * as mongoose from 'mongoose';

export const RelationshipSchema = new mongoose.Schema({
	name: String,
}).set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id }
});
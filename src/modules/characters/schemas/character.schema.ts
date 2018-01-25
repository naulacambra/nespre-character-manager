import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
	name: String,
	img: String,
	affiliations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Affiliation' }]
}).set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id }
});
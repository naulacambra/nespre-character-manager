import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
	name: String,
	img: String,
	affiliations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Affiliation' }],
	relationships: [{
		character: { type: mongoose.Schema.Types.ObjectId, ref: 'Character' },
		type: { type: mongoose.Schema.Types.ObjectId, ref: 'Relationship' }
	}]
}).set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id }
});
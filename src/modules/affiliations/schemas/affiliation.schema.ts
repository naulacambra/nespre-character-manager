import * as mongoose from 'mongoose';

export const AffiliationSchema = new mongoose.Schema({
	name: String,
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
	relationships: [{
		affiliation: { type: mongoose.Schema.Types.ObjectId, ref: 'Affiliation' },
		type: { type: mongoose.Schema.Types.ObjectId, ref: 'Relationship' }
	}]
}).set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id }
});
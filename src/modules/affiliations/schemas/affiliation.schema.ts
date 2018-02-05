import * as mongoose from 'mongoose';

export const AffiliationSchema = new mongoose.Schema({
	name: String,
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
}).set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) { delete ret._id }
});
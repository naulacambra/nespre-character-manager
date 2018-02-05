import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface Affiliation extends Document {
	readonly name: string;
	readonly members: ObjectId[];
	readonly relationships: any[];
}
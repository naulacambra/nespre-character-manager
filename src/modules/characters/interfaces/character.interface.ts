import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface Character extends Document {
	readonly name: string;
	readonly img: string;
	readonly affiliations: ObjectId[];
}
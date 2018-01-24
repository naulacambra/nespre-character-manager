import { Document } from 'mongoose';

export interface Relationship extends Document {
	readonly name: string;
}
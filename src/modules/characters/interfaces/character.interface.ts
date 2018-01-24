import { Document } from 'mongoose';

export interface Character extends Document {
	readonly name: string;
}
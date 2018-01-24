import { Document } from 'mongoose';

export interface Affiliation extends Document {
	readonly name: string;
}
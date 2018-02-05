import { IsString, IsInt } from 'class-validator';

export class CreateCharacterDto {
	@IsInt()
	public id: number;

	@IsString()
	readonly name: string;

	readonly affiliations: string[];
}
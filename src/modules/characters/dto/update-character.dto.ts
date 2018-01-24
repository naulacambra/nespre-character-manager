import { IsString, IsInt } from 'class-validator';

export class UpdateCharacterDto {
	@IsInt()
	readonly id: number;

	@IsString()
  	readonly name: string;
}
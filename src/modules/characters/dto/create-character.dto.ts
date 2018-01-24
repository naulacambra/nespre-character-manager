import { IsString } from 'class-validator';

export class CreateCharacterDto {
	@IsString()
  	readonly name: string;
}
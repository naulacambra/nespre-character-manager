import { IsString, IsInt } from 'class-validator';

export class UpdateRelationshipDto {
	@IsInt()
	readonly id: number;

	@IsString()
  	readonly name: string;
}
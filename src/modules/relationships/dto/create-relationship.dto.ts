import { IsString, IsInt } from 'class-validator';

export class CreateRelationshipDto {
	@IsInt()
	public id: number;

	@IsString()
  	readonly name: string;
}
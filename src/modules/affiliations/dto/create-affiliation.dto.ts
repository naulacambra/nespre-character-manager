import { IsString, IsInt } from 'class-validator';

export class CreateAffiliationDto {
	@IsInt()
	public id: number;

	@IsString()
  	readonly name: string;
}
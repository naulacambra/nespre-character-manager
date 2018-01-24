import { IsString, IsInt } from 'class-validator';

export class UpdateAffiliationDto {
	@IsInt()
	readonly id: number;

	@IsString()
  	readonly name: string;
}
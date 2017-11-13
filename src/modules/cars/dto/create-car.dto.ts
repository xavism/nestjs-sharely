import { IsString, IsInt } from 'class-validator';

export class CreateCarDto {
	
	@IsInt()
  	readonly id: number;

	@IsString()
  	readonly brand: string;

  	@IsString()
  	readonly model: string;

  	@IsInt()
  	readonly power: number;

  	@IsInt()
  	readonly year: number;
}
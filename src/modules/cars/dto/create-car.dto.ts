import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCarDto {
	
	@IsString()
	@ApiModelProperty()
  	readonly brand: string;

	@IsString()
	@ApiModelProperty()
  	readonly model: string;

	@IsInt()
	@ApiModelProperty()
  	readonly power: number;

	@IsInt()
	@ApiModelProperty()
  	readonly year: number;
}
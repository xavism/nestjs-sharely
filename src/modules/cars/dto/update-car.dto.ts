import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Car } from '../entities/car.entity';

export class UpdateCarDto {

  	@IsInt()
	@ApiModelProperty()  
	readonly id: number;

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

	map(): Car {
		return new Car(this.brand, this.model, this.power, this.year, this.id)
	}
	
}
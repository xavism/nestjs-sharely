import { Component, Inject } from '@nestjs/common';
import { Car } from './entities/car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';

@Component()
export class CarsService {
  private id: number = 1;
	private readonly cars: Car[] = [];
	
	constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {
		console.log('Im the ORM Service');
	}

  create(carDto: CreateCarDto): Promise<number>{
		return new Promise<number> ((resolve, reject) => {
			let car: Car = new Car(
				carDto.brand,
				carDto.model,
				carDto.power,
				carDto.year
		)
		this.carsRepository.save(car)
		.then(car => resolve(car.id))
		.catch(err => reject(err))
		})
  }

  findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  findById(id: number): Promise<Car> {
  	return this.carsRepository.findOneById(id);
  }

  delete(id: number) {
  	this.carsRepository.deleteById(id)
  }

  update(carDto: UpdateCarDto): Promise<Car>{
		return new Promise<Car> ((resolve, reject) => {
		this.carsRepository.findOneById(carDto.id)
		.then(car => {
			try {
				if (car == null) reject('Not existing')
				let carToUpdate: Car = new Car(
					carDto.brand,
					carDto.model,
					carDto.power,
					carDto.year,
					car.id
				);
				this.carsRepository.save(carToUpdate)
				.then(response => resolve(response))
				.catch(err => reject(err))
			}
			catch(e) {
					reject(e)
			}
		})
		.catch(err => reject(err))
		})
  }
}
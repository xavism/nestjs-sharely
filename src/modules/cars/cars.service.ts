import { Component } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

@Component()
export class CarsService {
  private id: number = 1;
  private readonly cars: Car[] = [];

  create(car: Car) {
  	car.id = this.id;
  	this.cars.push(car);
    ++this.id;
  }

  findAll(): Car[] {
    return this.cars;
  }

  findById(id: number): Car {
  	for (var i = this.cars.length - 1; i >= 0; i--) {
  		if (this.cars[i].id == id) return this.cars[i];
  	}
  	return null;
  }

  delete(id: number) {
  	for (var i = this.cars.length - 1; i >= 0; i--) {
  		if (this.cars[i].id == id) this.cars.splice(i, 1);
  	}
  }

  update(car: Car): Car{
  	for (var i = this.cars.length - 1; i >= 0; i--) {
  		if (this.cars[i].id == car.id) {
  			this.cars[i] = car;
  			return this.cars[i];
  		}
  	}
  	return null;
  }
}
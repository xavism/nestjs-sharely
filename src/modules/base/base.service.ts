import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';

@Component()
export class BaseService<T extends BaseEntity> implements IBaseService<T>{
	constructor(
    private readonly genericRepository: Repository<T>) {
		console.log('Im the ORM Service');
	}

  create(entity: T): Promise<number>{
		return new Promise<number> ((resolve, reject) => {
		
		this.genericRepository.save(entity)
		.then(created=> resolve(created.id))
		.catch(err => reject(err))
		})
  }

  getAll(): Promise<T[]> {
    return <Promise<T[]>>this.genericRepository.find();
  }

  get(id: number): Promise<T> {
  	return <Promise<T>>this.genericRepository.findOneById(id);
  }

  delete(id: number) {
  	this.genericRepository.deleteById(id)
  }

  update(entity: T): Promise<T>{
		return new Promise<T> ((resolve, reject) => {
		this.genericRepository.findOneById(entity.id)
		.then(responseGet => {
			try {
				if (responseGet == null) reject('Not existing')
				this.genericRepository.save(responseGet)
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
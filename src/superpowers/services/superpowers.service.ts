import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Superpower } from '../entities/superpowers.entity';

@Injectable()
export class SuperpowersService {
  constructor(
    @InjectRepository(Superpower)
    private readonly superpowerRepository: Repository<Superpower>,
  ) {}

  async create(superpowerData: Partial<Superpower>): Promise<Superpower> {
    const superpower = this.superpowerRepository.create(superpowerData);
    return this.superpowerRepository.save(superpower);
  }

  async findAll(): Promise<Superpower[]> {
    return this.superpowerRepository.find();
  }

  async findOne(id: number): Promise<Superpower> {
    return this.superpowerRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    superpowerData: Partial<Superpower>,
  ): Promise<Superpower> {
    await this.superpowerRepository.update(id, superpowerData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.superpowerRepository.delete(id);
  }
}

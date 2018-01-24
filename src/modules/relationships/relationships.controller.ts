import { Controller, Get, Post, Delete, Put, Body, Param, HttpStatus } from '@nestjs/common';
import { CreateRelationshipDto } from './dto/create-relationship.dto';
import { UpdateRelationshipDto } from './dto/update-relationship.dto';
import { RelationshipsService } from './relationships.service';
import { Relationship } from './interfaces/relationship.interface';

@Controller('relationships')
export class RelationshipsController {

	constructor(private readonly relationshipsService: RelationshipsService) {}

	@Get()
	async findAll(): Promise<Relationship[]> {
		return this.relationshipsService.findAll();
	}

	@Get(':id')
	async findById(@Param('id') id: number): Promise<Relationship> {
		console.log('find by id', id);
		return this.relationshipsService.findById(id);
	}

	@Post()
	async create(@Body() createCharacterDto: CreateRelationshipDto) {
		console.log('create character', createCharacterDto);
		this.relationshipsService.create(createCharacterDto);
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
	  this.relationshipsService.delete(id);
	}

	@Put()
	async update(@Body() updateCharacterDto: UpdateRelationshipDto): Promise<Relationship> {
	  return this.relationshipsService.update(updateCharacterDto);
	}
}
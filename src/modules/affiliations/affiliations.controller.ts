import { Controller, Get, Post, Delete, Put, Body, Param, HttpStatus } from '@nestjs/common';
import { CreateAffiliationDto } from './dto/create-affiliation.dto';
import { UpdateAffiliationDto } from './dto/update-affiliation.dto';
import { AffiliationsService } from './affiliations.service';
import { Affiliation } from './interfaces/affiliation.interface';

@Controller('affiliations')
export class AffiliationsController {

	constructor(private readonly affiliationsService: AffiliationsService) {}

	@Get()
	async findAll(): Promise<Affiliation[]> {
		return this.affiliationsService.findAll();
	}

	@Get(':id')
	async findById(@Param('id') id: number): Promise<Affiliation> {
		console.log('find by id', id);
		return this.affiliationsService.findById(id);
	}

	@Post()
	async create(@Body() createAffiliationDto: CreateAffiliationDto) {
		console.log('create affiliation', createAffiliationDto);
		this.affiliationsService.create(createAffiliationDto);
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
	  this.affiliationsService.delete(id);
	}

	@Put()
	async update(@Body() updateAffiliationDto: UpdateAffiliationDto): Promise<Affiliation> {
	  return this.affiliationsService.update(updateAffiliationDto);
	}
}
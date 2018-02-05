import { Component, Inject } from '@nestjs/common';
import { Affiliation } from './interfaces/affiliation.interface';
import { CreateAffiliationDto } from './dto/create-affiliation.dto';
import { UpdateAffiliationDto } from './dto/update-affiliation.dto';
import { Model } from 'mongoose';
import Constants from '../constants';

@Component()
export class AffiliationsService {
	constructor( @Inject(Constants.AFFILIATIONS_PROVIDE) private readonly affiliationModel: Model<Affiliation>) { }

	async create(createAffiliationDto: CreateAffiliationDto): Promise<Affiliation> {
		const createdAffiliation = new this.affiliationModel(createAffiliationDto);
		return await createdAffiliation.save();
	}

	async findAll(): Promise<Affiliation[]> {
		return await this.affiliationModel
			.find()
			.populate('members', 'name')
			.populate('relationships.affiliation', 'name')
			.populate('relationships.type', 'name')
			.exec();
	}

	async findById(id: number): Promise<Affiliation> {
		return await this.affiliationModel
			.findById(id)
			.populate('members', 'name')
			.populate('relationships.affiliation', 'name')
			.populate('relationships.type', 'name')
			.exec();
	}

	async delete(id: number) {
		return this.affiliationModel.findById(id).remove().exec();
	}

	async update(updateAffiliationDto: UpdateAffiliationDto): Promise<Affiliation> {
		return this.affiliationModel.findOneAndUpdate({ _id: updateAffiliationDto.id }, updateAffiliationDto).exec();
	}
}
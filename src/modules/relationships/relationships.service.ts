import { Component, Inject } from '@nestjs/common';
import { Relationship } from './interfaces/relationship.interface';
import { CreateRelationshipDto } from './dto/create-relationship.dto';
import { UpdateRelationshipDto } from './dto/update-relationship.dto';
import { Model } from 'mongoose';
import Constants from '../constants';

@Component()
export class RelationshipsService {
	constructor( @Inject(Constants.RELATIONSHIPS_PROVIDE) private readonly relationshipModel: Model<Relationship>) { }

	async create(createRelationshipDto: CreateRelationshipDto): Promise<Relationship> {
		const createdRelationship = new this.relationshipModel(createRelationshipDto);
		return await createdRelationship.save();
	}

	async findAll(): Promise<Relationship[]> {
		return await this.relationshipModel.find().exec();
	}

	async findById(id: number): Promise<Relationship> {
		return await this.relationshipModel.findById(id).exec();
	}

	async delete(id: number) {
		return this.relationshipModel.findById(id).remove().exec();
	}

	async update(updateRelationshipDto: UpdateRelationshipDto): Promise<Relationship> {
		return this.relationshipModel.findOneAndUpdate({ _id: updateRelationshipDto.id }, updateRelationshipDto).exec();
	}
}
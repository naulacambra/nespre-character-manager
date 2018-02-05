import { Component, Inject } from '@nestjs/common';
import { Character } from './interfaces/character.interface';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Model } from 'mongoose';
import Constants from '../constants';
import { Affiliation } from '../affiliations/interfaces/affiliation.interface';

@Component()
export class CharactersService {
	constructor( @Inject(Constants.CHARACTERS_PROVIDE) private readonly characterModel: Model<Character>,
	@Inject(Constants.CHARACTERS_PROVIDE) private readonly affiliationModel: Model<Affiliation>) { }

	async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
		const createdCharacter = new this.characterModel(createCharacterDto);
		return await createdCharacter.save();
	}

	async findAll(): Promise<Character[]> {
		return await this.characterModel
			.find()
			.populate({
				path: 'affiliations',
			})
			.exec();
	}

	async findById(id: number): Promise<Character> {
		return await this.characterModel
			.findById(id)
			.populate({
				path: 'affiliations',
				populate: { path: 'members' }
			})
			.exec();
	}

	async delete(id: number) {
		return this.characterModel.findById(id).remove().exec();
	}

	async update(updateCharacterDto: UpdateCharacterDto): Promise<Character> {
		return this.characterModel.findOneAndUpdate({ _id: updateCharacterDto.id }, updateCharacterDto).exec();
	}
}
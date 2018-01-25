import { Controller, Get, Post, Delete, Put, Body, Param, HttpStatus } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CharactersService } from './characters.service';
import { Character } from './interfaces/character.interface';

@Controller('characters')
export class CharactersController {

	constructor(private readonly charactersService: CharactersService) { }

	@Get()
	async findAll(): Promise<Character[]> {
		return this.charactersService.findAll();
	}

	@Get(':id')
	async findById( @Param('id') id: number): Promise<Character> {
		console.log('find by id', id);
		return this.charactersService.findById(id);
	}

	@Post()
	async create( @Body() createCharacterDto: CreateCharacterDto) {
		console.log('create character', createCharacterDto);
		this.charactersService.create(createCharacterDto);
	}

	@Delete(':id')
	async delete( @Param('id') id: number) {
		this.charactersService.delete(id);
	}

	@Put()
	async update( @Body() updateCharacterDto: UpdateCharacterDto): Promise<Character> {
		console.log('update character', updateCharacterDto);
		return this.charactersService.update(updateCharacterDto);
	}
}
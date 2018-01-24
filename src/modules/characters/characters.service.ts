import { Component } from '@nestjs/common';
import { Character } from './interfaces/character.interface';
import { CreateCharacterDto } from './dto/create-character.dto';

@Component()
export class CharactersService {
  private id: number = 1;
  private readonly characters: Character[] = [];

  create(character: CreateCharacterDto) {
	  console.log(character);
	  character.id = this.id;
	  this.characters.push(character);
	  ++this.id;
  }

  findAll(): Character[] {
    return this.characters;
  }

  findById(id: number): Character {
  	for (var i = this.characters.length - 1; i >= 0; i--) {
  		if (this.characters[i].id == id) return this.characters[i];
  	}
  	return null;
  }

  delete(id: number) {
  	for (var i = this.characters.length - 1; i >= 0; i--) {
  		if (this.characters[i].id == id) this.characters.splice(i, 1);
  	}
  }

  update(car: Character): Character{
  	for (var i = this.characters.length - 1; i >= 0; i--) {
  		if (this.characters[i].id == car.id) {
  			this.characters[i] = car;
  			return this.characters[i];
  		}
  	}
  	return null;
  }
}
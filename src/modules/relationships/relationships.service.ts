import { Component } from '@nestjs/common';
import { Relationship } from './interfaces/relationship.interface';
import { CreateRelationshipDto } from './dto/create-relationship.dto';

@Component()
export class RelationshipsService {
  private id: number = 1;
  private readonly relationships: Relationship[] = [];

  create(relationship: CreateRelationshipDto) {
	  console.log(relationship);
	  relationship.id = this.id;
	  this.relationships.push(relationship);
	  ++this.id;
  }

  findAll(): Relationship[] {
    return this.relationships;
  }

  findById(id: number): Relationship {
  	for (var i = this.relationships.length - 1; i >= 0; i--) {
  		if (this.relationships[i].id == id) return this.relationships[i];
  	}
  	return null;
  }

  delete(id: number) {
  	for (var i = this.relationships.length - 1; i >= 0; i--) {
  		if (this.relationships[i].id == id) this.relationships.splice(i, 1);
  	}
  }

  update(relationship: Relationship): Relationship{
  	for (var i = this.relationships.length - 1; i >= 0; i--) {
  		if (this.relationships[i].id == relationship.id) {
  			this.relationships[i] = relationship;
  			return this.relationships[i];
  		}
  	}
  	return null;
  }
}
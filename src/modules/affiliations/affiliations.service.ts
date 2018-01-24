import { Component } from '@nestjs/common';
import { Affiliation } from './interfaces/affiliation.interface';
import { CreateAffiliationDto } from './dto/create-affiliation.dto';

@Component()
export class AffiliationsService {
  private id: number = 1;
  private readonly affiliations: Affiliation[] = [];

  create(affiliation: CreateAffiliationDto) {
	  console.log(affiliation);
	  affiliation.id = this.id;
	  this.affiliations.push(affiliation);
	  ++this.id;
  }

  findAll(): Affiliation[] {
    return this.affiliations;
  }

  findById(id: number): Affiliation {
  	for (var i = this.affiliations.length - 1; i >= 0; i--) {
  		if (this.affiliations[i].id == id) return this.affiliations[i];
  	}
  	return null;
  }

  delete(id: number) {
  	for (var i = this.affiliations.length - 1; i >= 0; i--) {
  		if (this.affiliations[i].id == id) this.affiliations.splice(i, 1);
  	}
  }

  update(car: Affiliation): Affiliation{
  	for (var i = this.affiliations.length - 1; i >= 0; i--) {
  		if (this.affiliations[i].id == car.id) {
  			this.affiliations[i] = car;
  			return this.affiliations[i];
  		}
  	}
  	return null;
  }
}
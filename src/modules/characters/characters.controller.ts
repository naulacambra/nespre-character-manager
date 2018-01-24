import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
// import { CarsService } from './cars.service';
import { Character } from './interfaces/character.interface';

@Controller('characters')
export class CharactersController {

	// constructor(private readonly carsService: CarsService) {}

	// @Get()
	// async findAll(): Promise<Car[]> {
	//   return this.carsService.findAll();
	// }

	// @Get(':id')
	// async findById(@Param('id') id: number): Promise<Car> {
	// 	console.log(id);
	//   return this.carsService.findById(id);
	// }

	// @Post()
	// async create(@Body() createCarDto: CreateCarDto) {
	//   this.carsService.create(createCarDto);
	// }

	// @Delete(':id')
	// async delete(@Param('id') id: number) {
	//   this.carsService.delete(id);
	// }

	// @Put()
	// async update(@Body() updateCarDto: UpdateCarDto): Promise<Car> {
	//   return this.carsService.update(updateCarDto);
	// }

}
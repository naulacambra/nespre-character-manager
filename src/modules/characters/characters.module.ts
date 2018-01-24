import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

@Module({
    controllers: [CharactersController],
    components: [CharactersService],
})
export class CharactersModule {}
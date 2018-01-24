import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { charactersProviders } from './characters.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CharactersController],
    components: [CharactersService, ...charactersProviders],
})
export class CharactersModule {}
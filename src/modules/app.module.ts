import { Module } from '@nestjs/common';
import { AffiliationsModule } from './affiliations/affiliations.module';
import { CharactersModule } from './characters/characters.module';
import { RelationshipsModule } from './relationships/relationships.module';

@Module({
  imports: [AffiliationsModule, CharactersModule, RelationshipsModule],
})

export class ApplicationModule {}

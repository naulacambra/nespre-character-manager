import { Module } from '@nestjs/common';
import { RelationshipsController } from './relationships.controller';
import { RelationshipsService } from './relationships.service';
import { DatabaseModule } from '../database/database.module';
import { relationshipsProviders } from './relationships.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [RelationshipsController],
    components: [RelationshipsService, ...relationshipsProviders],
})
export class RelationshipsModule {}
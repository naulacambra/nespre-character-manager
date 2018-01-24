import { Module } from '@nestjs/common';
import { RelationshipsController } from './relationships.controller';
import { RelationshipsService } from './relationships.service';

@Module({
    controllers: [RelationshipsController],
    components: [RelationshipsService],
})
export class RelationshipsModule {}
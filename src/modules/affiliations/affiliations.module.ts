import { Module } from '@nestjs/common';
import { AffiliationsController } from './affiliations.controller';
import { AffiliationsService } from './affiliations.service';
import { DatabaseModule } from '../database/database.module';
import { affiliationsProviders } from './affiliations.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [AffiliationsController],
    components: [AffiliationsService, ...affiliationsProviders],
})
export class AffiliationsModule {}
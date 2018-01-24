import { Module } from '@nestjs/common';
import { AffiliationsController } from './affiliations.controller';
import { AffiliationsService } from './affiliations.service';

@Module({
    controllers: [AffiliationsController],
    components: [AffiliationsService],
})
export class AffiliationsModule {}
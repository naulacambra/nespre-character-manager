import { Connection } from 'mongoose';
import { AffiliationSchema } from './schemas/affiliation.schema';
import Constants from '../constants';

export const affiliationsProviders = [
  {
    provide: Constants.AFFILIATIONS_PROVIDE,
    useFactory: (connection: Connection) => connection.model('Affiliation', AffiliationSchema),
    inject: [Constants.DB_CONNECTION_TOKEN],
  },
];
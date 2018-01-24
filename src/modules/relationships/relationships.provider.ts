import { Connection } from 'mongoose';
import { RelationshipSchema } from './schemas/relationship.schema';
import Constants from '../constants';

export const relationshipsProviders = [
  {
    provide: Constants.RELATIONSHIPS_PROVIDE,
    useFactory: (connection: Connection) => connection.model('Relationship', RelationshipSchema),
    inject: [Constants.DB_CONNECTION_TOKEN],
  },
];
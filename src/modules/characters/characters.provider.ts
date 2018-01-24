import { Connection } from 'mongoose';
import { CharacterSchema } from './schemas/character.schema';
import Constants from '../constants';

export const charactersProviders = [
  {
    provide: Constants.CHARACTERS_PROVIDE,
    useFactory: (connection: Connection) => connection.model('Character', CharacterSchema),
    inject: [Constants.DB_CONNECTION_TOKEN],
  },
];
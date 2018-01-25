import * as mongoose from 'mongoose';
import Constants from '../constants';

export const databaseProviders = [
  {
    provide: Constants.DB_CONNECTION_TOKEN,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      mongoose.set('debug', true);
      return await mongoose.createConnection(Constants.DB_CONNECTION_STRING, {
        auth: {
          user: Constants.DB_USER,
          password: Constants.DB_PWD
        }
      });
    },
  },
];
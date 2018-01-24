import * as mongoose from 'mongoose';
import Constants from '../constants';

export const databaseProviders = [
  {
    provide: Constants.DB_CONNECTION_TOKEN,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.createConnection(`mongodb://localhost/${Constants.DB_NAME}`);
    },
  },
];
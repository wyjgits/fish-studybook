import { Database } from './database';

export class UserService {
  constructor(private database: Database) {}

  createUser(name: string) {
    const id = Math.floor(Math.random() * 1000);
    const newUser = { id, name };
    this.database.addUser(newUser);
    return newUser;
  }
}

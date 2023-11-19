import { describe, expect, it, vi } from 'vitest';
import { Database } from './database';
import { UserService } from './UserSerivce';
// class UserService
describe('UserService', () => {
  it('should create user', () => {
    const database = new Database();
    Database.prototype.addUser = vi.fn(); // vi.spyOn(database, 'addUser');
    // vi.spyOn(database, 'addUser');

    const userService = new UserService(database);

    userService.createUser('testUser');

    expect(database.addUser).toBeCalled();
  });
});

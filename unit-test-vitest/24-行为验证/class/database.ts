export interface User {
  id: number;
  name: string;
}

export class Database {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }
}

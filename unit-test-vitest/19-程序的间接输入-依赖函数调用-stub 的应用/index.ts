import { userAge } from './user';

// 直接input
function add(a: number, b: number) {
  return a + b;
}

// 间接input
export function doubleUserAge() {
  return userAge() * 2;
}

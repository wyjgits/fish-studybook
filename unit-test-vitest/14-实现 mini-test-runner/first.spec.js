import {
  it,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
} from './core.js';

test('first test', () => {
  console.log('first test');
  expect(2).toBe(1);
});

it('second test', () => {
  console.log('second test');
});

// test.only('third test', () => {
//   console.log('only third test');
// });

describe('first describe', () => {
  test('describe first test', () => {
    console.log('describe first test');
  });

  test('describe second test', () => {
    console.log('describe second test');
  });
});

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforeEach');
});

afterEach(() => {
  console.log('afterEach');
});

afterAll(() => {
  console.log('afterAll');
});

// run();

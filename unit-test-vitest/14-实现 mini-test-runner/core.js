// test it
// expect toBe
// test.only
// 提示是否通过、报错
// beforeAll beforeEach afterEach afterAll
//  describe
//  自动执行所有测试脚本 *.spec.ts

const tests = [];
const onlyTests = [];
const beforeAllFns = [];
const beforeEachFns = [];
const afterEachFns = [];
const afterAllFns = [];

function callFns(fns) {
  for (const fn of fns) {
    fn();
  }
}

export function describe(name, fn) {
  fn();
}

export function test(name, fn) {
  tests.push({ name, fn });
}

test.only = function (name, fn) {
  onlyTests.push({ name, fn });
};

export const it = test;

export function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`expected：${expected}, actual is ${actual}`);
      } else {
        console.log('pass');
      }
    },
  };
}

export function beforeAll(fn) {
  beforeAllFns.push(fn);
}

export function beforeEach(fn) {
  beforeEachFns.push(fn);
}

export function afterEach(fn) {
  afterEachFns.push(fn);
}

export function afterAll(fn) {
  afterAllFns.push(fn);
}

export function run() {
  const suit = onlyTests.length > 0 ? onlyTests : tests;
  callFns(beforeAllFns);
  for (const test of suit) {
    callFns(beforeEachFns);
    try {
      test.fn();
      console.log(`${test.name} passed`);
    } catch (error) {
      console.log(`${test.name} failed: ${error.message}`);
    }
    callFns(afterEachFns);
  }
  callFns(afterAllFns);
}

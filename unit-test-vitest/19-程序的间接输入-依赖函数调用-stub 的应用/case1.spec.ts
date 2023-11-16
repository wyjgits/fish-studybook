import { doubleUserAge } from './index';
import { it, expect, describe, vi } from 'vitest';
import { userAge } from './user';

// vi.mock('./user', () => {
//   return {
//     userAge: () => 5,
//   };
// });

// vi.mock('./user');
// 我们是否可以控制间接input的返回值
describe('间接input', () => {
  it('first', async () => {
    // given
    // vi.mocked(userAge).mockReturnValue(5);

    // vi.doMock('./user', () => {
    //   return {
    //     userAge: () => 5,
    //   };
    // });
    // const { doubleUserAge } = await import('./index');

    // when
    const result = doubleUserAge();

    // then
    expect(result).toBe(10);
  });
});

import { describe, expect, it, vi } from 'vitest';
import { getTip, login, loginV2 } from './login';
import { cxrLogin } from 'cxr';

vi.mock('cxr', () => {
  return {
    // cxrLogin: vi.fn(),
    // cxrLogin: vi.fn().mockReturnValue(true),
    cxrLogin: vi.fn(() => true),
  };
});

describe('login', () => {
  it('should called login function', () => {
    // TODO
    login('testUser', 'testPassword');

    expect(cxrLogin).toBeCalled();
    expect(cxrLogin).toBeCalledWith('testUser', 'testPassword');
    expect(cxrLogin).toBeCalledTimes(1);
  });

  it('v2', () => {
    loginV2('testUser', 'testPassword');

    expect(cxrLogin).toBeCalled();
    expect(getTip()).toBe('login success');
  });
});

// 优先使用状态验证
// 行为验证的缺点：
// 1 破坏了封装性 -> 白盒测试  暴露了内部实现
// 2 丧失了测试的有效性 -> 重构时，行为可能会改变，导致测试用例失效

// 使用时机
//  api 时间成本高，不易于测试

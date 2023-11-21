import { expect, it, vi } from 'vitest';
import { fetchUser } from './setTimeout';
it('should fetch user data', async () => {
  vi.useFakeTimers();

  const callback = vi.fn();
  await fetchUser(callback);

  // vi.advanceTimersByTime(1000);
  // vi.advanceTimersToNextTimer();
  vi.runAllTimers(); // setInterval 不能用这个，应该使用上面的两个api
  // 如果要处理的是多个嵌套的定时器，可以使用多次执行advanceTimersToNextTimer或advanceTimersByTime设定时间为时间总和来处理

  expect(callback).toBeCalled();
});

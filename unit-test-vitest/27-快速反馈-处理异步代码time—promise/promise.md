## promise

没有延时的，直接用await就行

如果内部有setTimeout 
```javascript
it('promise with timeout',() => {
  vi.useFakeTimers();

  const result = delay(1000);

  vi.advanceTimersToNextTimer();

  expect(result).resolves.toBe('done');
})
```

### 有多个then链调用

使用flushPromises from flush-promises

原理就是await 了一个setTimeOut,也可以自己实现一个
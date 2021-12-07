# 学习笔记

## 2021.12.7 线性表基础（2021.03.25）[练习文件:fiber.ts](./fiber0325/fiber.ts)
- window.requestIdleCallback方法会在浏览器空闲时被调用（兼容需要明确一下，Safari显示不支持，在react中是自己实现的）
  - window.requestIdleCallback(callback[, options])
  - 返回值：一个ID，可以把它传入 Window.cancelIdleCallback() 方法来结束回调。
  - 参数：callback 一个在事件循环空闲时即将被调用的函数的引用。函数会接收到一个名为 IdleDeadline 的参数，这个参数可以获取当前空闲时间以及回调是否在超时时间前已经执行的状态
    - IdleDeadline.didTimeout (en-US) 只读
一个Boolean类型当它的值为true的时候说明callback正在被执行(并且上一次执行回调函数执行的时候由于时间超时回调函数得不到执行)，因为在执行requestIdleCallback回调的时候指定了超时时间并且时间已经超时。
    - IdleDeadline.timeRemaining()
返回一个时间DOMHighResTimeStamp, 并且是浮点类型的数值，它用来表示当前闲置周期的预估剩余毫秒数。如果idle period已经结束，则它的值是0。你的回调函数(传给requestIdleCallback的函数)可以重复的访问这个属性用来判断当前线程的闲置时间是否可以在结束前执行更多的任务。
  - 参数：options具有属性timeout，如果指定了timeout，并且有一个正值，而回调在timeout毫秒过后还没有被调用，那么回调任务将放入事件循环中排队，即使这样做有可能对性能产生负面影响
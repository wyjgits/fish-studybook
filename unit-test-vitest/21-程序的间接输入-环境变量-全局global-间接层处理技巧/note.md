## 环境变量
```javascript
import {vi} from 'vitest';
afterEach(()=>{
  vi.unstubAllEnvs();
})
test('env', ()=>{
  vi.stubEnv('userName', 'lili');

  const r = userName(); // 返回环境变量中的userName


  expect(r).toBe('lili');

  vi.unstubAllEnvs();
})
```

## 全局global

```javascript
  vi.stubGlobal('name', 'lili');
  const name = userName() // 返回window.name
  expect(name).toBe('lili')
```

## 间接层处理

> 通过将获取值或要操作的内容包到一个函数中，通过vi.mock修改这个新创建的函数，即可实现中间层修改
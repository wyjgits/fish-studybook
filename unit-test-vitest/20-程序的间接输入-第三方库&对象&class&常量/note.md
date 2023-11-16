## 三方库
```javascript
import {test, vi, expect} from 'vitest';
import { doubleUserAge } from './user'
import axios from "axios";
vi.mock('axios');
test('第三方库', () => {
  vi.mocked(axios).mockResolvedValue({name: "userName", age: 18})
  // vi.mocked(axios.get).mockResolvedValue({name: "userName", age: 18})
  const r = await doubleUserAge();
  expect(r).toBe(36)
})

```
## 对象
```javascript
  import { config } from './config';

  config.name = "Bob" // 直接修改全局配置的值在进行测试即可
  
 ```
## class
```javascript

vi.mock('./class', () => {
  User: class User {
    age = 2
    getAge(){
      return 2
    }
  }
})

// 或者也可直接引入类，然后修改类的prototype.getAge
```

## 常量
```javascript
vi.mock('./config', async (importOriginal) => {

  // const config = await importActual('./config')
  const config = await importOriginal();
  return {
    ...config,
    age: 10
  }
})
```
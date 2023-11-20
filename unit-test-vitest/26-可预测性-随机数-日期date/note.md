## 26-可预测性-随机数-日期date

> 进行测试时要保证可预测性，因此才有了vi的api,帮助我们保证给定输入产生可预测的输出

### 随机数

```javascript
export function generateRandomStrring(length) {
  let result = "";
  const characters = "abcdefghijkl";
  for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charaters.length);
    result+= characters.charAt(randomIndex);
  }
  return result;
}

it('generate random string', ()=> {

  vi.spyOn(Math, 'random').mockImplementation(()=>{
    return 0.1
  })
  // vi.spyOn(Math, 'random').mockImplementationOnce(()=>{
  //   return 0.2
  // })
  
  const result = gengrateRandomString(2);


  except(result).toBe('cc')
})
```

### 日期

```javascript
it('', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2023, 3, 21));

  const result = checkFrriday();
  expect(result).toBe('happy')

  vi.useRealTimers();
})
```
// 线性表基础（2021.03.25）

// 伪代码
type Fiber = {
  child: Fiber | null,
  sibling: Fiber | null,
  return: Fiber | null,
}
const fiber:Fiber = {
  child: null,
  sibling: null,
  return: null
};

function performUnitWork(fiber:Fiber) {
  // 从这个fiber节点开始遍历

  // 判断是不是组件

  if(fiber.child){
    return fiber.child
  }

  let next = fiber
  while(next){
    if(next.sibling){//下一个兄弟节点
      return next.sibling
    }
    next = next.sibling
  }
}

let nextWork = null
let workInpressProgressRoot = null

function workLoop(deadline){
  while(nextWork && deadline.timeRemaining()>1){
    // 有活要干并且当前剩余时间大于1ms
    // 继续干
    nextWork = performUnitWork(nextWork)
  }
  if(!nextWork){
    commitRoot() //提交修改
  }

}

window.requestIdleCallback(workLoop); //react自己实现的这个函数，利用任务队列计算时间控制requestAnimationFrame/MessageChannel

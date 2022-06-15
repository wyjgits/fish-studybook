/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
  private queue:Array<number> = []
  private max = 0
  private front = 0;
  private rear = 0;
  private count = 0;
    constructor(k: number) {
      this.max = k;
    }

    enQueue(value: number): boolean {
      if(this.isFull()) return false;
      this.queue[this.rear] = value;
      this.rear = (this.rear+1)%this.max
      this.count+=1;
      return true;
    }

    deQueue(): boolean {
      if(this.isEmpty()) return false;
      this.front = (this.front+1)%this.max;
      this.count -=1  
      // this.front = (this.front + 1) % (this.max+1);
      return true;
    }

    Front(): number {
      if(this.isEmpty()) return -1;
      return this.queue[this.front];
    }

    Rear(): number {
      if(this.isEmpty()) return -1;
      return this.queue[(this.rear -1 + this.max) % this.max];
    }

    isEmpty(): boolean {
      return this.count === 0
    }

    isFull(): boolean {
      return this.count === this.max;
    }
}
// /*
//  * @lc app=leetcode.cn id=622 lang=typescript
//  *
//  * [622] 设计循环队列
//  */

// // @lc code=start
// class MyCircularQueue {
//   queue = []
//   max = 0
//     constructor(k: number) {
//       this.max = k;
//     }

//     enQueue(value: number): boolean {
//       if(this.queue.length<this.max){
//         this.queue.push(value);
//         return true;
//       }
//       return false;
//     }

//     deQueue(): boolean {
//       if(this.queue.length){
//         this.queue.shift();
//         return true;
//       }
//       return false;
//     }

//     Front(): number {
//       return this.queue[0] ?? -1;
//     }

//     Rear(): number {
//       return this.queue[this.queue.length-1] ?? -1;
//     }

//     isEmpty(): boolean {
//       return this.queue.length===0
//     }

//     isFull(): boolean {
//       return this.queue.length===this.max
//     }
// }

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end


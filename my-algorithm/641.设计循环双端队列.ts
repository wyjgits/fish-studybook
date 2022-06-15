/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
class MyCircularDeque {
  private queue = []
  private count= 0;
  private head = 0;
  private tail = 0;
  private max:number
    constructor(k: number) {
      this.max = k;
    }

    insertFront(value: number): boolean {
      if(this.isFull()) return false;
      this.head = (this.head -1 + this.max) % this.max;
      this.queue[this.head]  = value;
      this.count ++;
      return true;

    }

    insertLast(value: number): boolean {
      if(this.isFull()) return false;
      this.queue[this.tail]  = value;
      this.tail = (this.tail + 1) % this.max;
      this.count ++;
      return true;
    }

    deleteFront(): boolean {
      if(this.isEmpty()) return false;
      this.head = (this.head + 1) % this.max;
      this.count--;
      return true;
    }

    deleteLast(): boolean {
      if(this.isEmpty()) return false;
      this.tail = (this.tail -1 + this.max) % this.max;
      this.count--;
      return true;
    }

    getFront(): number {
      if(this.isEmpty()) return -1;
      return this.queue[this.head]
    }

    getRear(): number {
      if(this.isEmpty()) return -1;
      return this.queue[(this.tail-1+this.max)%this.max]
    }

    isEmpty(): boolean {
      return this.count===0
    }

    isFull(): boolean {
      return this.count===this.max
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end


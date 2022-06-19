/*
 * @lc app=leetcode.cn id=1670 lang=typescript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start
// 基于两个双向链表进行实现
// 链表节点
class BaseListNode {
  public val:number
  public next:null | BaseListNode
  public pre:null | BaseListNode
  constructor(val=0,next=null,pre=null){
    this.val = val;
    this.next = next;
    this.pre = pre
  }
  insert_pre(p:BaseListNode){
    p.pre = this.pre;
    p.next = this;
    if(this.pre) this.pre.next = p
    this.pre = p;
  }
  inset_next(p){
    p.pre = this;
    p.next = this.next;
    if(this.next) this.next.pre = p;
    this.next = p;
  }
  delete_pre(){
    if(!this.pre) return;
    let pre = this.pre.pre;
    if(pre) pre.next = this;
    this.pre = pre;
  }
  delete_next(){
    if(!this.next) return;
    let next = this.next;
    this.next = next.next;
    if(next.next) next.pre = this;
  }

}
class BaseQueue {
  head:BaseListNode
  tail:BaseListNode
  count = 0
  empty = new BaseListNode(-1)
  constructor(){
    this.head = new BaseListNode()
    this.tail = new BaseListNode()
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }
  push_back(node){
    let pre = this.tail.pre;
    pre.next = node;
    node.pre = pre;
    node.next = this.tail;
    this.tail.pre = node;
    this.count++
  }
  push_front(node){
    let next = this.head.next;
    node.pre = this.head;
    this.head.next = node;
    node.next = next;
    next.pre = node;
    this.count++
  }
  pop_back(){
    let cur = this.tail.pre;
    if(cur===this.head) return this.empty;
    let pre = this.tail.pre.pre;
    pre.next = this.tail;
    this.tail.pre = pre;
    this.count--;
    return cur;
  }
  pop_front(){
    let cur = this.head.next
    if(cur===this.tail) return this.empty;
    let next = this.head.next.next;
    this.head.next = next;
    next.pre = this.head;
    this.count--;
    return cur;
  }
}


class FrontMiddleBackQueue {
    q1 = new BaseQueue()
    q2 = new BaseQueue()
    constructor() {

    }

    pushFront(val: number): void {
      this.q1.push_front(new BaseListNode(val))
      this.update();
    }

    pushMiddle(val: number): void {
      let node = new BaseListNode(val)
      if(this.q1.count>this.q2.count){
        this.q2.push_front(this.q1.pop_back())
      }
      this.q1.push_back(node)
    }

    pushBack(val: number): void {
      this.q2.push_back(new BaseListNode(val))
      this.update();
    }

    popFront(): number {
      // if((this.q1.count === this.q2.count) && this.q2.count){
      //   this.q1.push_back(this.q2.pop_front())
      // }
      let ret = this.q1.pop_front();
      this.update()
      return ret.val;
    }

    popMiddle(): number {
      let ret = this.q1.pop_back();
      this.update();
      return ret.val;
    }

    popBack(): number {
      let ret = null;
      if(this.q2.count){
        ret = this.q2.pop_back()
      }else{
        ret = this.q1.pop_back();
      }
      this.update()
      return ret.val;
    }
    update(){
      if(this.q1.count<this.q2.count){
        this.q1.push_back(this.q2.pop_front());
      }
      if(this.q1.count===this.q2.count+2){
        this.q2.push_front(this.q1.pop_back())
      }
    }
}

// var obj = new FrontMiddleBackQueue()
// obj.pushFront(1)
// obj.pushBack(2)
// obj.pushMiddle(3)
// obj.pushMiddle(4)
// obj.popFront()
/**
 * Your FrontMiddleBackBaseQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackBaseQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end


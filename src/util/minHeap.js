class MinHeap {
  constructor(scoreFunction) {
    this.heap = [];
    this.scoreFunction = scoreFunction;
  }

  get size() {
    return this.heap.length;
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    if (!this.hasParent(index)) return;
    const parentScore = this.scoreFunction(this.parent(index));
    const heapScore = this.scoreFunction(this.heap[index]);

    while (this.hasParent(index) && parentScore > heapScore) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (this.hasRightChild(index)) {
        const rightScore = this.scoreFunction(this.rightChild(index));
        const leftScore = this.scoreFunction(this.leftChild(index));
        if (rightScore < leftScore) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
      }
      const heapScore = this.scoreFunction(this.heap[index])
      const heapSmallChildScore = this.scoreFunction(this.heap[smallerChildIndex]);
      if (heapScore < heapSmallChildScore) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

}

export default MinHeap
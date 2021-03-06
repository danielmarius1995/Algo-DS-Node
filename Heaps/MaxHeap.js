/* MaxHeap */

// Left child: i * 2
// Right child: i * 2 + 1
// Parent: i / 2

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  printMaxHeap() {
    return this.heap;
  }

  insertItem(item) {
    this.heap.push(item);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      // heap[idx/2] parent of heap[idx]
      while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx / 2)]];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  removeItem() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      // removes item on position 1
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
}

let maxheap = new MaxHeap();

maxheap.insertItem(5);
maxheap.insertItem(1);
maxheap.insertItem(9);
maxheap.insertItem(6);
maxheap.insertItem(12);
maxheap.insertItem(10);

console.log(maxheap.printMaxHeap());

const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    return this.length; // возвращаем длину
  }

  enqueue(element) {
    const newNode = new ListNode(element); // создаем новый элемент (берем функцию из расширения)
    if (!this.first) {
      this.first = newNode; // если элементов нет создаем первый и второй
      this.last = newNode;
    } else {
      this.last.next = newNode; // если элементы есть - заменяем второй
      this.last = newNode;
    }

    this.length++; // увеличиваем длину на 1
  }

  dequeue() {
    const count = this.first; // сохраняем первый элемент
    this.first = this.first.next; // заменяем первый элемент на значинеие второго
    this.length--; // уменьшаем длину
    return count.value; // возвращаем удаленный элемент
  }
}

module.exports = Queue;

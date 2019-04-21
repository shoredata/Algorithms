#pragma once
#include "LinkedList.h"
class Queue :
  private LinkedList
{
public:
  Queue();
  ~Queue();
  void enqueue(int number) { LinkedList::insertTail(number); };
  int dequeue() { return LinkedList::deleteHead(); };
  int peek() { return LinkedList::peekHead(); };
  bool isEmpty() { return LinkedList::isEmpty(); };
};


#pragma once
#include "LinkedList.h"
class Stack :
  private LinkedList
{
public:
  Stack();
  ~Stack();
  void push(int number) { LinkedList::insertHead(number); };
  int pop() { return LinkedList::deleteHead(); };
  int peek() { return LinkedList::peekHead(); };
  bool isEmpty() { return LinkedList::isEmpty(); };
};

Stack::Stack()
{
}
Stack::~Stack()
{
}

#pragma once
#include "LinkedList.h"
class DoublyLinkedList : public LinkedList 
{
public:
  DoublyLinkedList();
  ~DoublyLinkedList();

  void insertHead(int number);        // insert number as new node at head
  void insertTail(int number);        // insert number as new node at tail
  int removeHead();                   // remove head and return node value removed
  int removeTail();                   // remove tail and return node calue removed
  int deleteValue(int number);        // remove all ocurrences of number and return value of last node removed

};


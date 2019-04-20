#pragma once
#include <iostream>
#include <string>
#include "node.h"

using namespace std;

class LinkedList
{
public:
  LinkedList();
  ~LinkedList();
  Node *head;
  Node *tail;
  bool isEmpty();                     // return true of head == NULL
  void insertHead(int number);        // insert number as new node at head
  void insertTail(int number);        // insert number as new node at tail
  int deleteHead();                   // remove head and return node value removed
  int deleteTail();                   // remove tail and return node calue removed
  int deleteValue(int number);        // remove all ocurrences of number and return value of last node removed
  int peekHead();                     // return value of head
  int peekTail();                     // return value of tail
  string returnString();              // return string representing all Nodes
};


#pragma once
#include <iostream>
#include <string>

using namespace std;

class Node
{
public:
  Node();
  ~Node();
  Node* next;
  Node* prev;
  int value;

  //string toString();

  //friend class TEST_CLASS;
};


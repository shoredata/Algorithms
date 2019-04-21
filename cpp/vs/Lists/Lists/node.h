#pragma once

class Node
{
public:
  Node();
  ~Node();
  Node* next;
  Node* prev;
  int value;

  friend class TEST_CLASS;
};


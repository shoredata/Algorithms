#include "stdafx.h"
#include "CppUnitTest.h"

#include <iostream>
#include <string>

#include "../Lists/node.h"
#include "../Lists/node.cpp"
#include "../Lists/LinkedList.h"
#include "../Lists/LinkedList.cpp"
#include "../Lists/Queue.h"
#include "../Lists/Stack.h"

using namespace std;
using namespace Microsoft::VisualStudio::CppUnitTestFramework;


namespace ListTests
{		
	TEST_CLASS(NodeClassTests)
	{
	public:
		
    TEST_METHOD(NodeDefaultValue)
		{
      Node* temp = new Node();
      Assert::AreNotEqual(0, temp->value, L"Unexpected Value");
      delete temp;
		}

    TEST_METHOD(NodeAssignedValue)
    {
      Node* temp = new Node();
      temp->value = 1;
      Assert::AreEqual(1, temp->value, L"Set Value to 1");
      delete temp;
    }

    TEST_METHOD(NodePointers)
    {
      Node* temp1 = new Node();
      temp1->value = 1;
      Node* temp2 = new Node();
      temp2->value = 2;
      temp1->next = temp2;
      temp2->prev = temp1;
      Assert::AreEqual(1, temp2->prev->value, L"Value of Prev Invalid");
      Assert::AreEqual(2, temp1->next->value, L"Value of Next Invalid");
      delete temp1;
      delete temp2;
    }


  };


  TEST_CLASS(LinkedListClassTests)
  {
  public:

    TEST_METHOD(EmptyLinkedList)
    {
      LinkedList list;
      Assert::AreEqual(true, list.isEmpty(), L"isEmpty() Invalid after Constructor");
      list.insertHead(1);
      Assert::AreEqual(false, list.isEmpty(), L"isEmpty() Invalid after addHead()");
      list.deleteHead();
      Assert::AreEqual(true, list.isEmpty(), L"isEmpty() Invalid after removeHead() of only node");
    }

    TEST_METHOD(ModifyLinkedListItems)
    {
      LinkedList list;
      for (int idx = 0; idx < 10; idx++) {
        if (idx % 2 == 0) {
          list.insertHead(idx);
        }
        else {
          list.insertTail(idx);
        }
      }
      Assert::AreEqual(8, list.head->value, L"Head Value Invalid");
      Assert::AreEqual(9, list.tail->value, L"Tail Value Invalid");
      Assert::AreEqual(8, list.deleteHead(), L"deleteHead Value Invalid");
      Assert::AreEqual(9, list.deleteTail(), L"deleteTail Value Invalid");
      Assert::AreEqual(6, list.head->value, L"Head Value Invalid");
      Assert::AreEqual(7, list.tail->value, L"Tail Value Invalid");

      for (int idx = 0; idx < 8; idx++) {
        list.deleteHead();
      }
      Assert::AreEqual(true, list.isEmpty(), L"Removed All Items List Not Empty");
      cout << list.returnString() << flush;
    }


    TEST_METHOD(PeekLinkedListValues)
    {
      LinkedList list;
      list.insertHead(18);
      Assert::AreEqual(18, list.peekHead(), L"peekHead Value Invalid");
      Assert::AreEqual(18, list.peekHead(), L"peekTail Value Invalid");
      list.insertTail(19733);
      Assert::AreEqual(18, list.peekHead(), L"peekHead Value Invalid");
      Assert::AreEqual(19733, list.deleteTail(), L"peekTail Value Invalid");
      list.deleteHead();
      list.deleteHead();
      Assert::AreEqual(NULL, list.peekHead(), L"peekHead Value Invalid");
    }

    TEST_METHOD(LinkedListToString)
    {
      LinkedList list;
      string stringblank = "", stringempty = "List: { empty }";
      Assert::AreNotEqual(stringblank, list.returnString(), L"Default Empty LinkedList toString() Invalid");
      Assert::AreEqual(stringempty, list.returnString(), L"Default Empty LinkedList toString() Invalid");

      list.insertTail(1);
      string stringcurrent = "List: { 1 }";
      Assert::AreEqual(stringcurrent, list.returnString(), L"Single Items LinkedList toString() Invalid");

      list.insertTail(3);
      stringcurrent = "List: { 1, 3 }";
      Assert::AreEqual(stringcurrent, list.returnString(), L"Two Items LinkedList toString() Invalid");

      list.insertHead(-4);
      stringcurrent = "List: { -4, 1, 3 }";
      Assert::AreEqual(stringcurrent, list.returnString(), L"Three Items LinkedList toString() Invalid");
    }

  };


  TEST_CLASS(QueueClassTests)
  {
  public:

    TEST_METHOD(EmptyQueue)
    {
      Queue queue;
      Assert::AreEqual(true, queue.isEmpty(), L"isEmpty() Invalid after Constructor");
      queue.enqueue(1);
      Assert::AreEqual(false, queue.isEmpty(), L"isEmpty() Invalid after enqueue()");
      queue.dequeue();
      Assert::AreEqual(true, queue.isEmpty(), L"isEmpty() Invalid after dequeue() of only node");
    }

    TEST_METHOD(ModifyQueueItems)
    {
      Queue queue;
      for (int idx = 0; idx < 10; idx++) {
        queue.enqueue(idx);
      }
      Assert::AreEqual(0, queue.peek(), L"peek() Value Invalid");

      queue.dequeue();
      Assert::AreEqual(1, queue.peek(), L"peek() Value Invalid");

      for (int idx = 0; idx < 9; idx++) {
        queue.dequeue();
      }
      Assert::AreEqual(true, queue.isEmpty(), L"Removed All Items Queue Not Empty");
    }

  };

  TEST_CLASS(StackClassTests)
  {
  public:

    TEST_METHOD(EmptyQueue)
    {
      Stack stack;
      Assert::AreEqual(true, stack.isEmpty(), L"isEmpty() Invalid after Constructor");
      stack.push(1);
      Assert::AreEqual(false, stack.isEmpty(), L"isEmpty() Invalid after enqueue()");
      stack.pop();
      Assert::AreEqual(true, stack.isEmpty(), L"isEmpty() Invalid after pop() of only node");
    }

    TEST_METHOD(ModifyQueueItems)
    {
      Stack stack;
      for (int idx = 0; idx < 10; idx++) {
        stack.push(idx);
      }
      Assert::AreEqual(9, stack.peek(), L"peek() Value Invalid");

      stack.pop();
      Assert::AreEqual(8, stack.peek(), L"peek() Value Invalid");

      for (int idx = 0; idx < 9; idx++) {
        stack.pop();
      }
      Assert::AreEqual(true, stack.isEmpty(), L"Removed All Items Stack Not Empty");
    }

  };



}
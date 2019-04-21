#include "stdafx.h"
#include "CppUnitTest.h"

#include <iostream>
#include <string>

#include "../Lists/node.h"
#include "../Lists/node.cpp"
//#include "../Lists/LinkedList.h"

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
}
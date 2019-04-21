#include "stdafx.h"
#include "CppUnitTest.h"

#include <iostream>
#include <string>

#include "../Lists/node.h"
#include "../Lists/node.cpp"
//#include "../Lists/LinkedList.h"

using namespace std;
using namespace Microsoft::VisualStudio::CppUnitTestFramework;


namespace NativeUnitTest1
{		
	TEST_CLASS(UnitTest1)
	{
	public:
		
    TEST_METHOD(TestMethod1)
		{
      int tvalue = 1;
      Node* temp = new Node();
      Assert::AreNotEqual(0, temp->value, L"Unexpected value");
      temp->value = 1;
      Assert::AreEqual(1, temp->value, L"Set value to 1");
      delete temp;
		}

	};
}
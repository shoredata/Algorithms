#include "stdafx.h"
#include "CppUnitTest.h"

#include <iostream>
#include <string>

#include "../Lists/node.h"
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
      Node/* *temp = new Node();
      temp->value = 1;
      temp->next = NULL;*/
      //Assert::AreEqual(0, pnode.value);
      Assert::AreEqual(1, 1);
		}

	};
}
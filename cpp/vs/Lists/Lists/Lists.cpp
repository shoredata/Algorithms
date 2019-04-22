// Lists.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include <string>
#include "LinkedList.h"
#include "node.h"

using namespace std;

int main()
{
  cout << "LinkedList:" << endl;
  LinkedList list;
  cout << list.returnString() << endl;

  for (int i = 0; i < 10; i++)
  {
    list.insertTail((i + 1) * 100);
  }
  cout << list.returnString() << endl;

  list.insertHead(1);
  cout << list.returnString() << endl;

  cout << "peekHead: " << to_string(list.peekHead()) << endl;
  cout << "peekTail: " << to_string(list.peekTail()) << endl;

  cout << "list.deleteValue(500)" << endl;
  int deleted = list.deleteValue(500);
  cout << "deleted.value = " << to_string(deleted) << endl;
  cout << list.returnString() << endl;

  cout << "removeHead: ";
  deleted = list.removeHead();
  cout << "deleted.value = " << to_string(deleted) << endl;
  cout << list.returnString() << endl;

  cout << "removeTail: ";
  deleted = list.removeTail();
  cout << "deleted.value = " << to_string(deleted) << endl;
  cout << list.returnString() << endl;


}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file

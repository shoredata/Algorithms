#include "pch.h"
#include <iostream>
#include <string>
#include "LinkedList.h"
#include "node.h"


using namespace std;

LinkedList::LinkedList()
{
  head = NULL;
  tail = NULL;
  cout << "++ List Created ++" << endl;
}
LinkedList::~LinkedList()
{
  cout << "-- List Destroyed --" << endl;
}

bool LinkedList::isEmpty()
{
  if (head == NULL)
    return true;
  else
    return false;
}

void LinkedList::insertHead(int number)
{
  Node *temp = new Node();
  temp->value = number;
  temp->next = NULL;

  // If there is no tail yet let's make new node a tail.
  if (tail == NULL) {
    tail = temp;
  }

  temp->next = head;
  head = temp;
}
void LinkedList::insertTail(int number)
{
  if (isEmpty())
  {
    insertHead(number);
  }
  else
  {
    Node *temp = new Node;
    temp->value = number;
    temp->next = NULL;
    tail->next = temp;
    tail = temp;
  }
}

int LinkedList::deleteHead()
{
  int deleted = NULL;
  if (isEmpty())
  {
    return deleteTail();
  }
  else if (head == tail)
  {
    return deleteTail();
  }
  else
  {
    Node *temp = head;
    head = head->next;
    deleted = temp->value;
    delete temp;
  }
  return deleted;
}
int LinkedList::deleteTail()
{
  int deleted = NULL;
  if (isEmpty())
  {
    //cout << "The list is empty\n";
  }
  else if (head == tail)
  {
    deleted = head->value;
    delete head;
    //delete tail;  //there is only 1 thing, you cannot delte it twice
    head = NULL;
    tail = NULL;
  }
  else
  {
    Node *current = head;
    Node *previous = new Node();
    while (current->next != NULL)
    {
      previous = current;
      current = current->next;
    }
    tail = previous;
    previous->next = NULL;
    deleted = current->value;
    delete current;
  }
  return deleted;
}
int LinkedList::deleteValue(int number)
{
  int deleted = NULL;
  if (isEmpty()) {
    return deleted;
  }
  while (head != NULL && head->value == number) {
    deleted = head->value;
    head = head->next;
  }
  Node *current = head;
  if (current != NULL) {
    while (current->next != NULL) {
      if (current->next->value == number) {
        deleted = current->next->value;
        current->next = current->next->next;
      }
      else {
        current = current->next;
      }
    }
  }
  if (tail->value == number) {
    tail = current;
  }
  return deleted;
}

int LinkedList::peekHead()
{
  if (isEmpty())
  {
    cout << "{ empty list }\n";
    return 0;
  }
  else
  {
    return head->value;
  }
}
int LinkedList::peekTail()
{
  if (isEmpty())
  {
    cout << "{ empty list }\n";
    return 0;
  }
  else
  {
    return tail->value;
  }
}


string LinkedList::returnString()
{
  string sReturn = "";
  if (isEmpty())
    sReturn = "List: { empty }";
  else
  {
    sReturn = "List: { ";
    Node *current = head;
    while (current != NULL)
    {
      if (sReturn.length() > 8) {
        sReturn += ", ";
      }
      sReturn += to_string(current->value);
      current = current->next;
    }
    sReturn += " }";
  }
  return sReturn;
}

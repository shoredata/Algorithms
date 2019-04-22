#include "pch.h"
#include <iostream>
#include <string>
#include "DoublyLinkedList.h"
#include "node.h"

using namespace std;

DoublyLinkedList::DoublyLinkedList()
{
  head = NULL;
  tail = NULL;
  cout << "++ DoublyLinkedList Created ++" << endl;
}
DoublyLinkedList::~DoublyLinkedList()
{
  cout << "-- DoublyLinkedList Destroyed --" << endl;
}


void DoublyLinkedList::insertHead(int number)
{
  Node *temp = new Node();
  temp->value = number;
  temp->next = NULL;

  if (head != NULL) {
    head->prev = temp;
  }

  if (tail == NULL) {
    tail = temp;
  }

  temp->next = head;
  head = temp;
}
void DoublyLinkedList::insertTail(int number)
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
    temp->prev = tail;
    tail = temp;
  }
}

int DoublyLinkedList::removeHead()
{
  int deleted = NULL;
  if (isEmpty())
  {
    return removeTail();
  }
  else if (head == tail)
  {
    return removeTail();
  }
  else
  {
    Node *temp = head;
    head = head->next;
    head->prev = NULL;
    deleted = temp->value;
    delete temp;
  }
  return deleted;
}
int DoublyLinkedList::removeTail()
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
    //Node *current = head;
    //Node *previous = new Node();
    //while (current->next != NULL)
    //{
    //  previous = current;
    //  current = current->next;
    //}
    //tail = previous;
    //previous->next = NULL;
    //deleted = current->value;
    //delete current;
    deleted = tail->value;
    tail = tail->prev;
    tail->next = NULL;
  }
  return deleted;
}
int DoublyLinkedList::deleteValue(int number)
{
  int iDeleted = NULL;
  if (isEmpty()) {
    return iDeleted;
  }
  while (head != NULL && head->value == number) {
    iDeleted = head->value;
    head = head->next;
  }
  Node *deleted = NULL;
  Node *current = head;
  if (current != NULL) {

    while (current->next != NULL) {
      //if (current->next->value == number) {
      //  deleted = current->next->value;
      //  current->next = current->next->next;
      //}
      //else {
      //  current = current->next;
      //}

      if (current->value == number) {
        deleted = current;
        if (deleted == head) {
          head = deleted->next;
          if (head != NULL) {
            head->prev = NULL;
          }
          if (deleted == tail) {
            tail = NULL;
          }
        }
        else if (deleted == tail) {
          tail = deleted->prev;
          tail->next = NULL;
        }
        else {
          Node *previous = deleted->prev;
          Node* next = deleted->next;
          previous->next = next;
          next->prev = previous;
        }
      }
      current = current->next;
    }
  }
  if (tail->value == number) {
    tail = current;
  }
  return iDeleted;
}


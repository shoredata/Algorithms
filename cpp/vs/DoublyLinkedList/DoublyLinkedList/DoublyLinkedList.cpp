// DoublyLinkedList.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include <string>

using namespace std;

struct node {
  int number;
  node *next;
  node *previous;
};

class DoublyLinkedList
{
  node *head, *tail;
public:
  DoublyLinkedList()
  {
    head = NULL;
    tail = NULL;
  }
  bool isEmpty();
  void prepend(int number); //by ref because we will be chaning them
  void append(int number); //at end, like array
  node* removeHead(); //remove head for queue
  node* removeTail(); //at end, like array
  node* deleteValue(int number); //remove all nodes of value number
  int peek(); //show tail number, like array
  int peekHead(); //show head number for queue
  bool contains(int number); //true if number is a value in the list
  void showList();
};

//prototypes
int menu();

int menu()
{
  int choice;

  cout << "Menu\n";
  cout << "1. Add Item\n";
  cout << "2. Remove\n";
  cout << "3. Peek\n";
  cout << "4. Test if Contains #\n";
  cout << "5. Delete All #\n";

  cout << "8. Show List\n";
  cout << "99. Exit\n";

  cin >> choice;
  return choice;
}

int main()
{
  DoublyLinkedList list; // add=tail, remove=tail, peek=tail.value (see Stack)
  DoublyLinkedList queue; //add=tail, remove=head, peek=head.value

  int choice;
  int number;

  do {
    choice = menu();
    switch (choice)
    {
    case 1:
      cout << "Enter a number to insert: ";
      cin >> number;
      list.append(number);
      queue.append(number);
      break;
    case 2:
      cout << "List Removed: ";
      cout << list.removeTail() << endl;
      cout << "Queue Removed: ";
      cout << queue.removeHead() << endl;
      break;
    case 3:
      cout << "Next value for List: ";
      cout << list.peek() << endl;
      cout << "Next value for Queue: ";
      cout << queue.peekHead() << endl;
      break;

    case 4:
      cout << "Enter a number to find: ";
      cin >> number;
      cout << "List " << list.contains(number) << endl;
      cout << "Queue " << queue.contains(number) << endl;
      break;
    case 5:
      cout << "Enter a number to delete: ";
      cin >> number;
      list.deleteValue(number);
      queue.deleteValue(number);
      break;


    case 8:
      cout << "List: ";
      list.showList();
      cout << "Queue: ";
      queue.showList();
      break;


    default:
      cout << "Exiting!\n\n\n";
      break;
    }

  } while (choice != 99);

  return 0;
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


bool DoublyLinkedList::isEmpty()
{
  if (head == NULL)
    return true;
  else
    return false;
}
void DoublyLinkedList::prepend(int number)
{
  node *temp = new node;
  temp->number = number;
  temp->next = NULL;
  if (isEmpty())
  {
    head = temp;
    tail = temp;
    temp = NULL;
  }
  else
  {
    temp->next = head;
    head = temp;
  }
}
void DoublyLinkedList::append(int number)
{
  if (isEmpty())
  {
    prepend(number);
  }
  else
  {
    node *temp = new node;
    temp->number = number;
    temp->next = NULL;
    tail->next = temp;
    tail = temp;
  }
}
node* DoublyLinkedList::deleteValue(int number)
{
  node *deleted = new node;
  node *current = head;

  while (current != NULL) {
    if (current->number == number) {
      deleted = current;
      if (deleted == head) {
        // If HEAD is going to be deleted...
        // Set head to second node, which will become new head.
        head = deleted->next;
        // Set new head's previous to null.
        if (head != NULL) {
          head->previous = NULL;
        }
        // If all the nodes in list has same value that is passed as argument
        // then all nodes will get deleted, therefore tail needs to be updated.
        if (deleted == tail) {
          tail = NULL;
        }
      }
      else if (deleted == tail) {
        // If TAIL is going to be deleted...

        // Set tail to second last node, which will become new tail.
        tail = deleted->previous;
        tail->next = NULL;
      }
      else {
        // If MIDDLE node is going to be deleted...
        node *prev = deleted->previous;
        node *next = deleted->next;
        prev->next = next;
        next->previous = prev;
      }
    }
    current = current->next;
  }
  return deleted;
}
node* DoublyLinkedList::removeTail()
{
  if (tail==NULL) {
    // No tail to delete.
    return NULL;
  }

  if (head == tail) {
    // There is only one node in linked list.
    node *deleted = tail;
    head = NULL;
    tail = NULL;
    return deleted; 
  }

  // If there are many nodes in linked list...
  node *deleted = tail;

  tail = tail->previous;
  tail->next = NULL;
  return deleted;
}
node* DoublyLinkedList::removeHead()
{
  if (head == NULL) {
    // No head to delete.
    return NULL;
  }

  if (head == tail) {
    // There is only one node in linked list.
    node *deleted = tail;
    head = NULL;
    tail = NULL;
    return deleted;
  }

  node *deleted = head;

  if (head->next != NULL) {
    head = head->next;
    head->previous = NULL;
  }
  else {
    head = NULL;
    tail = NULL;
  }

  return deleted;
}
int DoublyLinkedList::peek()
{
  if (isEmpty())
  {
    cout << "{ empty list }\n";
    return 0;
  }
  else
  {
    return tail->number;
  }
}
int DoublyLinkedList::peekHead()
{
  if (isEmpty())
  {
    cout << "{ empty list }\n";
    return 0;
  }
  else
  {
    return head->number;
  }

}
void DoublyLinkedList::showList()
{
  if (isEmpty())
    cout << "{ empty list }\n";
  else
  {
    cout << "List contains: \n";
    node *current = head;
    while (current != NULL)
    {
      cout << current->number << endl;
      current = current->next;
    }
  }
}
bool DoublyLinkedList::contains(int number)
{
  bool bcontains = false;
  if (!isEmpty())
  {
    node *current = head;
    while (current != NULL)
    {
      if (current->number == number)
      {
        bcontains = true;
        break;
      }
      current = current->next;
    }
  }
  cout << "Contains: " << number << " " + bcontains << endl;
  return bcontains;
}




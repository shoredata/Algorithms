// LinkedList.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
using namespace std;

struct node {
  int number;
  node *next;
};


class LinkedList
{
  node *head, *tail;
public:
  LinkedList()
  {
    head = NULL;
    tail = NULL;
  }
  bool isEmpty();
  void insertHead(int number); //by ref because we will be chaning them
  void insert(int number); //at end, like array
  int removeHead(); //remove head for queue
  int remove(); //at end, like array
  int peek(); //show tail number, like array
  int peekHead(); //show head number for queue
  int getLength();
  void showList();
};

char menu();

char menu()
{
  char choice;

  cout << "Menu\n";
  cout << "1. Add Item\n";
  cout << "2. Remove\n";
  cout << "3. Peek\n";
  cout << "7. Count Items\n";
  cout << "8. Show List\n";
  cout << "9. Exit\n";

  cin >> choice;
  return choice;
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
void LinkedList::insert(int number)
{
  if (isEmpty())
  {
    insertHead(number);
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
int LinkedList::remove()
{
  int removed = NULL;
  if (isEmpty())
  {
    cout << "The list is empty\n";
  }
  else if (head == tail)
  {
    removed = head->number;
    delete head;
    delete tail;
    head = NULL;
    tail = NULL;
  }
  else
  {
    //node *temp = new node;
    //temp = head;
    //head = head->next;
    //removed = temp->number;
    //delete temp;


    //node *current = new node;
    //node *previous = new node;
    //current = head;
    //while (current->next != NULL)
    //{
    //  previous = current;
    //  current = current->next;
    //}
    //tail = previous;
    //previous->next = NULL;
    //delete current;

    node *current = new node;
    node *previous = new node;
    current = head;
    while (current->next != NULL)
    {
      previous = current;
      current = current->next;
    }
    tail = previous;
    previous->next = NULL;
    removed = current->number;
    delete current;

    //node *temp = head;
    //node *prev = NULL;
    //while (temp != NULL)
    //{
    //  prev = temp;
    //  temp = temp->next;
    //}
    //removed = tail->number;
    //temp = tail;
    //tail = prev;
    //tail->next = NULL;
    //delete temp;
  }
  return removed;
}
int LinkedList::removeHead()
{
  int removed = NULL;
  if (isEmpty())
  {
    remove();
  }
  else if (head == tail)
  {
    remove();
  }
  else
  {
    node *temp = new node;
    temp = head;
    head = head->next;
    removed = temp->number;
    delete temp;
    //node *temp = head;
    //head = head->next;
    //removed = temp->number;
    ////delete temp;
  }
  return removed;
}
int LinkedList::peek()
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
int LinkedList::peekHead()
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
void LinkedList::showList()
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
int LinkedList::getLength()
{
  int length = 0;
  if (!isEmpty())
  {
    node *current = head;
    while (current != NULL)
    {
      //cout << current->number << endl;
      current = current->next;
      length++;
    }
  }
  cout << "List Length: ";
  cout << length << endl;
  return length;
}




int main()
{
  LinkedList list; // add=tail, remove=tail, peek=tail.value (see Stack)
  LinkedList queue; //add=tail, remove=head, peek=head.value

  char choice;
  int number;

  do {
    choice = menu();
    switch (choice)
    {
      case '1':
        cout << "Enter a number to insert: ";
        cin >> number;
        list.insert(number);
        queue.insert(number);
        break;
      case '2':
        cout << "List Removed: ";
        cout << list.remove() << endl;
        cout << "Queue Removed: ";
        cout << queue.removeHead() << endl;
        break;
      case '3':
        cout << "Next value for List: ";
        cout << list.peek() << endl;
        cout << "Next value for Queue: ";
        cout << queue.peekHead() << endl;
        break;
      case '7':
        cout << "List Count: ";
        list.getLength();
        cout << "Queue Count: ";
        queue.getLength();
        break;
      case '8':
        cout << "List: ";
        list.showList();
        cout << "Queue: ";
        queue.showList();
        break;
      default:
        cout << "Exiting!\n\n\n";
        break;
    }

  } while (choice != '9');

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

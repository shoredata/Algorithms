// LinkedList.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
using namespace std;

struct node {
  int number;
  node *next;
};

bool isEmpty(node *head);
char menu();
void insertAsFirst(node *&head, node *&tail, int number); //by ref because we will be chaning them
void insert(node *&head, node *&tail, int number);
void remove(node *&head, node *&tail);
void showList(node *head);


bool isEmpty(node *head)
{
  if (head == NULL)
    return true;
  else
    return false;
}
char menu()
{
  char choice;

  cout << "Menu\n";
  cout << "1. Add Item\n";
  cout << "2. Remove Item\n";
  cout << "3. Show List\n";
  cout << "4. Exit\n";

  cin >> choice;
  return choice;
}
void insertAsFirst(node *&head, node *&tail, int number)
{
  node *temp = new node;
  temp->number = number;
  temp->next = NULL;
  head = temp;
  tail = temp;
}
void insert(node *&head, node *&tail, int number)
{
  if (isEmpty(head))
  {
    insertAsFirst(head, tail, number);
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
void remove(node *&head, node *&tail) 
{
  if (isEmpty(head))
    cout << "The list is empty\n";
  else if (head == tail)
  {
    delete(head);
    head = NULL;
    tail = NULL;
  }
  else
  {
    node *temp = head;
    head = head->next;
    delete temp ;
  }


}
void showList(node *current) 
{
  if (isEmpty(current))
    cout << "The list is empty\n";
  else
  {
    cout << "The list contains: \n";
    while (current != NULL)
    {
      cout << current->number << endl;
      current = current->next;
    }
  }

}




int main()
{
  node *head = NULL;
  node *tail = NULL;
  char choice;
  int number;

  do {
    choice = menu();
    switch (choice)
    {
      case '1':
        cout << "Please enter a number:";
        cin >> number;
        insert(head, tail, number);
        break;
      case '2':
        remove(head, tail);
        break;
      case '3':
        showList(head);
        break;
      default:
        cout << "System Exit\n";
    }

  } while (choice != '4');

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

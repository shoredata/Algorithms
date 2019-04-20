#include "pch.h"
#include <iostream>
#include <string> //to_string
#include <list> //list

using namespace std;

struct node {
  int number;
  node *next;
};
struct statistics {
  int min = NULL;
  int max = NULL;
  int sum = NULL;
  float avg = NULL;
  int count = NULL;
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

  void push(int number); //head, for stack
  void prepend(int number); //to head
  void append(int number); //at end
  void enqueue(int number); //to tail, queue

  int removeHead(); //remove head for queue
  int removeTail(); //at end, like array
  int pop(); //from head, for stack
  int dequeue(); //from head, for queue

  int peekTail(); //show tail number, like array
  int peekHead(); //show head number for queue

  node* deleteValue(int number); //remove all nodes of value number
  bool contains(int number); //true if number is a value in the list
  statistics* getStatistics(bool boolhide); //calculate all stats values for list
  void minToFront(); //remove all of min, put min at head
  void maxToTail(); //remove all of max, put max at tail

  void showList();
};
bool LinkedList::isEmpty()
{
  if (head == NULL)
    return true;
  else
    return false;
}
void LinkedList::prepend(int number)
{
  node *temp = new node;
  temp->number = number;
  temp->next = NULL;

  // If there is no tail yet let's make new node a tail.
  if (tail == NULL) {
    tail = temp;
  }

  temp->next = head;
  head = temp;
}
void LinkedList::push(int number)
{
  prepend(number);
}
void LinkedList::append(int number)
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
void LinkedList::enqueue(int number)
{
  append(number);
}

node* LinkedList::deleteValue(int number)
{
  node *deleted = new node;
  deleted = NULL;
  if (isEmpty()) {
    return deleted;
  }
  while (head != NULL && head->number == number) {
    deleted = head;
    head = head->next;
  }
  node *current = head;
  if (current != NULL) {
    while (current->next != NULL) {
      if (current->next->number == number) {
        deleted = current->next;
        current->next = current->next->next;
      }
      else {
        current = current->next;
      }
    }
  }
  if (tail->number == number) {
    tail = current;
  }
  return deleted;
}
int LinkedList::removeTail()
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
    node *current = head;
    node *previous = new node;
    while (current->next != NULL)
    {
      previous = current;
      current = current->next;
    }
    tail = previous;
    previous->next = NULL;
    removed = current->number;
    delete current;
  }
  return removed;
}
int LinkedList::removeHead()
{
  int removed = NULL;
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
    node *temp = head;
    head = head->next;
    removed = temp->number;
    delete temp;
  }
  return removed;
}
int LinkedList::pop()
{
  return removeHead();
}
int LinkedList::dequeue()
{
  return removeHead();
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
void LinkedList::minToFront() {
  if (!isEmpty())
  {
    statistics *stats = getStatistics(true);
    deleteValue(stats->min);
    prepend(stats->min);
  }
}
void LinkedList::maxToTail() {
  if (!isEmpty())
  {
    statistics *stats = getStatistics(true);
    deleteValue(stats->max);
    append(stats->max);
  }
}
statistics* LinkedList::getStatistics(bool boolhide)
{
  statistics *calc = new statistics;
  if (!isEmpty())
  {
    calc->count = 0;
    calc->min = head->number;
    calc->max = head->number;
    calc->sum = 0;
    calc->avg = 0;

    node *current = head;
    while (current != NULL)
    {
      calc->count++;
      if (calc->min > current->number) {
        calc->min = current->number;
      }
      if (calc->max < current->number) {
        calc->max = current->number;
      }
      calc->sum += current->number;
      calc->avg = (calc->sum / calc->count);

      current = current->next;
    }
    if (!boolhide)
    {
      cout << " Count: " + to_string(calc->count) << endl;
      cout << " Sum  : " + to_string(calc->sum) << endl;
      cout << " Min  : " + to_string(calc->min) << endl;
      cout << " Max  : " + to_string(calc->max) << endl;
      cout << " Avg  : " + to_string(calc->avg) << endl;
    }
  }
  else
  {
    calc = NULL;
  }
  return calc;
}
bool LinkedList::contains(int number)
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

class Queue
{
public:
  Queue(); //constructor

  void enqueue(int number); //add item to queue
  int dequeue();            //remove next item from queue
  int peek();               //return value of next item
};



class HashTable
{
  int BUCKET;
  list<int> *table;

public:
  HashTable(int V);  // Constructor 

  // inserts a key into hash table 
  void insertItem(int x);

  // deletes a key from hash table 
  void deleteItem(int key);

  // hash function to map values to key 
  int hashFunction(int x) {
    return (x % BUCKET);
  }

  void displayHash();

};
HashTable::HashTable(int b)
{
  this->BUCKET = b;
  table = new list<int>[BUCKET];
}
void HashTable::insertItem(int key)
{
  int index = hashFunction(key);
  table[index].push_back(key);
}
void HashTable::deleteItem(int key)
{
  // get the hash index of key 
  int index = hashFunction(key);

  // find the key in (inex)th list 
  list <int> ::iterator i;
  for (i = table[index].begin();
    i != table[index].end(); i++) {
    if (*i == key)
      break;
  }

  // if key is found in hash table, remove it 
  if (i != table[index].end())
    table[index].erase(i);
}
void HashTable::displayHash() {
  for (int i = 0; i < BUCKET; i++) {
    cout << i;
    for (auto x : table[i])
      cout << " --> " << x;
    cout << endl;
  }
}


//function prototypes
int menu();
void DoHashTable();

int menu()
{
  int choice;

  cout << "Menu\n";
  cout << "1. Add Item\n";
  cout << "2. Remove\n";
  cout << "3. Peek\n";
  cout << "4. Test if Contains #\n";
  cout << "5. Delete All #\n";

  cout << "7. Calculate Statistics\n";
  cout << "8. Show List\n";
  cout << "9. Min to Front\n";
  cout << "10. Max to Tail\n";

  cout << "11. Do Hash Table\n";

  cout << "99. Exit\n";

  cin >> choice;
  return choice;
}





int main()
{
  LinkedList list; // add=tail, remove=tail, peek=tail.value (see Stack)
  LinkedList queue; //add=tail, remove=head, peek=head.value
  LinkedList stack; //add=head, remove=head, peek=head.value

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
        queue.enqueue(number);
        stack.push(number);
        break;
      case 2:
        cout << "List Removed: ";
        cout << list.removeTail() << endl;
        cout << "Queue Removed: ";
        cout << queue.dequeue() << endl;
        cout << "Stack Removed: ";
        cout << stack.pop() << endl;
        break;
      case 3:
        cout << "Next value for List: ";
        cout << list.peekTail() << endl;
        cout << "Next value for Queue: ";
        cout << queue.peekHead() << endl;
        cout << "Next value for Stack: ";
        cout << stack.peekHead() << endl;
        break;

      case 4:
        cout << "Enter a number to find (not stack): ";
        cin >> number;
        cout << "List " << list.contains(number) << endl;
        cout << "Queue " << queue.contains(number) << endl;
        break;
      case 5:
        cout << "Enter a number to delete (not stack): ";
        cin >> number;
        list.deleteValue(number);
        queue.deleteValue(number);
        break;


      case 7:
        cout << "List: ";
        list.getStatistics(false);
        cout << "Queue: ";
        queue.getStatistics(false);
        cout << "Not Stack ";
        break;
      case 8:
        cout << "List: ";
        list.showList();
        cout << "Queue: ";
        queue.showList();
        cout << "Stack: ";
        stack.showList();
        break;

      case 9:
        cout << "minToFront() " << endl;
        list.minToFront();
        queue.minToFront();
        cout << "Not Stack ";
        break;
      case 10:
        cout << "maxToTail() " << endl;
        list.maxToTail();
        queue.maxToTail();
        cout << "Not Stack ";
        break;

      case 11:
        cout << "Hash Table:" << endl;
        DoHashTable();
        break;


      default:
        cout << "Exiting!\n\n\n";
        break;
    }

  } while (choice != 99);

  return 0;
}

void DoHashTable() {
  // array that contains keys to be mapped 
  int a[] = { 15, 11, 27, 8, 12 };
  int n = sizeof(a) / sizeof(a[0]);

  // insert the keys into the hash table 
  HashTable ht(7);   // 7 is count of buckets in hash table 
  for (int i = 0; i < n; i++)
  {
    ht.insertItem(a[i]);
  }

  cout << " 1. Created Hash Table:" << endl;
  ht.displayHash();

  // delete 12 from hash table 
  ht.deleteItem(12);
  cout << " 2. Deleted 12:" << endl;
  ht.displayHash();

  // delete 15 from hash table 
  ht.deleteItem(15);
  cout << " 3. Deleted 15:" << endl;
  ht.displayHash();




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

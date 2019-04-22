#include "pch.h"
#include "node.h"
#include <iostream>
#include <string>

using namespace std;

Node::Node()
{
}

Node::~Node()
{
}


//string Node::toString()
//{
//  string sReturn = "Node: {";
//  if (value)
//  {
//    sReturn += " Value:" + to_string(value) + ", ";
//  }
//  else
//  {
//    sReturn += " Value:NULL, ";
//  }
//
//  if (next)
//  {
//    sReturn += " Next:" + next->toString() + ", ";
//  }
//  else
//  {
//    sReturn += " Next:NULL, ";
//  }
//  if (prev)
//  {
//    sReturn += " Prev:" + prev->toString() + " ";
//  }
//  else
//  {
//    sReturn += " Prev:NULL ";
//  }
//  sReturn += " }";
//  return sReturn;
//}
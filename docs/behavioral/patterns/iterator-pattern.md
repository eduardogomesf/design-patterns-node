# **Iterator Pattern**

**Iterator** is a behavioral design pattern that lets you traverse (go through) elements of a collection without exposing its underlying representation/data structure (list, stack, tree, etc.).

Collections are one of the most used data types in programming. Nonetheless, a collection is just a container for a group of objects.

Most collections store their elements in simple lists. However, some of them are based on stacks, trees, graphs and other complex data structures.

But no matter how a collection is structured, it must provide some way of accessing its elements so that other code can use these elements. There should be a way to go through each element of the collection without accessing the same elements over and over.

The main idea of the Iterator pattern is to extract the traversal behavior (data structure specific details) of a collection into a separate object called an iterator.

## Roles
Iterator -> interface declares the all operations required for traversing a collection <br/>
Concrete Iterator -> implement specific algorithms for traversing a collection <br/>
Iterator Collection -> interface declares one or multiple methods for getting iterators compatible with the collection
Concrete Collection -> return new instances of a particular concrete iterator class each time the client requests one.

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/iterator) <br/>
[Youtube](https://www.youtube.com/watch?v=7ndeSYdmOdE) <br/>

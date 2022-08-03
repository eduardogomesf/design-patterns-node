# **Factory Method Pattern**

The factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

This pattern suggests that you replace the object construction calls (using the new operator) with calls to a special function/method that will be responsible for creating the objects, often referred to as products.

A factory method can use its parameters to decide which **concrete product** should be created.

## Roles
Creator -> Interface of the factory method <br/>
Concrete Creator -> Real implementation of the factory method <br/>
Product -> Interface of the object that will be returned from the factory <br/>
Concrete Product -> Real implementation of the Product interface (you can have many real implementations)

Note: Interfaces can be replaced by abstract classes.

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/factory-method) <br/>
[Youtube](https://www.youtube.com/watch?v=1rB0PhvAwiU) <br/>

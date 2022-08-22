# **Strategy Pattern**

**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## Roles
Context -> maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
Strategy -> interface that is common to all concrete strategies. It declares a method the context uses to execute a strategy.
Concrete Strategy -> implements different variations of an algorithm the context uses.

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/strategy) <br/>
[Youtube](https://www.youtube.com/watch?v=mUagTgSnriQ) <br/>

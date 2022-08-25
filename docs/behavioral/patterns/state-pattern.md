# **State Pattern**

**State** is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

Closely related to the concept of a Finite-State Machine

The idea is that a program can have a finite number of unique states. In each state the program behaves differently and it can only switch to other certain state following the switching rules, aka transitions.

This structure may look similar to the Strategy pattern, but there’s one key difference. In the State pattern, the particular states may be aware of each other and initiate transitions from one state to another, whereas strategies almost never know about each other.

## Roles
Context -> stores a reference to one of the concrete state objects and delegates to it all state-specific work
State -> Interface that declares the state-specific methods.
Concrete State -> Provide their own implementations for the state-specific methods.

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/state) <br/>
[Youtube](https://www.youtube.com/watch?v=tSTPS2oHDmw) <br/>

# **Facade Pattern**

**Facade** is a structural design pattern that provides an interface to simplify the usage of dependencies by the client code.

## Roles
Facade -> provides convenient access to a particular part of the subsystem’s functionality. It knows where to direct the client’s request and how to operate all the moving parts.
Subsystems -> consists of dozens of various objects.
Another Facade -> Class that can be created to prevent polluting a single facade with unrelated features that might make it yet another complex structure. Additional facades can be used by both clients and other facades.

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/facade) <br/>
[Youtube](https://www.youtube.com/watch?v=A7mNiaBACYs) <br/>

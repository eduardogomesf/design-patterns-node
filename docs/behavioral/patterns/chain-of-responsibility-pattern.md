# **Chain of Responsibility Pattern**

**Chain of Responsibility** is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain

It is used when a request needs to be sequentially operated on until it is fully completed. Any handler is capable of handling the request and ending the chain if it's necessary.

## Roles
Handler -> declares the interface, common for all concrete handlers.
Base Handler -> is an optional class where you can put the boilerplate code that’s common to all handler classes
Concrete Handlers -> contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/chain-of-responsibility) <br/>
[Youtube](https://www.youtube.com/watch?v=AdzLq9FVTXs) <br/>

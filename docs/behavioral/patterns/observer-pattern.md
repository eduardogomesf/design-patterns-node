# **Observer Pattern**

**Observer** is a behavioral design pattern that lets you define a subscription mechanism to notify
multiple objects, aka subscribers, about any events that happen to the object they’re observing.

This pattern is also known as Event-Subscriber or Listener

## Roles
Publisher -> Emits events of interest to subscribers (other objects) <br/>
Subscriber -> Interface that will be implemented by the concrete subscribers (real objects) <br/>
Concrete Subscribers -> Real objects that are observing the publisher in order to perform some action after being notified <br/>

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/observer) <br/>
[Youtube](https://www.youtube.com/watch?v=2VwLvwsIu-8) <br/>

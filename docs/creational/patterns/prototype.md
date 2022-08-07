# **Prototype Pattern**

The **prototype** is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single clone method.

## Prototype
Prototype -> Interface that declares the clones methods. In most cases, it’s a single clone method <br/>
Concrete Prototype -> Implementation of the Prototype interface <br/>
Prototype Registry -> Class that provides an easy way to access frequently-used prototypes. It stores a set of pre-built objects that are ready to be copied (Optional)


## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/prototype) <br/>
[Youtube](https://www.youtube.com/watch?v=Z-_smcjkdwM) <br/>

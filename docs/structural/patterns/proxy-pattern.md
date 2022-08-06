# **Proxy pattern**

**Proxy** is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

It is often used for access control, logging, caching, lazy instantiation, lazy evaluation, etc.

## Variations of Proxy
Virtual Proxy -> Controls access to resources that are expensive be created or used
Remote Proxy -> Controls access to resources in remote servers
Protection Proxy -> Controls access to resources that requires authentication or permission
Smart Proxy -> In addition to controlling the real requested object, this proxy is capable of performing additional tasks

## Roles
Service Interface -> Interface of the service which will be implemented by the Proxy <br />
Proxy -> Class that will be implemented as proxy to manage the access to the requested service
Service -> Real implementation of the requested service with useful business logic

## Refs
[Refactoring Guru](https://refactoring.guru/design-patterns/proxy) <br/>
[Youtube](https://www.youtube.com/watch?v=EsxPyICeBPs) <br/>

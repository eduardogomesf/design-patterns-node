import { ConcreteUserService } from './concrete/user-service'
import { UserServiceProxy } from './concrete/user-service-proxy'
import assert from 'assert'

const userService = new ConcreteUserService()
const userServiceProxy = new UserServiceProxy(userService)

const user = userServiceProxy.getByEmail('eduardo@mail.com')

// Logs
console.log('-'.repeat(100))
console.log('user: ', user)
console.log('-'.repeat(100))

// Tests
assert.equal(user.email, 'eduardo@mail.com')

import assert from 'assert'
import { UserRepository } from './concrete/user-repository-singleton'

const userRepository1 = UserRepository.getInstance()
const userRepository2 = UserRepository.getInstance()

const usersFromRepository1 = userRepository1.getUsers()
const usersFromRepository2 = userRepository2.getUsers()

// Logs
console.log('Users from repository one: ', usersFromRepository1)
console.log('Users from repository two: ', usersFromRepository2)

// Tests
assert.deepEqual(usersFromRepository1, usersFromRepository2)

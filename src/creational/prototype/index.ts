/* eslint-disable no-proto */
import assert from 'assert'
import { Developer } from './concrete/developer-prototype'

const developer = new Developer('Eduardo', '21', 'node')
const otherDeveloper = developer.clone()

// Logs
console.log('-'.repeat(100))
console.log('Original developer: ')
console.log(developer)
console.log('name: ', developer.name)
console.log('age: ', developer.age)
console.log('Other developer: ')
console.log(otherDeveloper)
console.log('name: ', otherDeveloper.name)
console.log('age: ', otherDeveloper.age)
console.log('-'.repeat(100))

// Tests
// @ts-ignore
assert.deepEqual(developer, otherDeveloper.__proto__)

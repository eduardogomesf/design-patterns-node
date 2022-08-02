import assert from 'assert'
import { DeveloperFactory } from './concrete/developer-factory'
import { TesterFactory } from './concrete/tester-factory'
import { ArchitectFactory } from './concrete/architect-factory'

const architectFactory = new ArchitectFactory()
const developerFactory = new DeveloperFactory()
const testerFactory = new TesterFactory()

const developer = developerFactory.create('Eduardo', '21', 3000)
const tester = testerFactory.create('Lucas', '25', 6000)
const architect = architectFactory.create('João', '33', 11500)

const developerInfo = developer.getInfo()
const testerInfo = tester.getInfo()
const architectInfo = architect.getInfo()

// Logs
console.log('-'.repeat(100))
console.log(developerInfo)
console.log(testerInfo)
console.log(architectInfo)
console.log('-'.repeat(100))

// Tests
assert.equal(developerInfo, 'My name is Eduardo, I\'m a 21-year-old Developer. My currently monthly wage is 3000')
assert.equal(testerInfo, 'My name is Lucas, I\'m a 25-year-old Tester. My currently monthly wage is 6000')
assert.equal(architectInfo, 'My name is João, I\'m a 33-year-old Architect. My currently monthly wage is 11500')

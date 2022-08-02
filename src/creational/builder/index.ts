import assert from 'assert'
import { DeveloperBuilder } from './concrete/developer-builder'

const developerBuilder = new DeveloperBuilder()

const firstDeveloperBirthdate = new Date()
const secondDeveloperBirthdate = new Date()

const developerWithPersonalInfoAndProfession = developerBuilder
  .reset()
  .addPersonalInfo('Eduardo', firstDeveloperBirthdate, 'male')
  .addProfession('backend developer')
  .getResult()

const developerWithPersonalInfoAndProfessionAndSkills = developerBuilder
  .reset()
  .addPersonalInfo('Maria', secondDeveloperBirthdate, 'female')
  .addProfession('frontend developer')
  .addSkills(['reactjs', 'typescript'])
  .getResult()

// Logs
console.log('-'.repeat(100))
console.log('Developer with personal info and profession: ', developerWithPersonalInfoAndProfession)
console.log('Deveoper with personal info, profession and skills: ', developerWithPersonalInfoAndProfessionAndSkills)
console.log('-'.repeat(100))

// Tests
assert.deepEqual(developerWithPersonalInfoAndProfession, {
  personalInfo: {
    birthDate: firstDeveloperBirthdate,
    gender: 'male',
    name: 'Eduardo'
  },
  profession: 'backend developer'
})

assert.deepEqual(developerWithPersonalInfoAndProfessionAndSkills, {
  personalInfo: {
    birthDate: secondDeveloperBirthdate,
    gender: 'female',
    name: 'Maria'
  },
  profession: 'frontend developer',
  skills: ['reactjs', 'typescript']
})

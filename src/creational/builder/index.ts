import { DeveloperBuilder } from './concrete/developer-builder'

(() => {
  const developerBuilder = new DeveloperBuilder()

  const developerWithPersonalInfoAndProfession = developerBuilder.reset().addPersonalInfo('Eduardo', new Date(), 'male').addProfession('backend developer').getResult()

  console.log('developerWithPersonalInfoAndProfession', developerWithPersonalInfoAndProfession)

  const developerWithPersonalInfoAndProfessionAndSkills = developerBuilder
    .reset().addPersonalInfo('Maria', new Date(), 'female').addProfession('frontend developer').addSkills(['reactjs', 'typescript']).getResult()

  console.log('developerWithPersonalInfoAndProfessionAndSkills', developerWithPersonalInfoAndProfessionAndSkills)
})()

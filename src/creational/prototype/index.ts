import { Developer } from './concrete/developer-prototype'

(() => {
  const developer = new Developer('Eduardo', '21', 'node')
  const otherDeveloper = developer.clone()

  console.log('Original developer: ')
  console.log(developer)
  console.log('name: ', developer.name)
  console.log('age: ', developer.age)
  console.log('Other developer: ')
  console.log(otherDeveloper)
  console.log('name: ', otherDeveloper.name)
  console.log('age: ', otherDeveloper.age)
})()

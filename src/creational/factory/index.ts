import { DefaultEmployeeFactory } from './concrete/employee-factory'

(() => {
  const employeeFactory = new DefaultEmployeeFactory()

  const developer = employeeFactory.create('developer', 'Eduardo', '21', 3000)
  const tester = employeeFactory.create('tester', 'Lucas', '25', 6000)
  const architect = employeeFactory.create('architect', 'João', '33', 11500)

  console.log(developer.getInfo())
  console.log(tester.getInfo())
  console.log(architect.getInfo())
})()

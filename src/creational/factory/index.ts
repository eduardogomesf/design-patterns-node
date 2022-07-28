import { DeveloperFactory } from './concrete/developer-factory'
import { TesterFactory } from './concrete/tester-factory'
import { ArchitectFactory } from './concrete/architect-factory'

(() => {
  const architectFactory = new ArchitectFactory()
  const developerFactory = new DeveloperFactory()
  const testerFactory = new TesterFactory()

  const developer = developerFactory.create('Eduardo', '21', 3000)
  const tester = testerFactory.create('Lucas', '25', 6000)
  const architect = architectFactory.create('João', '33', 11500)

  console.log(developer.getInfo())
  console.log(tester.getInfo())
  console.log(architect.getInfo())
})()

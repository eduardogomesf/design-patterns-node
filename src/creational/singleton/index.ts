import { UserRepository } from './concrete/user-repository-singleton'

(() => {
  const userRepository1 = UserRepository.getInstance()
  const userRepository2 = UserRepository.getInstance()
  const userRepository3 = UserRepository.getInstance()

  console.log(userRepository1.getUsers())
  console.log(userRepository2.getUsers())
  console.log(userRepository3.getUsers())
})()

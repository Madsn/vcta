package user

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(val repository:UserRepository) {

	@GetMapping("/users")
	fun findAll() = repository.findAll()

	@GetMapping("/users/{name}")
	fun findByName(@PathVariable name:String)
			= repository.findByName(name)
}
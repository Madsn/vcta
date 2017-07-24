package team

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class TeamController(val repository:TeamRepository) {

	@GetMapping("/teams")
	fun findAll() = repository.findAll()

	@GetMapping("/teams/{name}")
	fun findByName(@PathVariable name:String)
			= repository.findByName(name)
}
package user

import org.springframework.data.repository.CrudRepository

interface UserRepository : CrudRepository<User, Long> {

	fun findByName(name: String): Iterable<User>
}

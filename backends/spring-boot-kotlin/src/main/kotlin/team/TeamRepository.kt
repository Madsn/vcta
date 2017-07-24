package team

import org.springframework.data.repository.CrudRepository

interface TeamRepository : CrudRepository<Team, Long> {

	fun findByName(name: String): Iterable<Team>
}

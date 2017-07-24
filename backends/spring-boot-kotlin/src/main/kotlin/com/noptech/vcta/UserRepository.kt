package com.noptech.vcta

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : CrudRepository<User, Long> {

  fun findByName(name: String): Iterable<User>
}
package team

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Team(
		val name: String,
		val captain: User,
		@Id @GeneratedValue(strategy = GenerationType.AUTO)
		val id: Long = -1) {

	override fun toString(): String {
		return "Team(id=$id, name='$name', captain='$captain')"
	}
}

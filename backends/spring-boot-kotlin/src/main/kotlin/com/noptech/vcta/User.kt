package com.noptech.vcta

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class User(
    val name: String,
    val email: String,
    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    val id: Long=-1) {

    override fun toString(): String {
        return "User(id=$id, name=$name, email=$email)"
    }

}

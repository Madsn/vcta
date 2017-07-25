package com.noptech.vcta

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(val userRepo: UserRepository) {

    @GetMapping("/users")
    fun get() = userRepo.findAll()

    @GetMapping("/user")
    fun findById() = userRepo.findById(1)
}
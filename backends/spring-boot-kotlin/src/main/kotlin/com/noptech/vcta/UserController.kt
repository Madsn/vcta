package com.noptech.vcta

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController {

    @GetMapping("/")
    fun get() = "Hello world"
}
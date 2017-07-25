package com.noptech.vcta

import org.springframework.boot.autoconfigure.web.servlet.error.ErrorController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

const val ERROR_PATH: String = "/error"

@RestController
class IndexController : ErrorController {

    @GetMapping("/")
    fun getRoot() = "Hello world"

    @RequestMapping(value = ERROR_PATH)
    fun error(): String = "Oops"

    override fun getErrorPath(): String {
        return ERROR_PATH
    }
}

package com.noptech.vcta

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.validation.BindingResult
import org.springframework.validation.Errors
import org.springframework.web.servlet.ModelAndView
import org.springframework.web.context.request.WebRequest
import javax.validation.Valid
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestMapping



@RestController
class UserController(val userRepo: UserRepository) {

    @GetMapping("/users")
    fun get() = userRepo.findAll()

    @GetMapping("/user")
    fun findById() = userRepo.findById(1)

    @RequestMapping(value = "/user/registration", method = arrayOf(RequestMethod.POST))
    fun registerUserAccount(
            @ModelAttribute("user") @Valid accountDto: UserDto,
            result: BindingResult,
            request: WebRequest,
            errors: Errors): String {
        // TODO

        var registered: User? = null
        if (!result.hasErrors()) {
            registered = createUserAccount(accountDto, result)
        }
        if (result.hasErrors()) {
            return "Error"
        } else {
            return "Success"
        }
    }

    private fun createUserAccount(accountDto: UserDto, result: BindingResult): User? {
        // TODO
        var registered: User? = null
        registered = registerNewUserAccount(accountDto)

        return registered
    }

    private fun registerNewUserAccount(accountDto: UserDto): User? {
        // TODO
        return null
    }
}

class UserDto {
    // TODO
}


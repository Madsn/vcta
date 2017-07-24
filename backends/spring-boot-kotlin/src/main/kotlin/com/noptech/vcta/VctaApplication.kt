package com.noptech.vcta

import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class VctaApplication {

    private val  log = LoggerFactory.getLogger(VctaApplication::class.java)

    @Bean
    fun init(userRepo: UserRepository) = CommandLineRunner {

        userRepo.save(User("Name1", "email1@example.com"))
        userRepo.save(User("Name2", "email2@example.com"))
        log.info("Users found with findAll():")
        for (user in userRepo.findAll()) {
            log.info(user.toString())
        }
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(VctaApplication::class.java, *args)
}

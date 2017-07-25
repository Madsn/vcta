package com.noptech.vcta

import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.SecurityProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository
import org.springframework.security.web.util.matcher.AntPathRequestMatcher

@SpringBootApplication
class VctaApplication {

    private val log = LoggerFactory.getLogger(VctaApplication::class.java)

    @Bean
    fun init(userRepo: UserRepository) = CommandLineRunner {

        userRepo.save(User("Name1", "email1@example.com"))
        userRepo.save(User("Name2", "email2@example.com"))
        log.info("Users found with findAll():")
        for (user in userRepo.findAll()) {
            log.info(user.toString())
        }
    }

    @Configuration
    @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
    class SecurityConfiguration: WebSecurityConfigurerAdapter() {
        @Throws(Exception::class)
        override fun configure(http: HttpSecurity) {
            http
                    .httpBasic()
                    .and()
                    .authorizeRequests()
                    .antMatchers("/").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .csrf()
                    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                    .and()
                    .logout().permitAll()
                    // TODO: Remove below line - use POST requests to logout
                    .logoutRequestMatcher(AntPathRequestMatcher("/logout"))
                    .logoutSuccessUrl("/login?logout")
        }
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(VctaApplication::class.java, *args)
}

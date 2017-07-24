package hello

import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class Application {

	private val log = LoggerFactory.getLogger(Application::class.java)

    @Bean
    fun init(customerRepo: CustomerRepository, userRepo: UserRepository, teamRepo: TeamRepository)
            = CommandLineRunner {
        // save a couple of customers
        customerRepo.save(Customer("Jack", "Bauer"))
        customerRepo.save(Customer("Chloe", "O'Brian"))
        customerRepo.save(Customer("Kim", "Bauer"))
        customerRepo.save(Customer("David", "Palmer"))
        customerRepo.save(Customer("Michelle", "Dessler"))
        val mik: User = userRepo.save(User("Mikkel", "mail@example.com"))
        userRepo.save(User("Test", "test@example.com"))
        userRepo.save(User("Test3", "test2@example.com"))
        userRepo.save(User("Test3", "test2@example.com"))
        teamRepo.save(Team("Test team", mik))

        // fetch all customers
        log.info("Customers found with findAll():")
        log.info("-------------------------------")
        for (customer in customerRepo.findAll()) {
            log.info(customer.toString())
        }
        log.info("")

        // fetch an individual customer by ID
        val customer = customerRepo.findOne(1L)
        log.info("Customer found with findOne(1L):")
        log.info("--------------------------------")
        log.info(customer.toString())
        log.info("")

        // fetch customers by last name
        log.info("Customer found with findByLastName('Bauer'):")
        log.info("--------------------------------------------")
        for (bauer in customerRepo.findByLastName("Bauer")) {
            log.info(bauer.toString())
        }
        log.info("")
    }

}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}

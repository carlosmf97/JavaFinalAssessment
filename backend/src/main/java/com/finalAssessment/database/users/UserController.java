package com.finalAssessment.database.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private static UserRepository repository;
	
	public UserController(UserRepository repository){
		this.repository = repository;
	}
	
	@GetMapping("/users")
	private List<User> getAllUsers_fromDatabase() {
		return repository.findAll();
	}
	
	@PostMapping("/users")
	private void addNewUser(@RequestBody User newUser) {
		repository.save(newUser);
	}
	
	@PutMapping("/users/{id}/{variable}")
	private void setNewVariable(@PathVariable String variable) {
		
	}
	
}

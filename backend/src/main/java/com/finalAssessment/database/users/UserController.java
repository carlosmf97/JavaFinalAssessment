package com.finalAssessment.database.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	
	@GetMapping("/users/{id}")
	private User getUser_byId(@PathVariable String id) {
		Optional<User> getUser = repository.findById(Integer.parseInt(id));
		if(getUser != null) {
			return getUser.get();
		}
		return null;
	}
	
	@PostMapping("/users")
	private void addNewUser(@RequestBody User newUser) {
		repository.save(newUser);
	}
	
	@PutMapping("/users/{id}")
	private void setNewVariable(@RequestBody User user, @PathVariable String id) {
		Optional<User> getUser = repository.findById(Integer.parseInt(id));
		if(getUser != null) {
			getUser.get().setUsername(user.getUsername());
			getUser.get().setLastname(user.getLastname());
			getUser.get().setEmail(user.getEmail());
			getUser.get().setPhone(user.getPhone());
			repository.save(getUser.get());
		}
	}
	
	@DeleteMapping("/users/{id}/delete")
	private void deleteUser(@PathVariable String id) {
		Optional<User> getUser = repository.findById(Integer.parseInt(id));
		if(getUser != null) {
			repository.delete(getUser.get());
		}
	}
	
	
}

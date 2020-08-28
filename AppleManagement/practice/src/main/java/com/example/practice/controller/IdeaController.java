package com.example.practice.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.practice.model.Idea;
import com.example.practice.service.IdeaService;

@RestController
public class IdeaController {
	@Autowired
	IdeaService service;
	
	@GetMapping("/ideas")
	private  ResponseEntity<List<Idea>> getAllIdeas(){
		List<Idea> ideas = service.getAllIdeas();
		 return new ResponseEntity<List<Idea>>(ideas, HttpStatus.OK);
	}
	
	@GetMapping("/ideas/{id}")
	private Optional<Idea> getItemById(@PathVariable int id) {
		return service.getIdeaById(id);
	}
	
	@DeleteMapping("/ideas/{id}")
	private ResponseEntity<String> deleteIdea(@PathVariable("id") int id) {
		service.deleteIdea(id);
		return ResponseEntity.ok("deleted");
	}
	
	@PostMapping("/addideas") 
	private  ResponseEntity<Idea> addIdea(@RequestBody Idea idea) {
		  service.addidea(idea); 
		  return new ResponseEntity<Idea>(idea, HttpStatus.CREATED); 
		  
	}
	
	@PutMapping("/ideas/{id}")
	public ResponseEntity<Idea> updateIdea(@PathVariable (value = "id") int id,
							@Valid @RequestBody Idea idea) {
		service.updateIdea(id, idea);
		return new ResponseEntity<Idea>(idea,HttpStatus.ACCEPTED);
	}

}

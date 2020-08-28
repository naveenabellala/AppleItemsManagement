package com.example.practice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.example.practice.model.Idea;
import com.example.practice.repo.IdeaRepo;

@Service
@Transactional
public class IdeaService {
	@Autowired
	IdeaRepo idearepo;
	
	
	public List<Idea> getAllIdeas(){
		return  idearepo.findAll();
		
	}
	
	public Optional<Idea> getIdeaById(int id) {
		return idearepo.findById(id);
	}
	
	public void deleteIdea(int id) {
		idearepo.deleteById(id);
	}
	
	public void addidea(Idea idea) {
		idearepo.save(idea);
	}
	
	public Optional<Object> updateIdea(int id, Idea idea){
		return idearepo.findById(id).map(i -> {
			i.setName(idea.getName());
			return idearepo.save(i);
		});
	}
}

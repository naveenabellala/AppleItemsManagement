package com.example.practice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.practice.model.Idea;



public interface IdeaRepo extends JpaRepository<Idea, Integer>{

}

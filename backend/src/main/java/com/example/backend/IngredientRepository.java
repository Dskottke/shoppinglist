package com.example.backend;

import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface IngredientRepository extends MongoRepository<Ingredient,String> {

    @Query(collation = "{ 'locale' : 'de', 'strength' : 2 }")
    Optional<Ingredient> findByName(String name);
}

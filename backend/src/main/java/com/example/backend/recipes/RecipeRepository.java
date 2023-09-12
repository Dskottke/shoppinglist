package com.example.backend.recipes;

import com.example.backend.recipes.models.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface RecipeRepository extends MongoRepository<Recipe,String> {

}

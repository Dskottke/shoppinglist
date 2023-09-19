package com.example.backend.recipes;

import com.example.backend.ingredients.RequiredIngredient;
import com.example.backend.recipes.models.AnalyzedInstruction;
import com.example.backend.recipes.models.Recipe;
import com.example.backend.recipes.models.Step;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final MongoTemplate mongoTemplate;
    private final ObjectMapper objectMapper;

    public List<Recipe> getRandomRecipes() throws JsonProcessingException {
        MongoCollection<Document> recipeCollection = mongoTemplate.getCollection("recipe");
        List<Document> pipeline = new ArrayList<>();
        pipeline.add(new Document("$sample", new Document("size", 10)));
        AggregateIterable<Document> results = recipeCollection.aggregate(pipeline);
        List<Recipe> randomRecipes = new ArrayList<>();
        for (Document document : results) {
            String randomRecipe = objectMapper.writeValueAsString(document).replace("_id", "id");
            Recipe recipe = objectMapper.readValue(randomRecipe, Recipe.class);
            randomRecipes.add(recipe);
        }
        return randomRecipes;
    }
}

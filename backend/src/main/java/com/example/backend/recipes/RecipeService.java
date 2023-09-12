package com.example.backend.recipes;

import com.example.backend.ingredients.Ingredient;
import com.example.backend.recipes.models.Recipe;
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

    public List<Recipe> getRandomRecipes() {
        MongoCollection<Document> recipeCollection = mongoTemplate.getCollection("recipe");
        List<Document> pipeline = new ArrayList<>();
        pipeline.add(new Document("$sample", new Document("size", 10)));
        AggregateIterable<Document> results = recipeCollection.aggregate(pipeline);
        List<Recipe> randomRecipes = new ArrayList<>();
        for (Document document : results) {
            Recipe recipe = convertDocumentToRecipe(document);
            randomRecipes.add(recipe);
        }
        return randomRecipes;
    }

    private Recipe convertDocumentToRecipe(Document document) {

        return Recipe.builder()
                .id(document.getString("_id"))
                .title(document.getString("title"))
                .image(document.getString("image"))
                .readyInMinutes(document.getInteger("readyInMinutes"))
                .extendedIngredients(document.getList("extendedIngredients", Document.class).stream()
                        .map(extendedIngredient -> Ingredient.builder()
                                .id(extendedIngredient.getString("id"))
                                .name(extendedIngredient.getString("name"))
                                .amount(extendedIngredient.getInteger("amount"))
                                .build())
                        .toList())
                .build();
    }

}

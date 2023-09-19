package com.example.backend.recipes;

import com.example.backend.recipes.models.Recipe;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @GetMapping("/random")
    public List<Recipe> getRandomRecipes() throws JsonProcessingException {
        return recipeService.getRandomRecipes();
    }
}

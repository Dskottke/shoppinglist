package com.example.backend.recipes;

import com.example.backend.recipes.models.RecipeCollection;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeApiService recipeApiService;

    @GetMapping("/random")
    public RecipeCollection getRandomRecipes() {
        return recipeApiService.getRandomRecipeCollection();
    }
}

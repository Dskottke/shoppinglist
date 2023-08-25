package com.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor
public class IngredientsController {
    private final IngredientService ingredientService;
    @PostMapping()
    public Ingredient addIngredient(@RequestBody IngredientWithoutId ingredientToAdd){
    return ingredientService.addIngredient(ingredientToAdd);
    }
}

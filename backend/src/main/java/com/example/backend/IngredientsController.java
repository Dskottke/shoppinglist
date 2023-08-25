package com.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor
public class IngredientsController {
    private final IngredientService ingredientService;

    @GetMapping()
    public List<Ingredient> getAllIngredients() {
            return ingredientService.getAllIngredients();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Ingredient addIngredient(@RequestBody IngredientWithoutId ingredientToAdd) {
        return ingredientService.addIngredient(ingredientToAdd);
    }
}

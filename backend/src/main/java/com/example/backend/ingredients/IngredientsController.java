package com.example.backend.ingredients;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PutMapping()
    public ResponseEntity<Ingredient> addIngredient(@RequestBody IngredientWithoutId ingredientToAdd) {
        return ingredientService.addIngredient(ingredientToAdd);
    }
    @DeleteMapping()
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteIngredients(@RequestBody List<String> ingredientsDone){
       ingredientService.deleteIngredients(ingredientsDone);
    }
}

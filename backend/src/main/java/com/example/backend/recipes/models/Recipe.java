package com.example.backend.recipes.models;

import com.example.backend.ingredients.Ingredient;
import lombok.Builder;
import lombok.With;

import java.util.List;

@Builder
@With
public record Recipe(String id, String title, List<Ingredient> extendedIngredients, String image, int readyInMinutes) {
}

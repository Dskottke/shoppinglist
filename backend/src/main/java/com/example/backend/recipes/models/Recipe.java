package com.example.backend.recipes.models;

import com.example.backend.ingredients.RequiredIngredient;
import lombok.Builder;
import lombok.With;

import java.util.List;

@Builder
@With
public record Recipe(String id, String title, List<RequiredIngredient> extendedIngredients, String image, int readyInMinutes) {
}

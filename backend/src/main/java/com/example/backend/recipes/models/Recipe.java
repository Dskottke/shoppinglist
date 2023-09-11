package com.example.backend.recipes.models;

import com.example.backend.ingredients.Ingredient;

import java.util.List;

public record Recipe(String title, List<Ingredient> extendedIngredients, String image, int readyInMinutes) {
}

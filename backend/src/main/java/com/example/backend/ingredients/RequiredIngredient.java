package com.example.backend.ingredients;

import lombok.Builder;

@Builder
public record RequiredIngredient(String name, int amount, String unit) {
}

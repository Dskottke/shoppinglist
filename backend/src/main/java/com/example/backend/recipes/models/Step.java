package com.example.backend.recipes.models;

import lombok.Builder;

@Builder
public record Step(String step, int number) {
}

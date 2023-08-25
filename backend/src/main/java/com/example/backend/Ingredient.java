package com.example.backend;

import lombok.Builder;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Document
public record Ingredient(String id, String name, int amount) {
}

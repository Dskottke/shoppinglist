package com.example.backend.recipes;

import com.example.backend.recipes.models.RecipeCollection;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Objects;

@Service
public class RecipeApiService {

    private final String token;
    private final WebClient webClient;

    public RecipeApiService(@Value("${recipe.api.key}") String key, @Value("${recipe.basic.url}") String basicUrl) {
        this.token = key;
        this.webClient = WebClient.create(basicUrl);
    }

    public RecipeCollection getRandomRecipeCollection() {
        return Objects.requireNonNull(webClient
                        .get()
                        .uri("/recipes/random?number=10&apiKey=" + token)
                        .retrieve()
                        .toEntity(RecipeCollection.class)
                        .block())
                .getBody();

    }
}

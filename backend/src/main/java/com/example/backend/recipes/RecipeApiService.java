package com.example.backend.recipes;

import com.example.backend.AppUtilsService;
import com.example.backend.recipes.models.Recipe;
import com.example.backend.recipes.models.RecipeCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Service
public class RecipeApiService {

    private final String token;
    private final WebClient webClient;
    private final RecipeRepository recipeRepository;
    private final AppUtilsService appUtilsService;
    private final Logger logger = LoggerFactory.getLogger(RecipeApiService.class);

    public RecipeApiService(
            @Value("${recipe.api.key}") String key,
            @Value("${recipe.basic.url}") String basicUrl,
            RecipeRepository recipeRepository,
            AppUtilsService appUtilsService
    ) {
        this.token = key;
        this.recipeRepository = recipeRepository;
        this.webClient = WebClient.create(basicUrl);
        this.appUtilsService = appUtilsService;
    }

    @Scheduled(initialDelay = 0, fixedRate = 3 * 60 * 60 * 1000)
    public void getRandomRecipeCollection() {
        List<Recipe> recipes = Objects.requireNonNull(Objects.requireNonNull(webClient
                        .get()
                        .uri("/recipes/random?number=10&apiKey=" + token)
                        .retrieve()
                        .toEntity(RecipeCollection.class)
                        .block())
                .getBody()).recipes();
        List<Recipe> recipesWithId = assignIds(recipes);
        this.recipeRepository.saveAll(recipesWithId);
        logger.info("Saved recipes to database " + new Timestamp(System.currentTimeMillis()));
    }

    public List<Recipe> assignIds(List<Recipe> recipes) {
        return recipes.stream()
                .map(recipe -> recipe.withId(appUtilsService.createUUID()))
                .toList();
    }

}

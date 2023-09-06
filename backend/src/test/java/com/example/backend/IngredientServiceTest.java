package com.example.backend;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class IngredientServiceTest {


    private final IngredientRepository ingredientRepository = mock(IngredientRepository.class);

    private final AppUtilsService appUtilsService = mock(AppUtilsService.class);
    private final IngredientService ingredientService = new IngredientService(appUtilsService, ingredientRepository);


    @Test
    @DisplayName("getAllIngredients -> Should return an empty list")
    void whenGetAllIngredientsWithNoIngredientsShouldReturnEmptyList() {
        when(ingredientRepository.findAll()).thenReturn(Collections.emptyList());
        assertEquals(Collections.emptyList(), ingredientService.getAllIngredients());
    }

    @Test
    @DisplayName("addIngredient -> Should return HTTP-Status 200 and the updated Ingredient")
    void whenAddIngredientWithAlreadyExistingIngredientShouldReturnStatus200AndUpdatedIngredient() {
        Ingredient ingredient = new Ingredient("testId", "testIngredient", 10);
        when(ingredientRepository.findByName("testIngredient")).thenReturn(java.util.Optional.of(ingredient));
        when(ingredientRepository.save(new Ingredient("testId","testIngredient",15))).thenReturn(new Ingredient("testId", "testIngredient", 15));
        ResponseEntity<Ingredient> actual = ingredientService.addIngredient(new IngredientWithoutId("testIngredient", 5));
        ResponseEntity<Ingredient> expected = ResponseEntity.status(HttpStatus.OK).body(new Ingredient("testId", "testIngredient", 15));
        assertEquals(expected, actual);
    }
    @Test
    @DisplayName("addIngredient -> Should return HTTP-Status 201 and new Ingredient")
    void whenAddIngredientWithNotExistingIngredientShouldReturnStatus201AndAddedIngredient() {
        Ingredient ingredient = new Ingredient("testId", "testIngredient", 10);
        when(ingredientRepository.findByName("testIngredient")).thenReturn(Optional.empty());
        when(appUtilsService.createUUID()).thenReturn("testId");
        when(ingredientRepository.save(new Ingredient(appUtilsService.createUUID(),"testIngredient",10))).thenReturn(ingredient);
        ResponseEntity<Ingredient> actual = ingredientService.addIngredient(new IngredientWithoutId("testIngredient", 10));
        ResponseEntity<Ingredient> expected = ResponseEntity.status(HttpStatus.CREATED).body(ingredient);
        assertEquals(expected, actual);
    }



}

package com.example.backend;

import com.example.backend.ingredients.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;


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
        Ingredient ingredient = new Ingredient("testId", "testIngredient", 10, "g");
        when(ingredientRepository.findByName("testIngredient")).thenReturn(java.util.Optional.of(ingredient));
        when(ingredientRepository.save(new Ingredient("testId", "testIngredient", 15, "g"))).thenReturn(new Ingredient("testId", "testIngredient", 15, "g"));
        ResponseEntity<Ingredient> actual = ingredientService.addIngredient(new RequiredIngredient("testIngredient", 5, "g"));
        ResponseEntity<Ingredient> expected = ResponseEntity.status(HttpStatus.OK).body(new Ingredient("testId", "testIngredient", 15, "g"));
        assertEquals(expected, actual);
    }

    @Test
    @DisplayName("addIngredient -> Should throw an exception")
    void whenAddIngredientWithAlreadyExistingIngredientWithOtherTypeShouldThrowAnException() {
        Ingredient ingredient = new Ingredient("testId", "testIngredient", 10, "g");
        when(ingredientRepository.findByName("testIngredient")).thenReturn(java.util.Optional.of(ingredient));
        assertThrows(TypeNotMatchException.class, () -> {
            RequiredIngredient ingredientToAdd = new RequiredIngredient("testIngredient", 10, "g");
            ingredientService.addIngredient(ingredientToAdd);
        });
    }

    @Test
    @DisplayName("addIngredient -> Should return HTTP-Status 201 and new Ingredient")
    void whenAddIngredientWithNotExistingIngredientShouldReturnStatus201AndAddedIngredient() {
        Ingredient ingredient = new Ingredient("testId", "testIngredient", 10, "g");
        when(ingredientRepository.findByName("testIngredient")).thenReturn(Optional.empty());
        when(appUtilsService.createUUID()).thenReturn("testId");
        when(ingredientRepository.save(new Ingredient(appUtilsService.createUUID(), "testIngredient", 10, "g"))).thenReturn(ingredient);
        ResponseEntity<Ingredient> actual = ingredientService.addIngredient(new RequiredIngredient("testIngredient", 10, "g"));
        ResponseEntity<Ingredient> expected = ResponseEntity.status(HttpStatus.CREATED).body(ingredient);
        assertEquals(expected, actual);
    }

    @Test
    @DisplayName("deleteIngredients -> Should delete all Ingredients by id")
    void expectThatDeleteMethodHasBeenCalled() {
        List<String> ids = List.of("1");
        doNothing().when(ingredientRepository).deleteById("1");
        ingredientService.deleteIngredients(ids);
        verify(ingredientRepository).deleteById("1");
    }


}

package com.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IngredientService {
    private final AppUtilsService appUtils;
    private final IngredientRepository ingredientRepository;

    public ResponseEntity<Ingredient> addIngredient(IngredientWithoutId ingredientToAdd) {

        Optional<Ingredient> existingIngredient = ingredientRepository.findByName(ingredientToAdd.name());

        if (existingIngredient.isPresent()) {
            Ingredient currentIngredient = existingIngredient.get();

            Ingredient updatedIngredient = ingredientRepository.save(
                    Ingredient.builder()
                            .id(currentIngredient.id())
                            .name(currentIngredient.name())
                            .amount(ingredientToAdd.amount() + currentIngredient.amount())
                            .build());
            return ResponseEntity.status(HttpStatus.OK).body(updatedIngredient);
        }

        Ingredient newIngredient = ingredientRepository.save
                (Ingredient.builder()
                        .id(appUtils.createUUID())
                        .name(ingredientToAdd.name())
                        .amount(ingredientToAdd.amount()).build());

        return ResponseEntity.status(HttpStatus.CREATED).body(newIngredient);
    }


    public List<Ingredient> getAllIngredients() {
        return this.ingredientRepository.findAll();
    }
}

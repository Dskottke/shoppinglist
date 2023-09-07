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
            return updateIngredient(existingIngredient.get(), ingredientToAdd);

        }

        Ingredient newIngredient = ingredientRepository.save
                (Ingredient.builder()
                        .id(appUtils.createUUID())
                        .name(ingredientToAdd.name())
                        .type(ingredientToAdd.type())
                        .amount(ingredientToAdd.amount()).build());

        return ResponseEntity.status(HttpStatus.CREATED).body(newIngredient);
    }


    public List<Ingredient> getAllIngredients() {
        return this.ingredientRepository.findAll();
    }

    public void deleteIngredients(List<String> ingredientIds) {
        ingredientIds.forEach(ingredientRepository::deleteById);
    }

    private ResponseEntity<Ingredient> updateIngredient(Ingredient existingIngredient, IngredientWithoutId updateIngredient) {
        if (existingIngredient.type().equals(updateIngredient.type())) {

            Ingredient updatedIngredient = ingredientRepository.save(
                    Ingredient.builder()
                            .id(existingIngredient.id())
                            .name(existingIngredient.name())
                            .type(existingIngredient.type())
                            .amount(existingIngredient.amount() + updateIngredient.amount())
                            .build());
            return ResponseEntity.status(HttpStatus.OK).body(updatedIngredient);
        }
        throw new TypeNotMatchException("Type doesn't match with existing ingredient");
    }
}

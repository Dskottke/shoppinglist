package com.example.backend.ingredients;

import com.example.backend.AppUtilsService;
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

    public ResponseEntity<Ingredient> addIngredient(RequiredIngredient ingredientToAdd) {

        Optional<Ingredient> existingIngredient = ingredientRepository.findByName(ingredientToAdd.name());

        if (existingIngredient.isPresent()) {
            return updateIngredient(existingIngredient.get(), ingredientToAdd);

        }

        Ingredient newIngredient = ingredientRepository.save
                (Ingredient.builder()
                        .id(appUtils.createUUID())
                        .name(ingredientToAdd.name())
                        .unit(ingredientToAdd.unit())
                        .amount(ingredientToAdd.amount()).build());

        return ResponseEntity.status(HttpStatus.CREATED).body(newIngredient);
    }


    public List<Ingredient> getAllIngredients() {
        return this.ingredientRepository.findAll();
    }

    public void deleteIngredients(List<String> ingredientIds) {
        ingredientIds.forEach(ingredientRepository::deleteById);
    }

    private ResponseEntity<Ingredient> updateIngredient(Ingredient existingIngredient, RequiredIngredient updateIngredient) {
        if (existingIngredient.unit().equals(updateIngredient.unit())) {

            Ingredient updatedIngredient = ingredientRepository.save(
                    Ingredient.builder()
                            .id(existingIngredient.id())
                            .name(existingIngredient.name())
                            .unit(existingIngredient.unit())
                            .amount(existingIngredient.amount() + updateIngredient.amount())
                            .build());
            return ResponseEntity.status(HttpStatus.OK).body(updatedIngredient);
        }
        throw new TypeNotMatchException("Type doesn't match with existing ingredient");
    }
}

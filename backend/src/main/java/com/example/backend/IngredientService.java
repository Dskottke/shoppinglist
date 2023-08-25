package com.example.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IngredientService {
    private final AppUtilsService appUtils;
    private final IngredientRepository ingredientRepository;
    public Ingredient addIngredient(IngredientWithoutId ingredientToAdd) {

     Optional<Ingredient>existingIngredient = ingredientRepository.findByName(ingredientToAdd.name());

     if(existingIngredient.isPresent()){
         Ingredient currentIngredient = existingIngredient.get();
       return  ingredientRepository.save(
                 Ingredient.builder()
                         .id(currentIngredient.id())
                         .name(currentIngredient.name())
                         .amount(ingredientToAdd.amount() + currentIngredient.amount())
                         .build());
     }
     return  ingredientRepository.save
                (Ingredient.builder()
                        .id(appUtils.createUUID())
                        .name(ingredientToAdd.name())
                        .amount(ingredientToAdd.amount()).build());
    }



}

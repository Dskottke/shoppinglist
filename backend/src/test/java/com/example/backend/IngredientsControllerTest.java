package com.example.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class IngredientsControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DisplayName("GET - should return empty List & http-status 200")
    void getAllIngredientsShouldReturnEmptyListWithHttpStatus200() throws Exception {
        mockMvc.perform(get("/api/ingredients"))
                .andExpect(status().is(200))
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                []
                                 """));
    }

    @Test
    @DirtiesContext
    @DisplayName("PUT - should return new ingredient with id & http-status 200")
    void addIngredientShouldReturnNewIngredientWithIdAndHttpStatus201() throws Exception {
        mockMvc.perform(put("/api/ingredients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "name" : "Apfel",
                                "amount" : 10,
                                "type" : "Stk"
                                }
                                """))
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                        "name": "Apfel",
                        "amount": 10,
                        "type": "Stk"
                        }
                        """
                ))
                .andExpect(jsonPath("id").exists())
                .andExpect(jsonPath("id").isString())
                .andExpect(jsonPath("id").isNotEmpty());
    }

    @Test
    @DirtiesContext
    @DisplayName("PUT - should return updated ingredient with id & http-status 200")
    void addIngredientShouldReturnUpdatedIngredientWithStatus200() throws Exception {
        MvcResult result = mockMvc.perform(put("/api/ingredients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "name" : "Apfel",
                                "amount" : 10,
                                "type" : "Stk"
                                }
                                """))
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                        "name": "Apfel",
                        "amount": 10,
                        "type": "Stk"
                        }
                        """
                ))
                .andExpect(jsonPath("id").exists())
                .andExpect(jsonPath("id").isString())
                .andExpect(jsonPath("id").isNotEmpty())
                .andReturn();
        String response = result.getResponse().getContentAsString();
        System.out.println(response);
        Ingredient ingredient = objectMapper.readValue(response, Ingredient.class);

        mockMvc.perform(put("/api/ingredients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "name" : "Apfel",
                                "amount" : 10,
                                "type" : "Stk"
                                }
                                """))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        {
                        "id": "<id>",
                        "name": "Apfel",
                        "amount": 20
                        }
                        """.replace("<id>", ingredient.id())
                ));
    }

    @Test
    @DirtiesContext
    @DisplayName("DELETE -> Should delete item and return http-status 204")
    void deleteIngredientByIdShouldReturnHTTPStatus204() throws Exception {
        MvcResult response = mockMvc.perform(put("/api/ingredients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "name": "apple",
                                "amount": 10,
                                "type": "Stk"
                                }"""))
                .andExpect(status().is(201))
                .andExpect(content()
                        .json("""
                                {
                                "name": "apple",
                                "amount": 10,
                                "type": "Stk"
                                }
                                """))
                .andReturn();

        Ingredient ingredient = objectMapper.readValue(response.getResponse().getContentAsString(), Ingredient.class);

        mockMvc.perform(delete("/api/ingredients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                [
                                "<id>"
                                ]
                                """.replace("<id>", ingredient.id())))
                .andExpect(status().is(204));

        mockMvc.perform(get("/api/ingredients"))
                .andExpect(status().is(200))
                .andExpect(content().json(
                """
                        []
                        """));
    }
}

package com.example.backend.recipes.models;

import lombok.Builder;

import java.util.List;

@Builder
public record AnalyzedInstruction(List<Step> steps) {
}

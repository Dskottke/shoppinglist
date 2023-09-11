package com.example.backend.ingredients;

public class TypeNotMatchException extends RuntimeException{
    public TypeNotMatchException(String message) {
        super(message);
    }
}

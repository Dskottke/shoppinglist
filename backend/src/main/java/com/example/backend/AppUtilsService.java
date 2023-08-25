package com.example.backend;

import org.springframework.stereotype.Service;

import java.util.UUID;
@Service
public class AppUtilsService {
    public String createUUID(){
        return UUID.randomUUID().toString();
    }
}

package com.example.fullstackbackendspringboot.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Sorry no user with id "+id);
    }
}

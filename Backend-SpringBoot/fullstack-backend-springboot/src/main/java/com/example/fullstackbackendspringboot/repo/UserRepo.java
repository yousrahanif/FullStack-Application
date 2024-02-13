package com.example.fullstackbackendspringboot.repo;

import com.example.fullstackbackendspringboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}

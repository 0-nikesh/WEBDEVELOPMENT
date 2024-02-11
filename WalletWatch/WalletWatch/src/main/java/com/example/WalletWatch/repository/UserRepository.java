package com.example.WalletWatch.repository;

import com.example.WalletWatch.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // Additional custom methods if required


    @Query(value = "Select * from users where email=?1",nativeQuery = true)
    Optional<User> getUserByEmail(String email);

}

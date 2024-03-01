package com.example.dammi.repos;

import com.example.dammi.entities.EmailCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailCredentialRepo extends JpaRepository<EmailCredentials,Long> {
    @Query(value = "select * from email_credentials where active='true' ORDER BY date desc limit 1", nativeQuery = true)
    EmailCredentials findOneByActive();
}

package com.example.dammi.services;


import com.example.dammi.pojo.CustomUserDetails;
import com.example.dammi.entities.User;
import com.example.dammi.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        String EMAIL = username;
        User retrievedUser = userRepo.findByEmail(username).orElseGet(null);
        System.out.println(retrievedUser);
        if (retrievedUser == null) {
            throw new UsernameNotFoundException(String.format("USER WITH EMAIL %s NOT FOUND", username));
        }
        return new CustomUserDetails(retrievedUser);
    }
}

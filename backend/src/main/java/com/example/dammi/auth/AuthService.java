package com.example.dammi.auth;

import com.example.dammi.config.JwtService;
import com.example.dammi.pojo.AuthRequest;
import com.example.dammi.pojo.AuthResponse;
import com.example.dammi.pojo.CustomUserDetails;
import com.example.dammi.pojo.Userpojo;
import com.example.dammi.entities.User;
import com.example.dammi.repos.UserRepo;
import com.example.dammi.services.CustomUserDetailsService;
import com.example.dammi.utils.PasswordEncoderUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepo userRepo;
    private final JwtService jwtService;
    private final CustomUserDetailsService customUserDetailsService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse authenticate(AuthRequest authRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()
                )
        );
        var user = userRepo.findByEmail(authRequest.getEmail())
                .orElseThrow();
        CustomUserDetails userDetails = new CustomUserDetails(user);
        HashMap<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("role", user.getRole());
        var jwtToken = jwtService.generateToken(extraClaims, userDetails);

        return AuthResponse.builder()
                .role(user.getRole())
                .token(jwtToken)
                .build();
    }

    public User register(Userpojo userpojo) {

        String userRole = userpojo.getEmail().equals("bhandarinikesh93@gmail.com")
                ? "ROLE_ADMIN" : "ROLE_USER";

        var user = User.builder()
                .email(userpojo.getEmail())
                .password(PasswordEncoderUtil.bCryptPasswordEncoder()
                        .encode(userpojo.getPassword()))
                .username(userpojo.getUsername())
                .role(userRole)
                .build();
        return userRepo.save(user);
    }
}

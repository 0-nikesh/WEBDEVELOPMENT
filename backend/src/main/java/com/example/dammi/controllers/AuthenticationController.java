package com.example.dammi.controllers;

import com.example.dammi.auth.AuthService;
import com.example.dammi.pojo.AuthRequest;
import com.example.dammi.pojo.AuthResponse;
import com.example.dammi.pojo.Userpojo;
import com.example.dammi.entities.Cart;
import com.example.dammi.entities.User;
import com.example.dammi.services.CartService;
import com.example.dammi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class AuthenticationController {

    private final AuthService authService;
    private final UserService userService;
    private final CartService cartService;


    @PostMapping("/register")
    public ResponseEntity<?> add(@RequestBody Userpojo userpojo) {
        System.out.println(userpojo.getEmail());

        boolean userExists = userService.ifUserExists(userpojo.getEmail());
        if (userExists) {
            return ResponseEntity.status(400).body("Email already exists");
        }

        User user = authService.register(userpojo);
        Cart cart = cartService.createCart(user);
        user.setCart(cart);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest authRequest) {
        return ResponseEntity.ok(authService.authenticate(authRequest));
    }

}

package com.example.dammi.services.impl;

import com.example.dammi.entities.Cart;
import com.example.dammi.entities.User;
import com.example.dammi.repos.CartRepo;
import com.example.dammi.services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepo cartRepo;

    @Override
    public Cart createCart(User user) {
        Cart newCart = Cart.builder()
                .user(user)
                .totalPrice(0.0)
                .build();
        return cartRepo.save(newCart);
    }
    @Override
    public List<Cart> getAllCarts() {
        return cartRepo.findAll(); // Implement this method to fetch all carts
    }
}

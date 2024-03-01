package com.example.dammi.services;

import com.example.dammi.entities.Cart;
import com.example.dammi.entities.User;

import java.util.List;

public interface CartService {
    Cart createCart(User user);
    List<Cart> getAllCarts(); // New method to fetch all carts

}

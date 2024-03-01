package com.example.dammi.services;

import com.example.dammi.entities.Order_table;
import com.example.dammi.entities.User;

import java.util.List;

public interface UserService {
    boolean ifUserExists(String email);

    List<Order_table> getCartItems();

    void addToCart(User user, Integer productId, int i);

    public void removeFromCart(User user, Integer productId);

    User findByEmail(String email);

    User findUser(Integer id);

    User updateUser(User existingUser);
}

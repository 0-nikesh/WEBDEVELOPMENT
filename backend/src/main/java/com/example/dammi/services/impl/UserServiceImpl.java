package com.example.dammi.services.impl;

import com.example.dammi.entities.Cart;
import com.example.dammi.entities.Order_table;
import com.example.dammi.entities.Product;
import com.example.dammi.entities.User;
import com.example.dammi.repos.CartItemRepo;
import com.example.dammi.repos.CartRepo;
import com.example.dammi.repos.ProductRepo;
import com.example.dammi.repos.UserRepo;
import com.example.dammi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final CartRepo cartRepo;
    private final UserRepo userRepo;
    private final ProductRepo productRepo;
    private final CartItemRepo cartItemRepository;

    @Override
    public boolean ifUserExists(String email) {
        return userRepo.existsByEmail(email);
    }

    @Override
    public List<Order_table> getCartItems() {
        return null;
    }

    @Override
    public void addToCart(User user, Integer productId, int quantity) {
        Cart cart = user.getCart();
        Product product = productRepo.findById(productId).get();

        List<Order_table> orderTables = cart.getOrderTables();

        // Check if the product already exists in the cart
        for (Order_table orderTable : orderTables) {
            if (orderTable.getProduct().getId().equals(product.getId())) {
                // Update the quantity if the product already exists
                orderTable.setQuantity(orderTable.getQuantity() + quantity);
                cartItemRepository.save(orderTable);
                double price = calculateTotalPrice(orderTables);
                cart.setTotalPrice(price);
                cartRepo.save(cart);
                return;
            }
        }

        // Create a new CartItem if the product doesn't exist in the cart
        Order_table newOrderTable = new Order_table();
        newOrderTable.setProduct(product);
        newOrderTable.setCart(cart);
        newOrderTable.setQuantity(quantity);

        orderTables.add(newOrderTable);

        cartItemRepository.save(newOrderTable);
        double price = calculateTotalPrice(orderTables);
        cart.setTotalPrice(price);
        cartRepo.save(cart);
    }

    private Double calculateTotalPrice(List<Order_table> orderTables) {
        double totalPrice = 0.0;

        for (Order_table orderTable : orderTables) {
            Double productPrice = orderTable.getProduct().getPrice();
            int quantity = orderTable.getQuantity();
            double itemPrice = productPrice * quantity;
            totalPrice = totalPrice + itemPrice;
        }

        return totalPrice;
    }

    // DELETE ITEMS FROM THE CART
    @Override
    public void removeFromCart(User user, Integer productId) {
        Cart cart = user.getCart();
        List<Order_table> orderTables = cart.getOrderTables();

        for (Iterator<Order_table> iterator = orderTables.iterator(); iterator.hasNext(); ) {
            Order_table orderTable = iterator.next();
            if (orderTable.getProduct().getId().equals(productId)) {
                int currentQuantity = orderTable.getQuantity();
                if (currentQuantity > 1) {
                    orderTable.setQuantity(currentQuantity - 1);
                    cartItemRepository.save(orderTable);
                } else {
                    iterator.remove();
                    cartItemRepository.delete(orderTable);
                }

                double price = calculateTotalPrice(orderTables);
                cart.setTotalPrice(price);
                cartRepo.save(cart);
                return;
            }
        }
    }


    @Override
    public User findByEmail(String email) {
        return userRepo.findByEmail(email).get();
    }

    @Override
    public User findUser(Integer id) {
        return userRepo.findById(id).get();
    }

    @Override
    public User updateUser(User existingUser) {
        return userRepo.save(existingUser);
    }


}

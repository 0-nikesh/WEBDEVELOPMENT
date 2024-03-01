package com.example.dammi.repos;

import com.example.dammi.entities.Order_table;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepo extends JpaRepository<Order_table, Integer> {
}

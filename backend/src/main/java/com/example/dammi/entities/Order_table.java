package com.example.dammi.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(
        name = "orders"
)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Order_table {
    @Id
    @SequenceGenerator(allocationSize = 1,
            name = "citem_gen_id",
            sequenceName = "citem_gen_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "citem_gen_id")

    private Integer id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @Override
    public String toString() {
        // Incorrect implementation causing recursion
        return "Cart";
    }

    private int quantity;
}


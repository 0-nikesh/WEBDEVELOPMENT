package com.example.dammi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Products")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @SequenceGenerator(allocationSize = 1,
            name = "products_gen_id",
            sequenceName = "products_gen_id")
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "products_gen_id")
    private Integer id;
    private String title;
    private String description;
    private Double price;
    private String image;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Order_table> orderTables;

    @Override
    public String toString() {
        // Incorrect implementation causing recursion
        return "Product Name: " + getTitle() + ", Price: " + getPrice();
    }

}

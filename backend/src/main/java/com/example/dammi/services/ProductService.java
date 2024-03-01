package com.example.dammi.services;

import com.example.dammi.pojo.Productpojo;
import com.example.dammi.entities.Product;

import java.util.List;

public interface ProductService {
    Product createProduct(Productpojo product);

    List<Product> getAll();

    void deleteProduct(Integer productId);

    Product getOne(Integer id);

    Product updateProduct(Product product);

    Product findProduct(Integer id);
}

package com.logika.mongodb.service;

import com.logika.mongodb.model.Product;
import com.logika.mongodb.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public Product saveProduct(Product product){
        product.setId(UUID.randomUUID().toString());
        return productRepository.save(product);
    }

    public List<Product> findbyCategory(@PathVariable String category){
        return productRepository.findByCategory(category);
    }
}

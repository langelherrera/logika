package com.logika.mongodb.repository;

import com.logika.mongodb.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product,String> {

    List<Product> findByCategory(String categoria);
}

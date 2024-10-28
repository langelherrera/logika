package com.logika.mongodb.controller;

import com.logika.mongodb.dto.Request;
import com.logika.mongodb.model.Product;
import com.logika.mongodb.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/{role}")
    @CrossOrigin
    public ResponseEntity<?> create(@PathVariable String role, @RequestBody Product product){

        if(role.equalsIgnoreCase("Admin")){
           Product  productDB= productService.saveProduct(product);
            return  new ResponseEntity<>(productDB, HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/category/{category}")
    @CrossOrigin
    public ResponseEntity<?> getProductsByCategory(@PathVariable(required = true) String category ){

            List<Product> products= productService.findbyCategory(category);

            if(products==null || products.isEmpty()){
                Map<String, String> response = new HashMap<>();
                response.put("code","404");
                response.put("description","La categoria NO Fue Encontrada");
                return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
            }else {
                return new ResponseEntity<>(products,HttpStatus.OK);
            }

    }

    @GetMapping()
    @CrossOrigin
    public ResponseEntity<?> getProducts(){
        List<Product> products=productService.findAll();

        return new ResponseEntity<>(products,HttpStatus.OK);
    }
}

package com.logika.mongodb.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "productos")
public class Product {
    @Id
    private String id;
    private String name;
    private float price;
    @Indexed
    private String category;


}

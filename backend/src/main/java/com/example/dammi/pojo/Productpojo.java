package com.example.dammi.pojo;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Productpojo {
    private String title;
    private String description;
    private Double price;
    private MultipartFile image;
}

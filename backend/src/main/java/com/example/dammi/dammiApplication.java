package com.example.dammi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class dammiApplication {

    public static void main(String[] args) {
        SpringApplication.run(dammiApplication.class, args);
    }

    @Configuration
    public class StaticResourceConfiguration implements WebMvcConfigurer {
        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("/uploads/**")
                    .addResourceLocations("file:uploads/"); // The path to the uploads folder within the root of the Spring Boot project
        }
    }


}

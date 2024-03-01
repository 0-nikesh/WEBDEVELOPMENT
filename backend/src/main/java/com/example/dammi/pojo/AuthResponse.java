package com.example.dammi.pojo;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthResponse {
    private String role;
    private String token;
}

package com.example.dammi.pojo;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Userpojo {
    private String username;
    private String email;
    private String password;
}

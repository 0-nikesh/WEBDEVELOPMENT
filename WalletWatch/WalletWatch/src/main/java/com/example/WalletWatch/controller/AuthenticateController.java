package com.example.WalletWatch.controller;

import com.example.WalletWatch.pojo.AuthenticateRequest;
import com.example.WalletWatch.pojo.AuthenticateResponse;
import com.example.WalletWatch.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthenticateController {
    private final AuthenticateService authenticateService;

    @PostMapping("/login")
    public AuthenticateResponse authenticate(@RequestBody AuthenticateRequest authenticateRequest) {

        return authenticateService.authenticate(authenticateRequest);
    }

}

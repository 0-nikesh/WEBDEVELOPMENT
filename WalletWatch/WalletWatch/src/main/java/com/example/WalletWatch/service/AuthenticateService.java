package com.example.WalletWatch.service;

import com.example.WalletWatch.pojo.AuthenticateRequest;
import com.example.WalletWatch.pojo.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
package com.example.dammi.services;
import com.example.dammi.pojo.EmailRequest;

public interface EmailService {
    void sendCustomerConfirmationEmail(EmailRequest emailRequest);

    void resetPassword(EmailRequest emailRequest);

}

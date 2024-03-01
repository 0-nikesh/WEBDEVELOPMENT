package com.example.dammi.services.impl;
import com.example.dammi.entities.User;
import com.example.dammi.pojo.EmailRequest;
import com.example.dammi.repos.UserRepo;
import com.example.dammi.services.EmailService;
import com.example.dammi.config.JwtService;
import freemarker.template.Configuration;
import freemarker.template.Template;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {
    private final JavaMailSender getJavaMailSender;// Change variable name to follow Java naming convention
    private final ThreadPoolTaskExecutor taskExecutor;
    private final UserRepo userRepository;
    private final JwtService jwtService;
    private final JavaMailSender javaMailSender;


    @Autowired
    @Qualifier("emailConfigBean")
    private Configuration emailConfig;

    @Override
    public void sendCustomerConfirmationEmail(EmailRequest emailRequest) {
        try {
            Map<String, String> model = new HashMap<>();

            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());

            model.put("email", emailRequest.getSendToEmail());
            model.put("url", "localhost:8082/");

            Template template = emailConfig.getTemplate("email.ftl");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);

            mimeMessageHelper.setTo(emailRequest.getSendToEmail());
            mimeMessageHelper.setFrom("binitaacharya2003@gmail.com");
            mimeMessageHelper.setText(html, true);
            mimeMessageHelper.setSubject("Registration");

            taskExecutor.execute(new Thread(() -> {
                try {
                    javaMailSender.send(message);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void resetPassword(EmailRequest emailRequest) {
        try {

            User user=userRepository.findByEmail(emailRequest.getSendToEmail()).get();

            userRepository.save(user);


//            String jwt= jwtService.generateToken(user);


            Map<String, String> model = new HashMap<>();

            MimeMessage message = getJavaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());

            model.put("email", emailRequest.getSendToEmail());
//            model.put("url", "http://localhost:3000/change-password?token="+jwt);

            Template template = emailConfig.getTemplate("resetPassword.ftl");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);

            mimeMessageHelper.setTo(emailRequest.getSendToEmail());
            mimeMessageHelper.setFrom("bhandarinikesh93@gmail.com");
            mimeMessageHelper.setText(html, true);
            mimeMessageHelper.setSubject("Reset password");

            taskExecutor.execute(new Thread() {
                public void run() {
                    getJavaMailSender.send(message);
                }
            });
        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}

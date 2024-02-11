package com.example.WalletWatch.service.impl;

import com.example.WalletWatch.config.PasswordEncoderUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.WalletWatch.entity.User;
import com.example.WalletWatch.pojo.UserPojo;
import com.example.WalletWatch.repository.UserRepository;
import com.example.WalletWatch.service.UserService;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    @Override
    public void saveUser(UserPojo userPojo) {
        // Check if the email already exists in the database
        Optional<User> existingUser = userRepository.getUserByEmail(userPojo.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email is already registered");
        }

        User user = new User();

        if(userPojo.getId()!=null){
            user=userRepository.findById(userPojo.getId())
                    .orElseThrow(()-> new NoSuchElementException("No data found"));
        }

        user.setFullName(userPojo.getFullName());
        user.setUserName(userPojo.getUserName());
        user.setPassword(PasswordEncoderUtil.getInstance().encode(userPojo.getPassword()));
        user.setAddress(userPojo.getAddress());
        user.setEmail(userPojo.getEmail());


        userRepository.save(user);
    }

    @Override
    public List<User> getAllData() {
        return userRepository.findAll(); // select * from users
    }

    @Override
    public Optional<User> getById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }
}

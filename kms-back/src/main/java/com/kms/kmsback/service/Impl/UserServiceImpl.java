package com.kms.kmsback.service.Impl;


import com.kms.kmsback.Mapper.UserMapper;
import com.kms.kmsback.dto.UserDto;
import com.kms.kmsback.entity.User;
import com.kms.kmsback.exception.ResourceNotFoundException;
import com.kms.kmsback.repository.UserRepository;
import com.kms.kmsback.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long id) throws RuntimeException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Could not find the user with given id: " + id));
        return UserMapper.mapToUserDto(user);
        }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDto(user)).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long id, UserDto userDto) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Could not find the user with given id: " + id));
        user.setEmail(userDto.getEmail());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPassword(userDto.getPassword());
        
        User updatedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(updatedUser);
    }

    @Override
    public void deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Could not find the user with given id: " + id));
        userRepository.delete(user);
    }


}

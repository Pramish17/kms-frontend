package com.kms.kmsback.controller;


import com.kms.kmsback.dto.UserDto;
import com.kms.kmsback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    //Build add employee REST API
    @PostMapping
    public ResponseEntity<String> createEmployee(@RequestBody UserDto userDto){
        userService.createUser(userDto);
        return  ResponseEntity.ok("Employee saved sucessfully.");
    }

    //Build get employee REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserByID(@PathVariable("id") Long employeeId) throws Exception {
               UserDto userDto = userService.getUserById(employeeId);
            return ResponseEntity.ok(userDto);
        }

    //Build get all employee REST API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(UserDto userDto){
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //Build Update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<String> updateUser(@PathVariable("id") Long id, @RequestBody UserDto userDto){
        userService.updateUser(id, userDto);
        return ResponseEntity.ok("User Updated Successfully. ");
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok("Employee Deleted Successfully. ");
    }

}

package com.kms.kmsback.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

}

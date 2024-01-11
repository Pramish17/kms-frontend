package com.kms.kmsback.repository;

import com.kms.kmsback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

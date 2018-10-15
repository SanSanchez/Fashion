package com.gcit.fashion.dao;

import com.gcit.fashion.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryDao extends JpaRepository<Category, Long> {
    Optional<Category> findByDescription(String description);
}
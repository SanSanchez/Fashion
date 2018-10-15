package com.gcit.fashion.dao;

import com.gcit.fashion.model.Category;
import com.gcit.fashion.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDao extends JpaRepository<Product, Long> {

    List<Product> findAllByCategory(Category category);
}
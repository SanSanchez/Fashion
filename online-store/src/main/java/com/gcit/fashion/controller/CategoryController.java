package com.gcit.fashion.controller;

import com.gcit.fashion.exceptions.ResourceNotFoundException;
import com.gcit.fashion.model.Category;
import com.gcit.fashion.dao.CategoryDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "online_store")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoryDao cDao;

    @RequestMapping(value = "/categories")
    @ResponseStatus(HttpStatus.OK)
    public List<Category> getCategories() {
        return cDao.findAll();
    }

    @RequestMapping(value = "/categories/{categoryId}")
    @ResponseStatus(HttpStatus.OK)
    public Category getOneCategory(@Valid @PathVariable Long categoryId) {
        return cDao.findById(categoryId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/category",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Category makeCategory(@Valid @RequestBody Category category) {
        return cDao.save(category);
    }

    @Transactional
    @RequestMapping(
            value = "/categories/{categoryId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteCategory(@Valid @PathVariable Long categoryId) {
        cDao.deleteById(categoryId);
    }

    @Transactional
    @RequestMapping(
            value = "/categories/{categoryId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Category changeCategory(@Valid @PathVariable Long categoryId, @RequestBody Category newCategory) {
        Category category = cDao.findById(categoryId).orElse(null);

        if (category != null) {
            newCategory.setCategoryId(category.getCategoryId());
            category = newCategory;
        } else {
            throw new ResourceNotFoundException("Category not found.");
        }

        return cDao.save(category);
    }
}
package com.gcit.fashion.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gcit.fashion.exceptions.ResourceNotFoundException;
import com.gcit.fashion.model.Category;
import com.gcit.fashion.model.Product;
import com.gcit.fashion.dao.ProductDao;
import com.gcit.fashion.dao.CategoryDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "online_store")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductDao pDao;

    @Autowired
    private CategoryDao cDao;

    @RequestMapping(value = "/products")
    @ResponseStatus(HttpStatus.OK)
    @JsonIgnoreProperties({"category.products"})
    public List<Product> getProducts(@RequestParam(value = "category", required = false)String category) {
        return pDao.findAll();
    }

    @RequestMapping(value = "/products/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public Product getOneProduct(@Valid @PathVariable Long productId) {
        return pDao.findById(productId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/product",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Product makeProduct(@Valid @RequestBody Product product) {
        return pDao.save(product);
    }

    @Transactional
    @RequestMapping(
            value = "/products/{productId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteProduct(@Valid @PathVariable Long productId) {
        pDao.deleteById(productId);
    }

    @Transactional
    @RequestMapping(
            value = "/products/{productId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Product changeProduct(@Valid @PathVariable Long productId, @RequestBody Product newProduct) {
        Product product = pDao.findById(productId).orElse(null);

        if (product != null) {
            newProduct.setProductID(product.getProductID());
            product = newProduct;
        } else {
            throw new ResourceNotFoundException("That product cannot be found.");
        }

        return pDao.save(product);
    }
}
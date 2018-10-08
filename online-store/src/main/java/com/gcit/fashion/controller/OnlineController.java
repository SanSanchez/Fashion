package com.gcit.fashion.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gcit.fashion.dao.*;
import com.gcit.fashion.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import com.gcit.fashion.exceptions.ResourceNotFoundException;

import javax.validation.Valid;
import java.util.List;

// TODO: Add http error statuses in the appropriate areas.
// TODO: Break this up into appropriate files.
@RestController
@RequestMapping(path = "store")
@CrossOrigin
public class OnlineController {

    @Autowired
    private CategoryDao cDao;

    @Autowired
    private CouponDao cpDao;

    @Autowired
    private InventoryDao iDao;

    @Autowired
    private LocationDao lDao;

    @Autowired
    private OrderProductDao opDao;

    @Autowired
    private ProductDao pDao;

    @Autowired
    private PurchaseDao pcDao;

    @Autowired
    private UserDao uDao;

    @RequestMapping(value = "/users")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getUsers() {
        return uDao.findAll();
    }

    @RequestMapping(value = "/users/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public User getOneUser(@Valid @PathVariable Long userId) {
        return uDao.findById(userId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/users",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public User makeUser(@Valid @RequestBody User user) {
        return uDao.save(user);
    }

    @Transactional
    @RequestMapping(
            value = "/users/{userId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteUser(@Valid @PathVariable Long userId) {
        uDao.deleteById(userId);
    }

    @Transactional
    @RequestMapping(
            value = "/users/{userId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public User changeUser(@Valid @PathVariable Long userId, @RequestBody User newUser) {
        User user = uDao.findById(userId).orElse(null);

        if (user != null) {
            newUser.setUserId(user.getUserId());
            user = newUser;
        } else {
            throw new ResourceNotFoundException("That user cannot be found.");
        }

        return uDao.save(user);
    }
    
    @RequestMapping(value = "/products")
    @ResponseStatus(HttpStatus.OK)
    @JsonIgnoreProperties({"category.products"})
    public List<Product> getProducts() {
        return pDao.findAll();
    }

    @RequestMapping(value = "/products/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public Product getOneProduct(@Valid @PathVariable Long productId) {
        return pDao.findById(productId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/products",
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

    @RequestMapping(value = "/purchases")
    @ResponseStatus(HttpStatus.OK)
    public List<Purchase> getPurchases() {
        return pcDao.findAll();
    }

    @RequestMapping(value = "/purchases/{purchaseId}")
    @ResponseStatus(HttpStatus.OK)
    public Purchase getOnePurchase(@Valid @PathVariable Long purchaseId) {
        return pcDao.findById(purchaseId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/purchases",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Purchase makePurchase(@Valid @RequestBody Purchase purchase) {
        return pcDao.save(purchase);
    }

    @Transactional
    @RequestMapping(
            value = "/purchases/{purchaseId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deletePurchase(@Valid @PathVariable Long purchaseId) {
        pcDao.deleteById(purchaseId);
    }

    @Transactional
    @RequestMapping(
            value = "/purchases/{purchaseId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Purchase changePurchase(@Valid @PathVariable Long purchaseId, @RequestBody Purchase newPurchase) {
        Purchase purchase = pcDao.findById(purchaseId).orElse(null);

        if (purchase != null) {
            newPurchase.setPurchaseID(purchase.getPurchaseID());
            purchase = newPurchase;
        } else {
            throw new ResourceNotFoundException("That purchase cannot be found.");
        }

        return pcDao.save(purchase);
    }

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
            value = "/categories",
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


    @RequestMapping(value = "/coupons")
    @ResponseStatus(HttpStatus.OK)
    public List<Coupon> getCoupons() {
        return cpDao.findAll();
    }

    @RequestMapping(value = "/coupons/{couponId}")
    @ResponseStatus(HttpStatus.OK)
    public Coupon getOneCoupon(@Valid @PathVariable Long couponId) {
        return cpDao.findById(couponId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/coupons",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Coupon makeCoupon(@Valid @RequestBody Coupon coupon) {
        return cpDao.save(coupon);
    }

    @Transactional
    @RequestMapping(
            value = "/coupons/{couponId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteCoupon(@Valid @PathVariable Long couponId) {
        cpDao.deleteById(couponId);
    }

    @Transactional
    @RequestMapping(
            value = "/coupons/{couponId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Coupon changeCoupon(@Valid @PathVariable Long couponId, @RequestBody Coupon newCoupon) {
        Coupon coupon = cpDao.findById(couponId).orElse(null);

        if (coupon != null) {
            newCoupon.setCouponId(coupon.getCouponId());
            coupon = newCoupon;
        } else {
            throw new ResourceNotFoundException("That coupon cannot be found.");
        }

        return cpDao.save(coupon);
    }

    @RequestMapping(value = "/locations")
    @ResponseStatus(HttpStatus.OK)
    public List<Location> getLocations() {
        return lDao.findAll();
    }

    @RequestMapping(value = "/locations/{locationId}")
    @ResponseStatus(HttpStatus.OK)
    public Location getOneLocation(@Valid @PathVariable Long locationId) {
        return lDao.findById(locationId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/locations",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Location makeLocation(@Valid @RequestBody Location location) {
        return lDao.save(location);
    }

    @Transactional
    @RequestMapping(
            value = "/locations/{locationId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteLocation(@Valid @PathVariable Long locationId) {
        lDao.deleteById(locationId);
    }

    @Transactional
    @RequestMapping(
            value = "/locations/{locationId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Location changeLocation(@Valid @PathVariable Long locationId, @RequestBody Location newLocation) {
        Location location = lDao.findById(locationId).orElse(null);

        if (location != null) {
            newLocation.setLocationId(location.getLocationId());
            location = newLocation;
        } else {
            throw new ResourceNotFoundException("Location not found.");
        }

        return lDao.save(location);
    }
}

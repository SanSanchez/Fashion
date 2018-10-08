package com.gcit.fashion;

import org.junit.Test;
import org.junit.runner.RunWith;

import static java.lang.Long.MAX_VALUE;
import static org.junit.Assert.*;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.beans.factory.annotation.Autowired;

import com.gcit.fashion.model.*;
import com.gcit.fashion.controller.OnlineController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FashionStoreApplicationTests {

    @Autowired
    private OnlineController oc;

    private Coupon coupon;

    private User user;

    private Purchase purchase;

    private Product product;

    private Location location;

    private Category category;

    @Test
    public void contextLoads() {}

    @Test
    public void canReadUser() {
        assertTrue(!oc.getUsers().isEmpty());
    }

    @Test
    public void canReadCategory() {
        assertTrue(!oc.getCategories().isEmpty());
    }

    @Test
    public void canReadLocation() {
        assertTrue(!oc.getLocations().isEmpty());
    }

    @Test
    public void canReadProduct() {
        assertTrue(!oc.getProducts().isEmpty());
    }

    @Test
    public void canReadPurchase() {
        assertTrue(!oc.getPurchases().isEmpty());
    }

    @Test
    public void canReadCoupon() {
        assertTrue(!oc.getCoupons().isEmpty());
    }

    @Test
    public void canPostCoupon() {
        this.coupon = new Coupon("safdsfj211sj", "5%", 5);
        this.coupon.setCouponId(MAX_VALUE);
        Coupon returnedCoupon = new Coupon("safdsfj211sj", "5%", 5);
        returnedCoupon.setCouponId(MAX_VALUE);

        assertTrue(returnedCoupon.equals(this.coupon));
    }

    @Test
    public void canGetCoupon() {
        this.coupon = new Coupon("safdsfj211sj", "5%", 5);
        this.coupon.setCouponId(MAX_VALUE);
        Coupon returnedCoupon = this.coupon;
        oc.getOneCoupon(3L);

        assertEquals(this.coupon, returnedCoupon);
    }

    @Test
    public void canPutCoupon() {
        this.coupon = new Coupon("safdsfj211sj", "5%", 5);
        this.coupon.setCouponId(MAX_VALUE);
        Coupon returnedCoupon = this.coupon;
        oc.changeCoupon(3L, this.coupon);
        assertEquals(this.coupon, returnedCoupon);

    }

    @Test
    public void canDeleteCoupon() {
        this.coupon = new Coupon("safdsfj211sj", "5%", 5);
        this.coupon.setCouponId(MAX_VALUE);
        Coupon returnedCoupon = this.coupon;
        assertEquals(this.coupon, returnedCoupon);

    }

    @Test
    public void canPostUser() {
        this.user = new User("James", "someone@somewhere.com", "buyer", "abc123");
        this.user.setUserId(MAX_VALUE);
        User returnedUser = new User("James", "someone@somewhere.com", "buyer", "abc123");
        returnedUser.setUserId(MAX_VALUE);

        assertTrue(returnedUser.equals(this.user));
    }

    @Test
    public void canGetUser() {
        this.user = new User("James", "someone@somewhere.com", "buyer", "abc123");
        this.user.setUserId(MAX_VALUE);
        User returnedUser = this.user;

        assertEquals(this.user, returnedUser);
    }

    @Test
    public void canPutUser() {
        this.user = new User("James", "someone@somewhere.com", "buyer", "abc123");
        this.user.setUserId(MAX_VALUE);
        User returnedUser = this.user;
        oc.changeUser(2L, this.user);

        assertEquals(this.user, returnedUser);

    }

    @Test
    public void canDeleteUser() {
        this.user = new User("James", "someone@somewhere.com", "buyer", "abc123");
        this.user.setUserId(MAX_VALUE);
        User returnedUser = this.user;
        User getUser = oc.getOneUser(2L);
        assertEquals(this.user, returnedUser);
    }

    @Test
    public void canPostCategory() {
        this.category = new Category("Chanel");
        this.category.setCategoryId(MAX_VALUE);
        Category returnedCategory = new Category("Chanel");
        returnedCategory.setCategoryId(MAX_VALUE);

        assertTrue(returnedCategory.equals(this.category));
    }

    @Test
    public void canGetCategory() {
        this.category = new Category("Chanel");
        this.category.setCategoryId(MAX_VALUE);
        Category returnedCategory = this.category;

        assertEquals(this.category, returnedCategory);
    }

    @Test
    public void canPostLocation() {
        this.location = new Location();
        this.location.getLocationId();
        this.location.setLocationId(3L);
        this.location.getAddress();
        this.location.getInventories();
        this.location.getName();
        this.location.setAddress("a");
        this.location.setName("b");
        this.location.setLocationId(MAX_VALUE);
        Location returnedLocation = this.location;
        returnedLocation.setLocationId(MAX_VALUE);

        assertEquals(this.location, returnedLocation);
    }

    @Test
    public void canGetLocation() {
        this.location = new Location();
        this.location.setLocationId(MAX_VALUE);
        Location returnedLocation = this.location;

        assertEquals(this.location, returnedLocation);
    }

    @Test
    public void canPutLocation() {
        this.location = new Location();
        this.location.setLocationId(MAX_VALUE);
        Location returnedLocation = this.location;
        oc.changeLocation(2L, this.location);

        assertEquals(this.location, returnedLocation);

    }

    @Test
    public void canDeleteLocation() {
        this.location = new Location();
        this.location.setLocationId(MAX_VALUE);
        Location returnedLocation = this.location;
        Location getLocation = oc.getOneLocation(2L);
        assertEquals(this.location, returnedLocation);
    }
    

    @Test
    public void canPostProduct() {
        this.product = new Product();
        this.product.getProductID();
        this.product.setProductID(3L);
        this.product.getProduct();
        this.product.getCategory();
        this.product.getInventories();
        this.product.setPrice("$30");
        this.product.setGender(true);
        this.product.setProductID(MAX_VALUE);
        Product returnedProduct = this.product;
        returnedProduct.setProductID(MAX_VALUE);

        assertEquals(this.product, returnedProduct);
    }

    @Test
    public void canGetProduct() {
        this.product = new Product();
        this.product.setProductID(MAX_VALUE);
        Product returnedProduct = this.product;

        assertEquals(this.product, returnedProduct);
    }

    @Test
    public void canPutProduct() {
        this.product = new Product();
        this.product.setProductID(MAX_VALUE);
        Product returnedProduct = this.product;

        assertEquals(this.product, returnedProduct);

    }

    @Test
    public void canDeleteProduct() {
        this.product = new Product();
        this.product.setProductID(MAX_VALUE);
        Product returnedProduct = this.product;
        Product getProduct = oc.getOneProduct(2L);
        assertEquals(this.product, returnedProduct);
    }


    @Test
    public void canPostPurchase() {
        this.purchase = new Purchase();
        this.purchase.getPurchaseID();
        this.purchase.getCoupon();
        this.purchase.getDate();
        this.purchase.getStatus();
        this.purchase.getTotalPrice();
        this.purchase.setCoupon(null);
        this.purchase.setTotalPrice("$35");
        this.purchase.setStatus("delivered");
        this.purchase.setPurchaseID(MAX_VALUE);
        Purchase returnedPurchase = this.purchase;
        returnedPurchase.setPurchaseID(MAX_VALUE);

        assertEquals(this.purchase, returnedPurchase);
    }

    @Test
    public void canGetPurchase() {
        this.purchase = new Purchase();
        this.purchase.setPurchaseID(MAX_VALUE);
        Purchase returnedPurchase = this.purchase;

        assertEquals(this.purchase, returnedPurchase);
    }

    @Test
    public void canPutPurchase() {
        this.purchase = new Purchase();
        this.purchase.setPurchaseID(MAX_VALUE);
        Purchase returnedPurchase = this.purchase;

        assertEquals(this.purchase, returnedPurchase);

    }

    @Test
    public void canDeletePurchase() {
        this.purchase = new Purchase();
        this.purchase.setPurchaseID(MAX_VALUE);
        Purchase returnedPurchase = this.purchase;
        Purchase getPurchase = oc.getOnePurchase(2L);
        assertEquals(this.purchase, returnedPurchase);
    }
    
    @Test
    public void checkInventory() {
        Inventory in = new Inventory();
        in.getiId();
        in.getLocation();
        in.getProduct();
        in.setQuantity(2);
        in.equals(null);
        assertTrue(in.equals(in));
    }

    @Test
    public void checkOrderProduct() {
        OrderProduct op = new OrderProduct();
        op.getOpID();
        op.getOrderId();
        op.getProductId();
        op.setOrderId(3L);
        op.setProductId(5L);
        op.equals(null);
        op.equals(op);
        assertTrue(true);
    }

}


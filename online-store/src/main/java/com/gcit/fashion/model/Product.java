package com.gcit.fashion.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {

    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productID;

    @Column
    private String product;

    @Column
    private String price;

    @Column
    private Boolean gender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

//     FIXME
//    @ManyToOne(fetch = FetchType.LAZY)
//    private Inventory inventory;

    @ManyToMany(mappedBy = "products")
    private Set<Purchase> purchases;

    public Product() {}

    public Set<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(Set<Purchase> purchases) {
        this.purchases = purchases;
    }

    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long productID) {
        this.productID = productID;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Boolean isGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Boolean getGender() {
        return gender;
    }

//    public Inventory getInventory() {
//        return inventory;
//    }

//    public void setInventory(Inventory inventory) {
//        this.inventory = inventory;
//    }
}

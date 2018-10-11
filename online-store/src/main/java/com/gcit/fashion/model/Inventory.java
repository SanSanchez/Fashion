package com.gcit.fashion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Inventory {

    @Id
    @Column(name = "inventory_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long inventoryId;

    @Column
    private String address;

    @Column(name = "location_name")
    private String locationName;

    @Column
    private Integer quantity;

    @JoinColumn(
        name = "product_id",
        nullable = false,
        insertable = false,
        updatable = false)
    @OneToMany(fetch = FetchType.LAZY)
    private Set<Product> products;

    public Inventory() {}

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Long getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(Long inventoryId) {
        this.inventoryId = inventoryId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }
}

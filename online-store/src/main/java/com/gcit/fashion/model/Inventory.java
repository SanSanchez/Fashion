package com.gcit.fashion.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Inventory {

    @EmbeddedId
    private InventoryId iId;

    @JoinColumn(
            name = "Location_id",
            nullable = false,
            insertable = false,
            updatable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Location location;

//    @JoinColumn(
//            name = "product_id",
//            nullable = false,
//            insertable = false,
//            updatable = false)
//    @OneToMany(fetch = FetchType.LAZY)
//    private Set<Product> products;

    @Column
    private Integer quantity;

    public Inventory() {}

    public InventoryId getiId() {
        return iId;
    }

    public void setiId(InventoryId iId) {
        this.iId = iId;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

//    public Set<Product> getProducts() {
//        return products;
//    }
//
//    public void setProducts(Set<Product> products) {
//        this.products = products;
//    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Inventory)) return false;
        Inventory inventory = (Inventory) o;
        return Objects.equals(getiId(), inventory.getiId()) &&
                Objects.equals(getLocation(), inventory.getLocation()) &&
//                Objects.equals(getProducts(), inventory.getProducts()) &&
                Objects.equals(getQuantity(), inventory.getQuantity());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getiId(), getLocation(), getQuantity());
    }
}

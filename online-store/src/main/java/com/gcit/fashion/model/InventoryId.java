package com.gcit.fashion.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class InventoryId implements Serializable {

    @Column(name = "Product_id")
    private Long productId;

    @Column(name = "Location_id")
    private Long locationId;

    public InventoryId() {}

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getLocationId() {
        return locationId;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof InventoryId)) return false;
        InventoryId that = (InventoryId) o;
        return Objects.equals(getProductId(), that.getProductId()) &&
                Objects.equals(getLocationId(), that.getLocationId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProductId(), getLocationId());
    }
}

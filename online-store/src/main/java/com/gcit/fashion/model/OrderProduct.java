package com.gcit.fashion.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Order_has_Product")
public class OrderProduct {

    @EmbeddedId
    private OrderProductId opID;

    @JoinColumn(name = "Order_id",
            nullable = false,
            insertable = false,
            updatable = false)
    private Long orderId;

    @JoinColumn(name = "Product_id",
            nullable = false,
            insertable = false,
            updatable = false)
    private Long productId;

    public OrderProduct() {}

    public OrderProductId getOpID() {
        return opID;
    }

    public void setOpID(OrderProductId opID) {
        this.opID = opID;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderProduct)) return false;
        OrderProduct that = (OrderProduct) o;
        return Objects.equals(getOpID(), that.getOpID()) &&
                Objects.equals(getOrderId(), that.getOrderId()) &&
                Objects.equals(getProductId(), that.getProductId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOpID(), getOrderId(), getProductId());
    }
}

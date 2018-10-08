package com.gcit.fashion.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long purchaseId;

    @Column(name  = "total_price")
    private String totalPrice;

    @Column
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column
    private String status;

    @OneToOne(
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;

    public Purchase() {}

    public Long getPurchaseID() {
        return purchaseId;
    }

    public void setPurchaseID(Long purchaseId) {
        this.purchaseId = purchaseId;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Coupon getCoupon() {
        return coupon;
    }

    public void setCoupon(Coupon coupon) {
        this.coupon = coupon;
    }
}

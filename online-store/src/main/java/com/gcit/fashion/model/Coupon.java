package com.gcit.fashion.model;

import javax.persistence.*;

@Entity
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "coupon_id")
    private Long couponId;

    @Column
    private String code;

    @Column(name = "discount_pct")
    private String discountPct;

    @Column(name = "min_purchase_val")
    private Integer minPurchaseVal;

    @OneToOne(
            fetch = FetchType.LAZY,
            mappedBy = "coupon",
            cascade = CascadeType.ALL)
    private Purchase purchase;

    public Coupon() {}

    public Long getCouponId() {
        return couponId;
    }

    public void setCouponId(Long couponId) {
        this.couponId = couponId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDiscountPct() {
        return discountPct;
    }

    public void setDiscountPct(String discountPct) {
        this.discountPct = discountPct;
    }

    public Integer getMinPurchaseVal() {
        return minPurchaseVal;
    }

    public void setMinPurchaseVal(Integer minPurchaseVal) {
        this.minPurchaseVal = minPurchaseVal;
    }
}

package com.gcit.fashion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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

    public Coupon() {}

    public Coupon(String code, String discountPct, Integer minPurchaseVal) {
        this.code = code;
        this.discountPct = discountPct;
        this.minPurchaseVal = minPurchaseVal;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Coupon)) return false;
        Coupon coupon = (Coupon) o;
        return Objects.equals(getCouponId(), coupon.getCouponId()) &&
                Objects.equals(getCode(), coupon.getCode()) &&
                Objects.equals(getDiscountPct(), coupon.getDiscountPct()) &&
                Objects.equals(getMinPurchaseVal(), coupon.getMinPurchaseVal());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCouponId(), getCode(), getDiscountPct(), getMinPurchaseVal());
    }
}

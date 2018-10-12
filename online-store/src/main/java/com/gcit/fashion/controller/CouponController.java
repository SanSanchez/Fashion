package com.gcit.fashion.controller;

import com.gcit.fashion.dao.CouponDao;
import com.gcit.fashion.exceptions.ResourceNotFoundException;
import com.gcit.fashion.model.Coupon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "online_store")
@CrossOrigin
public class CouponController {

    @Autowired
    CouponDao cpDao;

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
            value = "/coupon",
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



}
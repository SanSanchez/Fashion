package com.gcit.fashion.dao;

import com.gcit.fashion.model.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponDao extends JpaRepository<Coupon, Long> {

}
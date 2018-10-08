package com.gcit.fashion;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertTrue;

import com.gcit.fashion.controller.OnlineController;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

//@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCoupons {

    @Autowired
    OnlineController oc;

    @Test
    public void canReadCoupon() {
        assertTrue(!oc.getCoupons().isEmpty());
    }

}

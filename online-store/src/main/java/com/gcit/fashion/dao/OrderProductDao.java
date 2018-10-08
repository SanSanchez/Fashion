package com.gcit.fashion.dao;

import com.gcit.fashion.model.OrderProduct;
import com.gcit.fashion.model.OrderProductId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductDao extends JpaRepository<OrderProduct, OrderProductId> {

}
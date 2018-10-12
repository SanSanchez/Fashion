package com.gcit.fashion.controller;

import com.gcit.fashion.dao.PurchaseDao;
import com.gcit.fashion.exceptions.ResourceNotFoundException;
import com.gcit.fashion.model.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(value = "online_store")
@CrossOrigin
public class PurchaseController {

    @Autowired
    PurchaseDao pcDao;

    @RequestMapping(value = "/purchases")
    @ResponseStatus(HttpStatus.OK)
    public List<Purchase> getPurchases() {
        return pcDao.findAll();
    }

    @RequestMapping(value = "/purchases/{purchaseId}")
    @ResponseStatus(HttpStatus.OK)
    public Purchase getOnePurchase(@PathVariable Long purchaseId) {
        return pcDao.findById(purchaseId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/purchase",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Purchase makePurchase(@Valid @RequestBody Purchase purchase) {
        // FIXME: How do we want to handle this? Do we want the object to contain all objects purchased?
        // What does the object being passed in look like and what should it be?

        return pcDao.save(purchase);
    }

    @Transactional
    @RequestMapping(
            value = "/purchases/{purchaseId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deletePurchase(@Valid @PathVariable Long purchaseId) {
        pcDao.deleteById(purchaseId);
    }

    @Transactional
    @RequestMapping(
            value = "/purchases/{purchaseId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Purchase changePurchase(@Valid @PathVariable Long purchaseId, @RequestBody Purchase newPurchase) {
        Purchase purchase = pcDao.findById(purchaseId).orElse(null);

        if (purchase != null) {
            newPurchase.setPurchaseId(purchase.getPurchaseId());
            purchase = newPurchase;
        } else {
            throw new ResourceNotFoundException("That purchase cannot be found.");
        }

        return pcDao.save(purchase);
    }
}
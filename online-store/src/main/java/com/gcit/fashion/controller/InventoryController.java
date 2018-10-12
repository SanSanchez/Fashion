package com.gcit.fashion.controller;

import com.gcit.fashion.dao.InventoryDao;
import com.gcit.fashion.exceptions.ResourceNotFoundException;
import com.gcit.fashion.model.Inventory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "online_store")
@CrossOrigin
public class InventoryController {

    @Autowired
    InventoryDao iDao;

    @RequestMapping(value = "/inventories")
    @ResponseStatus(HttpStatus.OK)
    public List<Inventory> getInventories() {
        return iDao.findAll();
    }

    @RequestMapping(value = "/inventories/{inventoryId}")
    @ResponseStatus(HttpStatus.OK)
    public Inventory getOneInventory(@Valid @PathVariable Long inventoryId) {
        return iDao.findById(inventoryId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/inventory",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Inventory makeInventory(@Valid @RequestBody Inventory inventory) {
        return iDao.save(inventory);
    }

    @Transactional
    @RequestMapping(
            value = "/inventories/{inventoryId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteInventory(@Valid @PathVariable Long inventoryId) {
        iDao.deleteById(inventoryId);
    }

    @Transactional
    @RequestMapping(
            value = "/inventories/{inventoryId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Inventory changeInventory(@Valid @PathVariable Long inventoryId, @RequestBody Inventory newInventory) {
        Inventory inventory = iDao.findById(inventoryId).orElse(null);

        if (inventory != null) {
            newInventory.setInventoryId(inventory.getInventoryId());
            inventory = newInventory;
        } else {
            throw new ResourceNotFoundException("Inventory not found.");
        }

        return iDao.save(inventory);
    }
}

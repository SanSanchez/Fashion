package com.gcit.fashion.controller;

import com.gcit.fashion.dao.LocationDao;
import com.gcit.fashion.exceptions.ResourceNotFoundException;
import com.gcit.fashion.model.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "online_store")
@CrossOrigin
public class LocationController {

    @Autowired
    LocationDao lDao;

    @RequestMapping(value = "/locations")
    @ResponseStatus(HttpStatus.OK)
    public List<Location> getLocations() {
        return lDao.findAll();
    }

    @RequestMapping(value = "/locations/{locationId}")
    @ResponseStatus(HttpStatus.OK)
    public Location getOneLocation(@Valid @PathVariable Long locationId) {
        return lDao.findById(locationId).orElse(null);
    }

    @Transactional
    @RequestMapping(
            value = "/location",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Location makeLocation(@Valid @RequestBody Location location) {
        return lDao.save(location);
    }

    @Transactional
    @RequestMapping(
            value = "/locations/{locationId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteLocation(@Valid @PathVariable Long locationId) {
        lDao.deleteById(locationId);
    }

    @Transactional
    @RequestMapping(
            value = "/locations/{locationId}",
            method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public Location changeLocation(@Valid @PathVariable Long locationId, @RequestBody Location newLocation) {
        Location location = lDao.findById(locationId).orElse(null);

        if (location != null) {
            newLocation.setLocationId(location.getLocationId());
            location = newLocation;
        } else {
            throw new ResourceNotFoundException("Location not found.");
        }

        return lDao.save(location);
    }
}

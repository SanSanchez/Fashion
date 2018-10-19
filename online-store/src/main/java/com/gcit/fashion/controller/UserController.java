package com.gcit.fashion.controller;

import com.gcit.fashion.dao.UserDao;
import com.gcit.fashion.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "online_store")
@CrossOrigin
public class UserController {

    @Autowired
    UserDao uDao;

    @RequestMapping(value = "/users")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getUsers() {
        return uDao.findAll();
    }

    @RequestMapping(value = "/users/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public User getOneUser(@Valid @PathVariable Long userId) {
        return uDao.findById(userId).orElse(null);
    }

    @RequestMapping(value = "/users/user/{email}")
    @ResponseStatus(HttpStatus.OK)
    public User getOneUserByEmail(@Valid @PathVariable String email) {
        return uDao.findByEmail(email);
    }

    @Transactional
    @RequestMapping(
            value = "/user",
            method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public User makeUser(@Valid @RequestBody User user) {
        return uDao.save(user);
    }

    @Transactional
    @RequestMapping(
            value = "/users/{userId}",
            method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteUser(@Valid @PathVariable Long userId) {
        uDao.deleteById(userId);
    }

}
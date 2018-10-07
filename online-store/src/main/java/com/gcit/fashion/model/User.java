package com.gcit.fashion.model;

import javax.persistence.*;
//import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String role;

    @Column
    private String password;

//    @OneToMany(
//            fetch = FetchType.LAZY,
//            mappedBy = "user",
//            cascade = CascadeType.ALL)
//    private Set<Purchase> purchases;

    public User() {}

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public Set<Purchase> getPurchases() {
//        return purchases;
//    }

//    public void setPurchases(Set<Purchase> purchases) {
//        this.purchases = purchases;
//    }
}

package com.gcit.fashion.model;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table
public class Category {

    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column
    private String description;

    public Category() {}

    public Category(String description) {
        this.description = description;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Category)) return false;
        Category category = (Category) o;
        return Objects.equals(getCategoryId(), category.getCategoryId()) &&
                Objects.equals(getDescription(), category.getDescription());
    }

}

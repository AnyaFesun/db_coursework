package com.example.coursework.entity;


import jakarta.persistence.*;

import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "survey")
@SequenceGenerator(name = "survey_sequence", sequenceName = "survey_sequence", allocationSize = 1)
public class SurveyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "survey_sequence")
    private Long id;
    private String title;
    private String description;
    private Date created = Date.valueOf(LocalDate.now());


    public SurveyEntity(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return created;
    }

    public void setDate(Date created) {
        this.created = created;
    }
}

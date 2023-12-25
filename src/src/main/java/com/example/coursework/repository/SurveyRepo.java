package com.example.coursework.repository;

import com.example.coursework.entity.SurveyEntity;
import org.springframework.data.repository.CrudRepository;

public interface SurveyRepo extends CrudRepository<SurveyEntity, Long> {
    SurveyEntity findByTitle(String title);
}

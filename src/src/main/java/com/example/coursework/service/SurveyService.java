package com.example.coursework.service;

import com.example.coursework.entity.SurveyEntity;
import com.example.coursework.exeptions.SurveyNotExistException;
import com.example.coursework.repository.SurveyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SurveyService {
    @Autowired
    private SurveyRepo surveyRepository;
    public void add(SurveyEntity survey) {
        surveyRepository.save(survey);
    }
    public SurveyEntity get(Long id) throws SurveyNotExistException {
        if(surveyRepository.findById(id).isEmpty()){
            throw new SurveyNotExistException("Опитування з таким id не існує!");
        }
        return surveyRepository.findById(id).get();
    }

    public Long delete(Long id) throws SurveyNotExistException {
        if(surveyRepository.findById(id).isEmpty()){
            throw new SurveyNotExistException("Ви не можете видалити це опитування, бо його не існує!");
        }
        surveyRepository.deleteById(id);
        return id;
    }
    public Long deleteByTitle(String title){
        SurveyEntity survey = surveyRepository.findByTitle(title);
        surveyRepository.delete(survey);
        return survey.getId();
    }

    public void update(Long id, SurveyEntity updateSurvey) throws SurveyNotExistException {
        if(surveyRepository.findById(id).isEmpty()){
            throw new SurveyNotExistException("Опитування з таким id не існує! Ви не можете оновити дані для не існуючого опитування!");
        }
        SurveyEntity survey = surveyRepository.findById(id).get();
        survey.setTitle(updateSurvey.getTitle());
        survey.setDescription(updateSurvey.getDescription());
        surveyRepository.save(survey);
    }
}

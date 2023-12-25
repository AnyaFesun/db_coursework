package com.example.coursework.controller;

import com.example.coursework.entity.SurveyEntity;
import com.example.coursework.exeptions.SurveyNotExistException;
import com.example.coursework.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/survey")
public class SurveyController {
    @Autowired
    private SurveyService surveyService;

    @PostMapping
    public ResponseEntity createSurvey(@RequestBody SurveyEntity survey){
        try{
            surveyService.add(survey);
            return ResponseEntity.ok("Опитування успішно збережене");
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Помилка додавання опитування");
        }

    }

    @GetMapping
    public ResponseEntity getSurvey(@RequestParam Long id){
        try{
            return ResponseEntity.ok(surveyService.get(id));
        }catch (SurveyNotExistException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Виникла помилка");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteByIdSurvey(@PathVariable Long id){
        try{
            return ResponseEntity.ok("Видалено опитування з значенням id: " + surveyService.delete(id));
        }catch (SurveyNotExistException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Помилка");
        }
    }

    @DeleteMapping("/title/{title}")
    public ResponseEntity deleteByTitleSurvey(@PathVariable String title){
        try{

            return ResponseEntity.ok("Видалено опитування з значенням id: " + surveyService.deleteByTitle(title) + " та назвою: " + title);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Помилка");
        }
    }
    @PutMapping
    public ResponseEntity updateSurvey(@RequestParam Long id, @RequestBody SurveyEntity survey){
        try {
            surveyService.update(id, survey);
            return ResponseEntity.ok("Опитування було оновлено успішно");
        }catch (SurveyNotExistException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Помилка оновлення опитування");
        }
    }

}
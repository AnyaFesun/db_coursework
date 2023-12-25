# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
    
```sql

    -- MySQL Workbench Forward Engineering

    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------

    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
    USE `mydb` ;

    -- -----------------------------------------------------
    -- Table `mydb`.`User`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`User` (
    `id` INT NOT NULL,
    `firstname` MEDIUMTEXT NULL,
    `lastname` MEDIUMTEXT NULL,
    `nickname` MEDIUMTEXT NULL,
    `email` MEDIUMTEXT NULL,
    `password` MEDIUMTEXT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`),
    INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_User_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Role`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
    `id` INT NOT NULL,
    `name` TINYTEXT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`User`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`User` (
    `id` INT NOT NULL,
    `firstname` MEDIUMTEXT NULL,
    `lastname` MEDIUMTEXT NULL,
    `nickname` MEDIUMTEXT NULL,
    `email` MEDIUMTEXT NULL,
    `password` MEDIUMTEXT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`),
    INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_User_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Survey`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Survey` (
    `id` INT NOT NULL,
    `title` MEDIUMTEXT NULL,
    `description` LONGTEXT NULL,
    `created` DATE NULL,
    `User_id` INT NOT NULL,
    PRIMARY KEY (`id`, `User_id`),
    INDEX `fk_Survey_User1_idx` (`User_id` ASC) VISIBLE,
    CONSTRAINT `fk_Survey_User1`
        FOREIGN KEY (`User_id`)
        REFERENCES `mydb`.`User` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Question`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
    `id` INT NOT NULL,
    `text` MEDIUMTEXT NULL,
    `type` TINYTEXT NULL,
    `Survey_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Survey_id`),
    INDEX `fk_Question_Survey1_idx` (`Survey_id` ASC) VISIBLE,
    CONSTRAINT `fk_Question_Survey1`
        FOREIGN KEY (`Survey_id`)
        REFERENCES `mydb`.`Survey` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Answer`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Answer` (
    `id` INT NOT NULL,
    `text` MEDIUMTEXT NULL,
    `User_id` INT NOT NULL,
    `Question_id` INT NOT NULL,
    PRIMARY KEY (`id`, `User_id`, `Question_id`),
    INDEX `fk_Answer_User_idx` (`User_id` ASC) VISIBLE,
    INDEX `fk_Answer_Question1_idx` (`Question_id` ASC) VISIBLE,
    CONSTRAINT `fk_Answer_User`
        FOREIGN KEY (`User_id`)
        REFERENCES `mydb`.`User` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Answer_Question1`
        FOREIGN KEY (`Question_id`)
        REFERENCES `mydb`.`Question` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Permission`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
    `id` INT NOT NULL,
    `name` TINYTEXT NOT NULL,
    PRIMARY KEY (`id`, `name`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Grant`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
    `id` INT NOT NULL,
    `appointed` DATE NULL,
    `Role_id` INT NOT NULL,
    `Permission_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`, `Permission_id`),
    INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
    INDEX `fk_Grant_Permission1_idx` (`Permission_id` ASC) VISIBLE,
    CONSTRAINT `fk_Grant_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Grant_Permission1`
        FOREIGN KEY (`Permission_id`)
        REFERENCES `mydb`.`Permission` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`State`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`State` (
    `id` INT NOT NULL,
    `name` TINYTEXT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Action`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Action` (
    `id` INT NOT NULL,
    `date` DATE NULL,
    `Survey_id` INT NOT NULL,
    `State_id` INT NOT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Survey_id`, `State_id`, `Role_id`),
    INDEX `fk_Action_Survey1_idx` (`Survey_id` ASC) VISIBLE,
    INDEX `fk_Action_State1_idx` (`State_id` ASC) VISIBLE,
    INDEX `fk_Action_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_Action_Survey1`
        FOREIGN KEY (`Survey_id`)
        REFERENCES `mydb`.`Survey` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Action_State1`
        FOREIGN KEY (`State_id`)
        REFERENCES `mydb`.`State` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Action_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
        ENGINE = InnoDB;

    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


```

## RESTfull сервіс для управління даними

RESTfull API для управління даними таблиці Survey створеної в MySQL 
було створено за допомогою фреймворку Spring Boot на мові Java. 
RESTfull API представляє собою CRUD застосунок. 

### Файл .gradle з встановленими залежностями

```
    plugins {
	id 'java'
	id 'org.springframework.boot' version '3.1.7'
	id 'io.spring.dependency-management' version '1.1.4'
}

group = 'com.example'
version = '0.0.1-SNAPSHOT'

java {
	sourceCompatibility = '17'
}

repositories {
	mavenCentral()
}


dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'mysql:mysql-connector-java:8.0.28'
	runtimeOnly 'mysql:mysql-connector-java'
	developmentOnly 'org.springframework.boot:spring-boot-devtools'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('bootBuildImage') {
	builder = 'paketobuildpacks/builder-jammy-base:latest'
}

tasks.named('test') {
	useJUnitPlatform()
}
```

### Підключення бази даних

```
    spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/survey?useUnicode=true&useSSL=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=8117

```

### Основний клас для запуску API
```
    package com.example.coursework;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CourseworkApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseworkApplication.class, args);
	}

}
    }
```

### Клас сутності для взаємодії з БД

```
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
```

### Контролер для роботи з опитуваннями

```
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
```

### Репозиторій для роботи з опитуванняи

```
   package com.example.coursework.repository;

import com.example.coursework.entity.SurveyEntity;
import org.springframework.data.repository.CrudRepository;

public interface SurveyRepo extends CrudRepository<SurveyEntity, Long> {
    SurveyEntity findByTitle(String title);
}
```

### Сервіс для роботи з опитуваннями

```
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

```

### Виняткові ситуації, які можуть виникнути

```
   package com.example.coursework.exeptions;

public class SurveyNotExistException  extends Exception{
    public SurveyNotExistException(String message){
        super(message);
    }
}
```

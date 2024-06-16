package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.ResultAnalysis;
import com.example.demo.services.resultAnalysisService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/result")
public class resultAnalysisController {
    @Autowired
    resultAnalysisService resultAnalysisService;

    @PostMapping(path = "/{userName}")
    public ResultAnalysis saveResult(@PathVariable("userName") String userName, @RequestBody ResultAnalysis result) {
        return this.resultAnalysisService.saveResult(userName, result);
    }
}
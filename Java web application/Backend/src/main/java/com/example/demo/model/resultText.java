package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "TextAnalyzedResults")
public class resultText {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String scoreTag, irony, subjectivity, agreement;
    private byte confidence;
    public String getScoreTag() {
        return scoreTag;
    }
    public String getIrony() {
        return irony;
    }
    public String getSubjectivity() {
        return subjectivity;
    }
    public String getAgreement() {
        return agreement;
    }
    public byte getConfidence() {
        return confidence;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private client cliente;
    public resultText(String scoreTag, String irony, String subjectivity, String agreement, byte confidence){   
        this.scoreTag=scoreTag;
        this.irony=irony;
        this.subjectivity=subjectivity;
        this.agreement=agreement;
        this.confidence=confidence;
    }
    public void setClient(client cliente){
        this.cliente=cliente;
    }
}

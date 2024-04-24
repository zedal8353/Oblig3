package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Ticket")
public class Ticket {
    @Id
    @GeneratedValue
    private Long id;
    private String movie;
    private Integer  antall;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;

    public Ticket(String movie, Integer antall, String fornavn, String etternavn, String telefonnr, String epost) {
        this.movie = movie;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "movie='" + movie+ '\'' +
                ", antall=" + antall +
                ", fornavn='" + fornavn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", telefonnr='" + telefonnr + '\'' +
                ", epost='" + epost + '\'' +
                '}';
    }
}
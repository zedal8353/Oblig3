package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

@RestController

public class TicketController {

    @Autowired
    TicketRepository ticketRepository;

    @PostMapping("/ticketsToJava")
    public void lagre_i_java(Ticket new_ticket) {
        ticketRepository.lagre_i_java(new_ticket);
    }

    @GetMapping("/get_tickets2")
    public List<Ticket> get_tickets2() {
        return ticketRepository.getEveryticket();
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        ticketRepository.getEveryticket();
    }
}
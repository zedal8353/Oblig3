package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {

private final JdbcTemplate db;

    public TicketRepository(JdbcTemplate db) {
        this.db = db;
    }


    public void lagre_i_java (Ticket new_ticket){
    String sql="INSERT INTO TICKET (movie, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
    db.update(sql, new_ticket.getMovie(),new_ticket.getAntall(),new_ticket.getFornavn(),new_ticket.getEtternavn(),new_ticket.getTelefonnr(),new_ticket.getEpost());
}
    public List<Ticket> getEveryticket() {
        String sql = "SELECT * FROM TICKET ORDER BY etternavn";
        return db.query(sql, new BeanPropertyRowMapper<>(Ticket.class));
    }


}

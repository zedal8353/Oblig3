        CREATE TABLE TICKET
        (id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
        movie varchar(255) NOT NULL,
        antall INTEGER NOT NULL,
        fornavn varchar(255) NOT NULL,
        etternavn varchar(255) NOT NULL,
        telefonnr INTEGER NOT NULL,
        epost varchar(255) NOT NULL,

PRIMARY KEY (id) /*movie, antall, fornavn, etternavn, telefonnr, epost*/
        );
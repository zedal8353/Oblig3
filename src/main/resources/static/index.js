$(document).ready(function() {
    var tickets = [];

    $('#buyTicketButton').click(function() {
        // Clear any previous error messages
        clearErrorMessages();

        // Get input values
        var antall = $('#antall').val().trim();
        var fornavn = $('#fornavn').val().trim();
        var etternavn = $('#etternavn').val().trim();
        var telefonnr = $('#telefonnr').val().trim();
        var epost = $('#epost').val().trim();
        var movie = $('#movie').val().trim();

        // Validate inputs
        if (!antall) {
            displayErrorMessage('#antall-error', 'Må skrive noe inn i antall.');
            return;
        }
        if (!fornavn) {
            displayErrorMessage('#fornavn-error', 'Må skrive noe inn i fornavnet.');
            return;
        }
        if (!etternavn) {
            displayErrorMessage('#etternavn-error', 'Må skrive noe inn i etternavnet.');
            return;
        }
        if (!validatePhoneNumber(telefonnr)) {
            displayErrorMessage('#telefonnr-error', 'Ugyldig telefonnummer (8 siffer).');
            return;
        }
        if (!validateEmail(epost)) {
            displayErrorMessage('#epost-error', 'Ugyldig e-postadresse.');
            return;
        }

        // Create ticket object
        var ticket = {
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
            movie: movie
        };

        // Add ticket to tickets array
        tickets.push(ticket);
        updateTicketList();

        // Send ticket information to the server
        $.post("/ticketsToJava", ticket, function(data) {
            // Additional functionality after receiving response from server, if needed
        });

        // Clear input fields
        clearInputFields();
    });

    $('#deleteAllTickets').click(function() {
        deleteAllTickets();
    });

    function deleteAllTickets() {
        $.get("/slettAlle", function() {
            $("#billettene").html("");
        });
    }

    function validatePhoneNumber(phoneNumber) {
        var re = /^\d{8}$/;
        return re.test(phoneNumber);
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function updateTicketList() {
        var ticketListElement = $('#ticketList');
        ticketListElement.empty();

        tickets.forEach(function(ticket) {
            var listItem = $('<li>').text(
                'Fornavn: ' + ticket.fornavn +
                ', Etternavn: ' + ticket.etternavn +
                ', Telefonnr: ' + ticket.telefonnr +
                ', Epost: ' + ticket.epost +
                ', Film: ' + ticket.movie +
                ', Antall: ' + ticket.antall
            );
            ticketListElement.append(listItem);
        });
    }

    function clearErrorMessages() {
        $('.error').text('');
    }

    function clearInputFields() {
        $('#antall, #fornavn, #etternavn, #telefonnr, #epost, #movie').val('');
    }

    function get_mytickets() {
        $.get("/get_tickets2", function(data) {
            formatGetTable(data);
        });
    }

    function formatGetTable(billettene) {
        var ut = "<table class='table table-striped'><tr><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
            "<th>Telefonnr</th><th>E-post</th><th>Film</th></tr>";
        for (const billett of billettene) {
            ut += "<tr><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td>" +
                "<td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td><td>" + billett.movie + "</td></tr>";
        }
        ut += "</table>";
        $("#billettene").html(ut);
    }

    // Initialize ticket list when the page loads
    get_mytickets();
});

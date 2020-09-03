class contact {
    constructor(lastName, firstName, mail = "") {
        this.lastName = this.lengthChecker(lastName);
        this.firstName = this.lengthChecker(firstName);
        this.mail = this.emailChecker(mail);
    }

    lengthChecker(entry) {
        if (entry.length < 2) {
            let userEntry = window.prompt("Saisie invalide, Entrer un nom valide");
            return this.lengthChecker(userEntry);
        }
        return entry;
    }

    displayInfo() {
        return "Nom : " + this.lastName + " || Prénom: " + this.firstName + " || email: " + this.mail;
    }

    emailChecker(email) {
        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regExpEmail.test(email)) {
            return email;
        }
        let userEntry = window.prompt("Entrer un mail valide");
        return this.emailChecker(userEntry);
    }
}



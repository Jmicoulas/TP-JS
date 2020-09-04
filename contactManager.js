
class ContactManager{
  constructor(contacts=[])
  {
    this.contacts=contacts;
  }

  displayMenu(){
    let choice = window.prompt("* 1 - Liste des contacts \n* 2 - Ajouter un nouveau contact \n* 3 - Modifier un contact existant \n* 4 - Supprimer un contact \n* 5 - Quitter le gestionnaire de contact");
    //boucler tant que l'on ne choisis pas entre 1 et 5 et exécuter la fonction et retour menu sauf 5
    switch(choice){
      case '1':
        this.contactListing();
        break;
      case '2':
        this.addContact();
        break;
      case '3':
        this.modifyContact();
        break;
      case '4':
        this.removeContact();
        break;
      case'5':
        break;
      default:
        this.displayMenu();
    }
  }

  contactListing(){
    // boucle sur this.contacts pour récup chaque contact et display.contact sur contacts
    for (let i = 0; i < this.contacts.length; i++){
      console.log(i + " - Nom : " + this.contacts[i].lastName + " || Prénom: " + this.contacts[i].firstName + " || email: " + this.contacts[i].mail);//on parcourt le array
    }
    this.displayMenu();//this. pour rappeler une fonction dans la classe
  }

  addContact(){
    let prenom = window.prompt("Veuillez entrer le prénom :");
    let nom = window.prompt("Veuillez entrer le nom :");
    let newContact = new contact(nom, prenom);
    this.contacts.push(newContact);
    console.clear();
    this.contactListing();
    this.displayMenu();
  }

  removeContact(){
    console.clear();
    this.contactListing();
    let id = window.prompt("Veuillez entrer le numéro du contact à supprimer");
    this.contacts.splice(parseInt(id), 1);
    console.clear();
    this.contactListing();
    this.displayMenu();
  }

  modifyContact(){
    //afficher la liste > demander quel contact modifié > quel partie du contact modifié ou tout modifié un par un > rafficher la liste et retour menu
    console.clear();
    this.contactListing();
    let choosingContact = window.prompt("Veuillez entrer le numéro du contact que vous voulez modifier "); // Comment faire pour que le choosingContact recupére un élément du array contacts?
    choosingContact = this.contacts.indexOf(parseInt(choosingContact));
    console.log(choosingContact);
    let modifyingContact = window.prompt("Que voulez-vous faire : \n* 1 - Modifié entièrement le contact\n* 2 - En modifié une partie");
    if (modifyingContact == 1) {// modifié entièrement le contact
      contact.lastName = window.prompt("Veuillez entrer un nouveau nom de famille");
      contact.firstName = window.prompt("Veuillez entrer une nouveau Prénom");
      contact.mail =  window.prompt("Veuillez entrer une nouvelle adresse mail valide");
      this.contactListing();
    } else if (modifyingContact ==2) {
      let choosingPara =  window.prompt("Que voulez-vous modifié : \n* 1 - le nom\n* 2 - le prénom\n* 3 - le mail")
      switch (choosingPara) {
        case '1':
          this.contacts.lastName = window.prompt("Veuillez entrer un nouveau nom de famille");
          console.clear();
          this.contactListing();
          this.displayMenu();
          break;
        case '2':
          this.contacts.firstName = window.prompt("Veuillez entrer une nouveau Prénom");
          console.clear();
          this.contactListing();
          this.displayMenu();
          break;
        case '3':
          this.contacts.mail =  window.prompt("Veuillez entrer une nouvelle adresse mail valide");
          console.clear();
          this.contactListing();
          this.displayMenu();
          break;
        default:
          let error = alert("Erreur, veuillez recommencer!");
          break;
      }
    }else {
      let error = alert("Erreur, veuillez recommencer!");
      this.modifyContact();
    }
    }
}




let firstContact = new contact("Doe", "John", "jdoe@hotmail.com");
let secondContact = new contact("Dupont", "Alice", "a.dupont@hotmail.com");

let contactManager = new ContactManager([firstContact,secondContact]);//on rajoute les contacts au array
contactManager.displayMenu();


// à push sur git avec comment

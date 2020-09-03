
class ContactManager{
  constructor(contacts=[])
  {
    this.contacts=contacts;
  }

  displayMenu(){
    let choice = window.prompt("* 1 - Lister les contacts \n* 2 - Ajouter un nouveau contact \n* 3 - Modifier un contact existant \n* 4 - Supprimer un contact \n* 5 - Quitter le gestionnaire de contact");
    //boucler tant que l'on ne choisis pas entre 1 et 5 et exécuter la fonction et retour menu sauf 5
    switch(choice){
      case '1':
        this.contactListing();
        break;
      case '2':
        this.addContact();
        break;
      case '3':// penser à rajouter la fonction ici
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
    let prenom = window.prompt("Entrer le prénom :");
    let nom = window.prompt("Entrer le nom :");
    let newContact = new contact(nom, prenom);
    this.contacts.push(newContact);
    this.contactListing();
    this.displayMenu();
  }

  removeContact(){
    this.contactListing();
    let id = window.prompt("Entrer le numéro du contact à supprimer");
    this.contacts.splice(parseInt(id), 1);
    this.contactListing();
    this.displayMenu();
  }

  modifyContact(){
    //afficher la liste > demander quel contact modifié > quel partie du contact modifié ou tout modifié un par un > rafficher la liste et retour menu
  }

}


let firstContact = new contact("Micoulas", "Jonathan", "j.micoulas@laposte.net");
let secondContact = new contact("Beausoleil", "Sylvia", "sy.beausoleil@laposte.net");

let contactManager = new ContactManager([firstContact,secondContact]);//on rajoute les contacts au array
contactManager.displayMenu();


// à push sur git avec comment

class ContactManager{
  constructor(contacts=[])
  {
    this.contacts=contacts;
  }

  displayMenu(){
    let choice = window.prompt("* 1 - Lister les contacts \n* 2 - Ajouter un nouveau contact \n* 3 - Modifier un contact existant \n* 4 - Supprimer un contact \n* 5 - Quitter le gestionnaire de contact");
    //boucler tant que l'on ne choisis pas entre 1 et 5 et exécuter la fonction et retour menu sauf 5
  }

  contactListing(){
    // boucle sur this.contacts pour récup chaque contact et display.contact sur contacts
  }
}

let contactManager = new ContactManager();
contactManager.displayMenu();

// à push sur git avec comment

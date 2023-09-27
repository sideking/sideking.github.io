let chapters = {
    intro : {
        titre: "Mission Reçu",
        description: "Vous avez reçu la mission de chasser un Diablos dans une région désertique. Étant membre d'une famille de chasseur vous partez vers le désert pour y rétablir l'équilibre.",
        image: "The-Hunt\Assets\Images\Diablos.jpg",
        bouton: [
            {titre: 'Se rendre sur les lieux de la quête', 'destination': 'debut'}]
    },

    debut : {
        titre: "La chasse commence",
        description: "Vous arrivez sur le lieu de la mission, vous ne voyez pas le Diablos en question et le temps presse. Prenez-vous le temps d'envoyer un éclaireur, de partir en reconnaissance vous-même ou prend tu le risque de te dépêcher pour en finir rapidement",
        image: "",
        bouton: [
            {titre: 'Vous précipitez dans le désert', 'destination': 'embuscade'}, 
            {titre: 'Envoyer un éclaireur dans le désert', 'destination': 'piste'},
            {titre: 'Partir en reconnaissance pour trouver le monstre', 'destination': 'chercher'}]
    },

    embuscade : {
        titre: "Embuscade",
        description: "Le diablos vous tend une embuscade pendant votre course erratique vers son repère. Vous mourrez avant même de comprendre ce qu'il ce passe.",
        image: "",
        bouton: [
            {titre: 'Vous êtes mort.', 'destination': 'debut'}]
    },

    piste : {
        titre: "Reconnaissance",
        description: "Vous Chercher pendant une demi-heure pour finalement trouver l'emplacement de la créature, il semble qu'elle était cachée dans le sable, attendant une proie.",
        image: "",
        bouton: [
            {titre: 'chercher les alentours', 'destination': 'chercher'}, 
            {titre: 'Commencer le combat', 'destination': 'combat'}]
    },

    chercher : {
        titre: "Chercher les alentours",
        description: "Vous Chercher les alentours et trouvez des ruines datant de temps anciens. Vous y trouvez un objet ressemblant une bombe et la mettez dans une de vos poches",
        image: "",
        bouton: [
            {titre: 'Commencer le combat', 'destination': 'combat'}]
    },

    combat : {
        titre: "Le Combat commence",
        description: "Ayant trouver l'endroit où se cachait le Diablos, vous vous approchez discretement et le prenez par surprise avec une attaque bien placé au niveau de la nuque. Le monstre se leve brusquement tout en vous précipitant plusieurs mètre dans les airs. Vous tombez sur vous pied et remaquez que le Diablos fonce vers vous. ",
        image: "",
        bouton: [
            {titre: "Tenter de bloquer l'Attaque", 'destination': 'bloquer'}, 
            {titre: "Tenter de d'esquiver l'Attaque", 'destination': 'esquiver'}]
    },

    bloquer : {
        titre: "Fer contre corne",
        description: "Voyant le Diablos se précipiter vers vous, vôtre corps réagi instinctivement et se met en position pour bloquer l'attaque du Diablos. Malheureusement pour vous, une des cornes du Diablos transperce facilement votre bouclier et se rend jusqu'à votre gorge,vous mourrez vous noyant dans votre propre sang.",
        image: "",
        bouton: [
            {titre: 'Vous êtes mort.', 'destination': 'debut'}]
    },

    esquiver : {
        titre: "Esquiver de justesse",
        description: "Voyant le Diablos se précipiter vers vous, vous vous jetez sur le côté tout en esquivant une des cornes de justesse. Après vous être relevé vous appercevez que que le Diablos est beaucoup plus puissant que ce qui était dit par le chef de la guilde et que vous ne pourrez pas gagner sans arme plus puissantes.",
        image: "",
        bouton: [
            {titre: "Continuer le combat", 'destination': 'vide'}, 
            {titre: "Utiliser la bombe", 'destination': 'boom'}]
    },

    vide : {
        titre: "Il va falloir faire sans",
        description: "Le Diablos fonce sur vous à nouveau sans vous laisser le temps de vous reposer. Vous essayer d'esquiver mais vôtre corps est trop fatiguer pour vous écouter. Vous tombez sur le côté et le monstre vous écrase avec un de ses pieds, écrasant vôtre coeur et les organe environnant.",
        image: "",
        bouton: [
            {titre: 'Vous êtes mort.', 'destination': 'debut'}]
    },

    boom : {
        titre: "Une explosion à tout casser",
        description: "Vous sortez la bombe de vôtre sac et la lancez dans la bouche du monstre, le tuant directement en vous aspergeant de sang et de cervelle.",
        image: "",
        bouton: [
            {titre: 'charcuter le monstre', 'destination': 'victoire'}]
    },

    victoire : {
        titre: "Une mission rondement menée",
        description: "Malgré l'état de vôtre personne, vous etes plutôt content d'Avoir survécu à cet affrontement.",
        image: "",
        bouton: [
            {titre: 'Vous dirigez vers vôtre prochaine mission', 'destination': 'debut'}]
    }
}


function goToChapter(chapter) {
    if (chapter) {
        console.log(chapter.titre);
        console.log(chapter.description);
        console.log(chapter.bouton);
    } else {
        console.log("------chemin inexistant------")
    }
}


console.log(goToChapter(chapters.intro))
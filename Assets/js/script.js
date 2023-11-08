const chapters = {
    intro: {
        titre: "Mission Reçu",
        description: "Vous avez reçu la mission de chasser un Diablos dans une région désertique. Étant membre d’une famille de chasseurs, vous partez vers le désert pour y rétablir l’équilibre.",
        video: "./Assets/video/monster_showcase.mp4",
        bruit: "",
        bouton: [
            { titre: 'S\'y rendre', destination: "debut" }]
    },

    debut: {
        titre: "La chasse commence",
        description: "Vous arrivez sur le lieu de la mission, vous ne voyez pas le Diablos en question et le temps presse. Prenez-vous le temps d’envoyer un éclaireur, de partir en reconnaissance vous-même ou prend-tu le risque de te dépêcher pour en finir rapidement.",
        video: "./Assets/video/welcome_my_friend.mp4",
        bruit: "",
        bouton: [
            { titre: 'Vous dépêchez', destination: "embuscade" },
            { titre: 'Envoyer un éclaireur', destination: "piste" },
            { titre: 'chercher le monstre', destination: "piste" }]
    },

    embuscade: {
        titre: "Embuscade",
        description: "Le diablos vous tend une embuscade pendant votre course erratique vers son repaire. Vous mourrez avant même de comprendre ce qu’il se passe.",
        video: "./Assets/video/ambush.mp4",
        bruit: "",
        bouton: [
            { titre: 'Vous êtes mort.', destination: "debut" }]
    },

    piste: {
        titre: "Reconnaissance",
        description: "Vous cherchez pendant une demi-heure pour finalement trouver l’emplacement de la créature, il semble qu’elle était cachée dans le sable, attendant une proie.",
        video: "./Assets/video/find_disablos.mp4",
        bruit: "",
        bouton: [
            { titre: 'chercher les alentours', destination: "chercher" },
            { titre: 'Commencer le combat', destination: "combat" }]
    },

    chercher: {
        titre: "Chercher les alentours",
        description: "Vous cherchez les alentours et trouvez des ruines datant de temps anciens. Vous y trouvez un objet ressemblant à une bombe et la mettez dans une de vos poches.",
        video: "./Assets/video/find_bomb.mp4",
        bruit: "",
        bouton: [
            { titre: 'Commencer le combat', destination: "combat" }]
    },

    combat: {
        titre: "Le Combat commence",
        description: "Ayant trouvé l’endroit où se cachait le Diablos, vous vous approchez discrètement et le prenez par surprise avec une attaque bien placée au niveau du dos. Le monstre se lève brusquement tout en vous précipitant plusieurs mètres dans les airs. Vous tombez sur vous pied et remarquez que le Diablos fonce vers vous.",
        video: "./Assets/video/surprise_attack.mp4",
        bruit: "",
        bouton: [
            { titre: "Bloquer l'attaque", destination: "bloquer" },
            { titre: "Esquiver l'attaque", destination: "esquiver" }]
    },

    bloquer: {
        titre: "Fer contre corne",
        description: "Voyant le Diablos se précipiter vers vous, votre corps réagit instinctivement et se met en position pour bloquer l’attaque du Diablos. Malheureusement pour vous, une des cornes du Diablos transperce facilement votre bouclier et se rend jusqu’à votre torse, vous mourrez en vous noyant dans votre propre sang.",
        video: "./Assets/video/block.mp4",
        bruit: "",
        bouton: [
            { titre: 'Vous êtes mort.', destination: "debut" }]
    },

    esquiver: {
        titre: "Esquiver de justesse",
        description: "Voyant le Diablos se précipiter vers vous, vous vous jetez sur le côté tout en esquivant sa queue de justesse. Après vous être relevé, vous apercevez que le Diablos est beaucoup plus puissant que ce qui était dit par le chef de la guilde et que vous ne pourrez pas gagner sans arme plus puissante.",
        video: "./Assets/video/dodge.mp4",
        bruit: "",
        bouton: [
            { titre: "Continuer le combat", destination: "vide" },
            { titre: "Utiliser la bombe", destination: "boom" }]
    },

    vide: {
        titre: "Il va falloir faire sans",
        description: "Le Diablos fonce sur vous à nouveau sans vous laisser le temps de vous reposer. Vous essayez d’esquiver, mais votre corps est trop fatigué pour vous écouter. Vous tombez sur le côté et le monstre vous frappe avec sa queue, écrasant votre cœur et les organes environnants.",
        video: "./Assets/video/no_bomb.mp4",
        bruit: "",
        bouton: [
            { titre: 'Vous êtes mort.', destination: "debut" }]
    },

    boom: {
        titre: "Une explosion à tout casser",
        description: "Vous sortez la bombe de votre sac et la lancez dans la bouche du monstre, le tuant directement en vous aspergeant de sang et de cervelle.",
        video: "./Assets/video/boom.mp4",
        bruit: "",
        bouton: [
            { titre: 'charcuter le monstre', destination: "victoire" }]
    },

    victoire: {
        titre: "Une mission rondement menée",
        description: "Malgré l’état de votre personne, vous êtes plutôt content d’avoir survécu à cet affrontement.",
        video: "./Assets/video/charcuter.mp4",
        bruit: "",
        bouton: [
            { titre: 'Retourner au village', destination: "intro" }]
    }
};

//audio pour ne pas devenir sourd
let song = document.querySelector("#musique");
song.volume = 0.1;
let questStart = "./Assets/music/Proof of a Hero.mp3";
let questEnd = "./Assets/music/Monster Hunter_ World - Quest Clear [Music].mp3";
let questFail = "./Assets/music/Monster Hunter World OST_ Quest Failed Theme QUEST FAILED [HQ _ 4K].mp3";

//twist
let twist = false;

//parent
let titre = document.querySelector("h1");
let paragraphe = document.querySelector("p");
let videoSource = document.querySelector("video");
let button_Parent = document.querySelector("#button")

function goToChapter(chapter) {
    if (chapters[chapter]) {
        //remove button
        while (button_Parent.firstChild) {
            button_Parent.removeChild(button_Parent.firstChild);
        }
        let chapterNow = chapters[chapter];
        titre.innerText = chapterNow.titre;
        videoSource.src = chapterNow.video;
        paragraphe.innerText = chapterNow.description;

        if (chapterNow == chapters.debut) {
            song.src = questStart
        } else if (chapterNow == chapters.victoire) {
            song.src = questEnd
        } else if (chapterNow == chapters.embuscade || chapterNow == chapters.bloquer || chapterNow == chapters.vide) {
            song.src = questFail
        }

        if (chapterNow == chapters.intro) {

        } else {
            song.play()
        }
        
        if (chapterNow == chapters.debut) {
            twist = false;
        }
        if (chapterNow == chapters.chercher) {
            twist = true;
        }
        if (chapterNow == chapters.esquiver && twist == false) {
            const nouveauBtn = document.createElement('button');
            nouveauBtn.textContent = chapterNow.bouton[0].titre;
            nouveauBtn.addEventListener('click', () => {
                goToChapter(chapterNow.bouton[0].destination)
            });
            button_Parent.appendChild(nouveauBtn);
        } else {
            for (const i in chapterNow.bouton) {
                const nouveauBtn = document.createElement('button');
                nouveauBtn.textContent = chapterNow.bouton[i].titre;
                nouveauBtn.addEventListener('click', () => {
                    goToChapter(chapterNow.bouton[i].destination)
                });
                button_Parent.appendChild(nouveauBtn);
            }
        }
    } else {
        console.log("------chemin inexistant------")
    };
    return ":^)"
};

goToChapter("intro");
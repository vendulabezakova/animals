/*
Tvým úkolem je vytvořit tzv. "soundboard".
Aplikaci, která při stisku kláves 1-6 přehraje zvuk
příslušného zvířátka a zvýrazní dané zvíře na obrazovce.

V CSS je připravená třída "hraje" - když ji při stisku
klávesy (onkeydown) přidáš JavaScriptem na <div>,
který má v HTML ID "zvire-x" (kde x je číslo zvířete 1-6),
zvířátko se hezky zvýrazní.

Zároveň přehraj zvuk z <audio> elementu, který má v HTML
ID "zvuk-x" (kde x je opět číslo zvířete).

Při uvolnění klávesy (onkeyup) třídu ze zvířátka opět odeber,
ať nezůstane zvýrazněné.

Když budeš mít vše hotové a budeš chtít procvičovat dál, buď
kreativní a vymysli si vlastní obrázky nebo zvuky. Zkusíš třeba
udělat piáno?
*/

const body = document.querySelector("body");

//play sound
body.addEventListener("keydown", playSound);

function playSound(event){
    //console.log(event);
    const sound = "#zvuk-"+event.key;
    const key = document.querySelector(sound);
    key.play();
}

//add highlight
body.addEventListener("keydown",pushDown);

function pushDown(event){
    const id = "#zvire-"+event.key;
    const klavesa = document.querySelector(id);
    klavesa.classList.add("hraje");
}

//remove highlight
body.addEventListener("keyup",pushUp);

function pushUp(event){
    const id = "#zvire-"+event.key;
    const klavesa = document.querySelector(id);
    klavesa.classList.remove("hraje");
}
//SCRIPT NA STRÁNCE
Object.defineProperty(performance, "now", {
    value: () => 0,
    writable: false
});//skoro patch detekce devtools (neháže chybu už😜)
 


alert("Injected!");

window.addEventListener("message", (event) =>{
//  alert("Přijata zpráva!");  //debug 
    console.log(event);
    switch (event.data.message.action) {
        case "addCoins":
            addCoins(event);
        break;
        case "addRebirths":
            addRebirths(event);
        break;
        case "blackfriday":

        break;
        case "eraseStorage":
            eraseStorage();
        break;
        default:
            console.error("Neznámá akce:" + event.data.message.action);
        break;
    }

});


function addCoins(event){
    if(confirm("Přidat " + event.data.message.amount + " napsaných JavaScriptů?")){
        const temp = clickValue;
        const temp2 = rebirths;
        clickValue = event.data.message.amount * 1.1;
        rebirths += event.data.message.amount;
        count += event.data.message.amount;
        setTimeout(() => {
//          alert("Skončil timeout negři!!!"); //debug
            alert("Vracím hodnoty: \n Hodnota kliknutí z: " + clickValue + " na " + temp + "\nA rebirthy z: " + rebirths + " na " + temp2);
            clickValue = temp;
            rebirths = temp2;
        }, 4000);
//        alert("To už jsme za timeoutem??? MRDAT HO DO PÍČI!!!"); //debug
    };
}

function addRebirths(event){
    if(confirm("Přidat " + event.data.message.amount + " rebirthů?")){
        rebirths += event.data.message.amount;
        document.getElementById("rebirthCount").textContent = rebirths;
        alert("Úspěšně přidáno!");
        textFieldUpdate();
    }
}

function blackfriday(event){

}

function eraseStorage(){
    if(confirm("Určitě chcete vyresetovat progress? Tato akce je NEVRATNÁ!!!")){
        alert("Následující chybovou hlášku ignorujte :D");
        localStorage.setItem("resetGame", "true");
        location.reload();
        alert("Vymazán progress!");
    }
    else{
        alert("Ruším operaci.");
    }
}

function textFieldUpdate(){

    //kredity zuotovi (nebo jeho umělý inteligenci) za tenhle skvost <3
    document.getElementById("rebirthCount").textContent = rebirths;
    document.getElementById("rebirthBoost").textContent = rebirthBoost.toFixed(1);
    document.getElementById("rebirthPrice").textContent = rebirthPrice;
//  document.getElementById("totalRebirths").textContent = totalRebirths; zuotovi nerabotajet :/
    document.getElementById("autoPrice").textContent = autoClickerPrice;
    document.getElementById("multiPrice").textContent = multiClickPrice;
    document.getElementById("rebirthPrice").textContent = rebirthPrice;
    document.getElementById("rebirthUpgradePrice").textContent = rebirthUpgradePrice;
    document.getElementById("hyperPrice").textContent = hyperClickPrice;
    document.getElementById("autohyperPrice").textContent = autohyperClickerPrice;
    document.getElementById("mangoPrice").textContent = mangoClickPrice;
    document.getElementById("automangoPrice").textContent = automangoClickerPrice;
    document.getElementById("rebirthCount").textContent = rebirths;
    document.getElementById("rebirthBoost").textContent = rebirthBoost.toFixed(1);
    document.getElementById("clickCount").textContent = count;
    updateRank();
}
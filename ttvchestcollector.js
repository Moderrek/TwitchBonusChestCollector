const init = function(){
    setInterval(() => {
        var bonus = document.querySelector(".claimable-bonus__icon");
        if(bonus === null || bonus === undefined){
            return;
        }
        bonus.click();
    }, 5000);
}
init();
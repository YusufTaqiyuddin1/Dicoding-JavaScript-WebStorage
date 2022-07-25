const sessionStorageKey = 'PRESS_FREQUENCY';

if (typeof(Storage) !== 'undefined'){
    if(sessionStorage.getItem(sessionStorageKey) === null){
        sessionStorage.setItem(sessionStorageKey, 0);
    }

    const Incrementbutton = document.querySelector("#incrementButton");
    const clearButton = document.querySelector("#clear");
    const countDisplay = document.querySelector("#count");

    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

    Incrementbutton.addEventListener('click', function(){
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    });

    clearButton.addEventListener('click', function(){
        sessionStorage.removeItem(sessionStorageKey);
        countDisplay.innerText = 0;
    });
} else{
    alert("Browser yang anda gunakan tidak mendukung web storage");
}
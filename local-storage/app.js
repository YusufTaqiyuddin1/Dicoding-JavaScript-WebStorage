const localStorageKey = "PRESS_FREQUENCY";

// Pengecekan apakah data localStorage dengan key count tersedia atau belum
if (typeof(Storage) !== 'undefined'){
    if(localStorage.getItem(localStorageKey) === null){
        localStorage.setItem(localStorageKey, 0);
    }

    const IncrementButton = document.getElementById("incrementButton");
    const clearButton = document.getElementById("clear");
    const countDisplay = document.getElementById("count");

    countDisplay.innerText = localStorage.getItem(localStorageKey);

    IncrementButton.addEventListener('click', function(){
        let count = localStorage.getItem(localStorageKey);
        count ++;
        localStorage.setItem(localStorageKey, count);
        countDisplay.innerText = localStorage.getItem(localStorageKey);
    });

    clearButton.addEventListener('click', function(){
        localStorage.removeItem(localStorageKey);
        countDisplay.innerText = 0;
    });
} else{
    alert(`Browser yang anda gunakan tidak mendukung web storage`);
}
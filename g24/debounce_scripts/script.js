const search = document.querySelector("#search"); 

// runs on every call
function searchForItem(item) {
    console.log("Fetching " + item); 
}

// runs only if it has not been called in 1000ms
const searchForItemDebounced = debounce(searchForItem, 3000);

function debounce(f, t) {
    let timerID = null; 

    function debouncedF(...args) {
        clearTimeout(timerID);  
        timerID = setTimeout(() => {
            f(...args);             
        }, t)
    }
    return debouncedF; 
} 

search.addEventListener("input", e => {
    const item = search.value; 
    searchForItemDebounced(item); 
})



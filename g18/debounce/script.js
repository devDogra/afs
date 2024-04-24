const search = document.getElementById("search"); 

function myFetch(term) {
    console.log("Fetching " + term); 
}


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

const debouncedMyFetch = debounce(myFetch, 2000); 

search.addEventListener("input", e => {
    // myFetch(); 
    debouncedMyFetch(e.target.value); 
})
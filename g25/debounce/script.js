const search = document.getElementById("search"); 

function myFetch(term) {
    console.log("fetching " + term); 
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

const myFetchDebounced = debounce(myFetch, 2000); 

//  |f() |f()  |f()            |f()|f() -> undebounced
//  | | | | | | -----------2s--------- |f()|  -> debounced
search.addEventListener("input", e => {
    myFetchDebounced(e.target.value); 
})
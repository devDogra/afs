function Counter() {
    let count = 0;
    function inc() {count++;}
    function dec() {count--;}
    function print() {console.log(count); }

    return { inc, dec, print }; 
}

const c = Counter();
c.inc()
c.inc()
c.dec()
c.print(); 
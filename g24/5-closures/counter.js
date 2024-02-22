function Counter() {
    let count = 0;
    function inc() { count++ }
    function dec() { count-- }
    function print() { console.log(count) }
    return { inc, dec, print }
}

let c = Counter();
c.inc() 
c.inc()
c.print()

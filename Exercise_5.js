function pow(x, n) {
    let result = x;
    
    for(var i=1; i<n; i++) {
    result *= x;
    }
    
    return result;
    }
    
    let x = 2;
    let n = 3;
    
    console.log(pow(x, n));

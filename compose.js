 function compose(...fns) {
    return function (x) {
        let result = x;


        for(let i = fns.length; i > 0; i--) {
            result = fns[i].call(this, result)
        }

        return result;
    }
  }


function compose(...fns) {
    return function (x) {
        let result = x;

        for(let i = fns.length; i > 0; i--) {
            result = fns[i].call(this, result);
        }
    }
}
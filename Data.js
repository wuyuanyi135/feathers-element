/**
 * arr: array to be operated
 * arrName: the object name in properties
 * Bind `this`!
 */ 
function polymerArrayMutation(arr,arrName) {
    var arrayName = arrName;
    
    if (!this) {
        throw Error("polymerArrayMutation require this binding");
    }
    
    arr.push = function () {
        var args = arguments;
        Array.prototype.unshift.apply(args,[arrayName]);
        debugger;
        this.push.apply(this,args);
        
    }.bind(this);
}

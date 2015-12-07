/**
 * Created by sundeepnarang on 12/7/15.
 */


var testType = function(args,types){
    var err = {
        args:args
        ,types:types
        ,errType : 101
    };

    if(args.length!=types.length){
        err.msg = "Args and Types Length Mismatch";
        return err;
    }
    for(var i = 0;i<types.length;i++){
        if(typeof(args[i])!=types[i] ){
            err.msg = "Type Mismatch";
            return err;
        }
    }
    return null;
};

module.exports = testType;
var model = (function () {
    var privateVar,
        model;

    model = {
        getPrivateVar : function () {
            return privateVar;
        },
        setPrivateVar : function (value) {
            privateVar = value;
        }
    };

    return model;
} ());

$(document).ready(function () {
    /**
     * things we'd put into a model
     */
    var model = (function () {
        var privateVar;

        return {
            get: function () {
                return privateVar;
            },
            set: function (value) {
                privateVar = value;
            }
        };
    }());

    /**
     * things we'd put into the view
     */
    var view = (function () {
        var javaScriptDiv,
            jqueryDiv;

        javaScriptDiv = document.getElementById('javaScriptDiv');

        jqueryDiv = $('#jqueryDiv');

        return {
            javaScriptDiv: javaScriptDiv,
            jqueryDiv: jqueryDiv
        };
    }());

    /**
     * things we'd put into a controller
     */
    var  controller = (function () {
        var updateJavaScriptDiv,
            updateJqueryDiv;

        updateJavaScriptDiv = function (text) {
            /*simple dom manipulation w/js */
            view.javaScriptDiv.innerText = text + model.get();
        };

        updateJqueryDiv = function (text) {
            /*simple dom manipulation w/jquery */
            view.jqueryDiv.text(text + model.get());
        };

        return {
            updateJavaScriptDiv: updateJavaScriptDiv,
            updateJqueryDiv: updateJqueryDiv
        };
    }());




    /**
     *
     * Things an "app" might do
     *
     */
    // use session storage
    sessionStorage.setItem('testItem', 10);
    document.getElementById('sessionStorageTest').innerText = sessionStorage.getItem('testItem');
    var appVar = Number(sessionStorage.getItem('testItem'));

    // use closure to protect private var
    model.set(appVar + 1);
    document.getElementById('privateVarDiv').innerText = model.get();

    // use a controller that uses the model to update the view
    model.set(model.get() + 1);
    controller.updateJavaScriptDiv('This is content for the javascript div - model value is:');
    model.set(model.get() + 1);
    controller.updateJqueryDiv('This is content for the javascript div - model value is:');
});

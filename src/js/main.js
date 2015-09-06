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


    /**
     * some Q&A
     * @param text
     */
    //Question:
    //    (function() {
    //        console.log(1);
    //        setTimeout(function(){console.log(2)}, 1000);
    //        setTimeout(function(){console.log(3)}, 0);
    //        console.log(4);
    //    })();
    //
    //Answer: 1, 4, 3, 2
    //
    //
    //Question:
    //    for (var i = 0; i < 5; i++) {
    //        var btn = document.createElement('button');
    //        btn.appendChild(document.createTextNode('Button ' + i));
    //        btn.addEventListener('click', function()
    //        {
    //            console.log(i);
    //        });
    //        document.body.appendChild(btn);
    //    }
    //
    //Answer: 5

    /**
     * Question: write a palindrone function
     */
    var palindrone = function (text) {
        var firstHalf,
            secondHalf,
            halfLength = text.length / 2;

        firstHalf = text.substr(0, halfLength).split('');
        secondHalf = text.substr(halfLength).split('');

        return firstHalf.reverse() === secondHalf;
    };

    /**
     * Write a loop that makes seven calls to console.log to output the following triangle:
     #
     ##
     ###
     ####
     #####
     ######
     #######
     */
    var logTreePounds = function () {
        for (var pounds = '#'; pounds < '########'; pounds += '#') {
            console.log(pounds);
        }
    }

    /**
     * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers
     * divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
     * When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both
     * 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
     */
    var logFizzBuzz = function () {
        var fizzBuzz = '';
        for (var i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            } else if (i % 3 === 0 && i % 5 !== 0) {
                console.log('Fizz');
            } else if (i % 5 === 0 && i % 3 !== 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
    }

    /**
     * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
     * At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
     *
     */
    var logCheckerBoard = function () {
        var size = 8,
            fullString = '',
            rowString = '';
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                if (y % 2) {
                    rowString += '# ';
                } else {
                    rowString += ' #';
                }
            }
            fullString += (rowString + '\n');
            rowString = '';
        }
        console.log(fullString);
    }

});

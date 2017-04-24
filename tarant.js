// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
$(document).ready(function() {
$('#btnClick').on('click',function(){
   $("#drunk").val(drunkify($('#sober').val()))
});});


var qwerty = 'qwertyuiopåasdfghjklöäzxcvbnm,.-';
var smarterKeyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-' ]
]

// process.stdin.on('data', function (text) {
//     drunkify(text);
//     process.exit();

// });


function drunkify(text) {
    var drunkText = '';

    for (var i = 0, len = text.length - 1; i < len; i++) {
        
        drunkText += drunkifyLetter(text[i])
        if(Math.random()>0.9){
            drunkText += drunkifyLetter(text[i]);
        }

    }
    return drunkText
    // console.log('>', drunkText);
}

function drunkifyLetter(letter) {
    index = qwerty.indexOf(letter)
    if (index == -1) {
        return letter;
    }

    var x = index,
        y = 0;
    if (index > 21) {
        y = 2;
        x = index % 22;
    }
    else if (index > 10 ) {
        y = 1;
        x = index % 11;
    }
    if (Math.random() > 0.7) {
        drunkY = Math.floor(Math.random() * 3) - 1
        drunkX = Math.floor(Math.random() * 3) - 1
        try {
            var letter = smarterKeyboard[y + drunkY][x + drunkX];
            if (letter != undefined) return letter
        }
        catch (err) {
            return smarterKeyboard[y][x]
        }


    }
    return smarterKeyboard[y][x]
}

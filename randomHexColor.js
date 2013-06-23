var randomHexColor = (function () {

    'use strict';

    var values          = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
        valuesLength    = values.length;

    return function () {

        var color   = '#',
            length  = 7;

        while (--length) color += values[~~(Math.random() * valuesLength)];

        return color;
    };

}());
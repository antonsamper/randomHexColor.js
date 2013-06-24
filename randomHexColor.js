var randomHexColor = (function () {

    'use strict';

    return function () {

        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

    };

}());

!function (document, undefined) {

    var utils = {

        // Is the given value an array? Use ES5 Array.isArray if it's available.
        isArray: Array.isArray || function (value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        },

        // Is the given value a plain object / an object whose constructor is `Object`?
        isPlainObject: function (value) {
            return Object.prototype.toString.call(value) === '[object Object]';
        },

        // Convert an array-like object to an array – for example `arguments`.
        toArray: function (value) {
            return Array.prototype.slice.call(value);
        },

        // Get the keys of an object. Use ES5 Object.keys if it's available.
        getKeys: Object.keys || function (obj) {
            var keys = [],
key = '';
            for (key in obj) {
                if (obj.hasOwnProperty(key)) keys.push(key);
            }
            return keys;
        },

        // Unlike JavaScript's built-in escape functions, this method
        // only escapes characters that are not allowed in cookies.
        escape: function (value) {
            return value.replace(/[,;"\\=\s%]/g, function (character) {
                return encodeURIComponent(character);
            });
        },

        // Return fallback if the value is undefined, otherwise return value.
        retrieve: function (value, fallback) {
            return value === undefined ? fallback : value;
        }

    };

    var cookie = function () {
        return cookie.get.apply(cookie, arguments);
    };

    cookie.defaults = {};

    cookie.expiresMultiplier = 60 * 60 * 24;

    cookie.set = function (key, value, options) {

        if (utils.isPlainObject(key)) { // Then `key` contains an object with keys and values for cookies, `value` contains the options object.


            for (var k in key) { // TODO: `k` really sucks as a variable name, but I didn't come up with a better one yet.
                if (key.hasOwnProperty(k)) this.set(k, key[k], value);
            }

        } else {

            options = utils.isPlainObject(options) ? options : { expires: options };

            var expires = options.expires !== undefined ? options.expires : (this.defaults.expires || ''), // Empty string for session cookies.
expiresType = typeof (expires);

            if (expiresType === 'string' && expires !== '') expires = new Date(expires);
            else if (expiresType === 'number') expires = new Date(+new Date + 1000 * this.expiresMultiplier * expires); // This is needed because IE does not support the `max-age` cookie attribute.

            if (expires !== '' && 'toGMTString' in expires) expires = ';expires=' + expires.toGMTString();

            var path = options.path || this.defaults.path; // TODO: Too much code for a simple feature.
            path = path ? ';path=' + path : '';

            var domain = options.domain || this.defaults.domain;
            domain = domain ? ';domain=' + domain : '';

            var secure = options.secure || this.defaults.secure ? ';secure' : '';

            document.cookie = utils.escape(key) + '=' + utils.escape(value) + expires + path + domain + secure;

        }

        return this; // Return the `cookie` object to make chaining possible.

    };

    // TODO: This is commented out, because I didn't come up with a better method name yet. Any ideas?
    // cookie.setIfItDoesNotExist = function (key, value, options) {
    // if (this.get(key) === undefined) this.set.call(this, arguments);
    // },

    cookie.remove = function (keys) {

        keys = utils.isArray(keys) ? keys : utils.toArray(arguments);

        for (var i = 0, l = keys.length; i < l; i++) {
            this.set(keys[i], '', -1);
        }

        return this; // Return the `cookie` object to make chaining possible.
    };

    cookie.empty = function () {

        return this.remove(utils.getKeys(this.all()));

    };

    cookie.get = function (keys, fallback) {

        fallback = fallback || undefined;
        var cookies = this.all();

        if (utils.isArray(keys)) {

            var result = {};

            for (var i = 0, l = keys.length; i < l; i++) {
                var value = keys[i];
                result[value] = utils.retrieve(cookies[value], fallback);
            }

            return result;

        } else return utils.retrieve(cookies[keys], fallback);

    };

    cookie.all = function () {

        if (document.cookie === '') return {};

        var cookies = document.cookie.split('; '),
result = {};

        for (var i = 0, l = cookies.length; i < l; i++) {
            var item = cookies[i].split('=');
            result[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
        }

        return result;

    };

    cookie.enabled = function () {

        if (navigator.cookieEnabled) return true;

        var ret = cookie.set('_', '_').get('_') === '_';
        cookie.remove('a');
        return ret;

    };

    // If an AMD loader is present use AMD.
    // If a CommonJS loader is present use CommonJS.
    // Otherwise assign the `cookie` object to the global scope.

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return cookie;
        });
    } else if (typeof exports !== 'undefined') {
        exports.cookie = cookie;
    } else window.cookie = cookie;

} (document);

//Canvas
var totalPoints,
    ampMultiplier,
    framerate,
    cWidth,
    cHeight,
    waterLevel,
    spreadAccelleration,
    spreadSpeed,
    dur,
    midPointIndex,
    midPointX,
    canvas,
    ctx,
    animation,
    animationActive,
    C,
    points,
    point,
    counter,
    colorBgWave;

function setCanvas() {
    var a;
    $("#ondas").attr("width", a);
    if (canvas.getContext) {
        a = $("body").width();
        $("#ondas").attr("width", a).attr("height", cHeight),
        cWidth = a,
        ctx = canvas.getContext("2d"),
        ctx.fillStyle = colorBgWave,
        drawSquare()
    }
}

function stopAni() {
    clearInterval(animation)
}

function drawSquare() {
    ctx.fillRect(0, 0, cWidth, waterLevel)
}

function drawShape() {
    var a, b, c, d, e, f;
    midPointY = Math.sin(counter * 10 * C) * (dur - counter) * ampMultiplier,
    counter <= dur && (points[midPointIndex] = new Array(0, midPointY),
    counter % 9 == 0 && counter % 2 == 1 && (points[point] = Array(-1, midPointY), point++)),
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.moveTo(0, waterLevel);

    a = new Array(0, waterLevel);
    for (b = 0; b < totalPoints; b++) if (points[b]) {
        b < midPointIndex && (points[b][0] = points[b][0] * spreadAccelleration - spreadSpeed, points[midPointIndex - b + midPointIndex] = new Array(-points[b][0], points[b][1]));
        c = points[b][0] + midPointX, d = points[b][1] + waterLevel, e = (c - a[0]) / 2 + a[0], f = c - (c - a[0]) / 2;
        ctx.bezierCurveTo(e, a[1], f, d, c, d), a[0] = c, a[1] = d
    }
    ctx.lineTo(cWidth, waterLevel), ctx.lineTo(cWidth, 0), ctx.lineTo(0, 0), ctx.closePath(), ctx.fill(), counter++, counter == dur + 50 && (animationActive = !1), counter >= dur * 2 && stopAni()
}

colorBgWave = "#f1f1f1",
totalPoints = 15,
ampMultiplier = .1,
framerate = 40,
cWidth = 960,
cHeight = 40,
waterLevel = 10,
spreadAccelleration = 1.01,
spreadSpeed = 20,
dur = (totalPoints - 3) * 9,
midPointIndex = Math.floor(totalPoints / 2),
animationActive = !1,
C = Math.PI / 180;

$(document).ready(function () {

    $("#ondas").hover(function (a) {
        canvas.getContext && (animationActive || (clearInterval(animation), midPointIndex = Math.floor(totalPoints / 2), midPointX = a.pageX, point = 1, counter = 0, points = new Array, points[0] = new Array(spreadSpeed, 0), animation = setInterval(drawShape, framerate), animationActive = !0))
    }), canvas = document.getElementById("ondas"), setCanvas(), $(window).resize(function () {
        setCanvas()
    })
})
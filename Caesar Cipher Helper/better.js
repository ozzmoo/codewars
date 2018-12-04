// Better version

var CaesarCipher = function (shift) {
    this.encode = (str) => str.replace(/[a-z]/gi, (c) => String.fromCharCode((c.toUpperCase().charCodeAt(0) + shift - 65) % 26 + 65));
    this.decode = (str) => str.replace(/[a-z]/gi, (c) => String.fromCharCode((c.toUpperCase().charCodeAt(0) + 26 - shift - 65) % 26 + 65));
};
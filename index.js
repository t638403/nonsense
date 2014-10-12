var nonsense = {
    /**
     * Returns a random integer between min and max, inclusive. If you only pass one argument, it will return a number
     * between 0 and that number.
     * Copied from underscore.js 1.7.0, http://underscorejs.org/ to prevent a dependency.
     */
    random:function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    },

    /**
     * Returns a random sequence of letters with a length between min and max. If you only pass one argument, it will
     * return a random string of a length between 1 and that number.
     */
    word:function(min, max) {
        if (max == null) {
            max = min;
            min = 1;
        }
        var wordLength = nonsense.random(min, max);
        var charCodes = [];
        for(var i = 0; i < wordLength; i++) {
            charCodes.push(nonsense.random(97, 122));
        }
        return String.fromCharCode.apply(String.fromCharCode, charCodes);
    }
}

module.exports = nonsense;

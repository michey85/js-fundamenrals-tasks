function censor() {
    const censoredArr = []; // [ ['asv', 'sds'], ['aaa', 'bbb'] ]

    return function(str1, str2 = '') {
        if (str2) {
            censoredArr.push([str1, str2]);
        } else {
            for (let pair of censoredArr) {
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }

            return str1;
        }
    }
}

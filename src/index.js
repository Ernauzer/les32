const getPalindrome = (num) => {
    const numReverse =
        +num.toString()
            .split('')
            .reverse()
            .join('');
    if (num === numReverse) return console.log(numReverse); //eslint-disable-line no-console
    else {
        getPalindrome(num + numReverse);
    }
};

getPalindrome(2123); //eslint-disable-line no-magic-numbers

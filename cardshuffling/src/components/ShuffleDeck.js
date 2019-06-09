function shuffle(arr) {
    //  Note to self: Learn how to prevent array mutation
    /* spread operator creates a clone of the array that gets passed in.
    The cloned array is what gets shuffled and returned.
    */
    let a =[...arr]
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default shuffle;
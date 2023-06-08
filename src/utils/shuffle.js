export default function shufflePartial(array, count, partial = false) {
    function shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    if (partial) {
        let shuffled = shuffleArray(array);
        return shuffled.slice(0, Math.min(count, array.length));
    }
    return shuffleArray(array).slice(0, Math.min(count, array.length));
}
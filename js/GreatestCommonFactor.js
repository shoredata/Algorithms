export default function greatestCommonFactor(a, b) {
    // console.log(a,b);
    if (b) {
        return greatestCommonFactor(b, a % b);
    } else {
        // console.log(a);
        return Math.abs(a);
    }
}

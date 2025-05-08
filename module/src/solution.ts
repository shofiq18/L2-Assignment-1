


function formatString(input: string, toUpper?: boolean): string {
 if(toUpper === false) {
    return input.toLowerCase();
 }else{
    return input.toUpperCase();
 }
 
}
const result1 = formatString("Hello");
const result2 = formatString("Hello", true);
const result3 = formatString("Hello", false);






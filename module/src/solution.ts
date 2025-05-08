


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





const books = [
    {title: "Book A", rating: 4.5}, 
    {title: "Book B", rating: 3.2}, 
    {title: "Book C", rating: 5.0}, 
    {title: "Book D", rating: 4.2}, 
    {title: "Book E", rating: 3.5}, 

]



function filterByRating(items: {title: string, rating: number}[]) : {title: string, rating: number} [] {
    return items.filter(item=> item.rating >= 4);
}

const result4 = filterByRating(books);













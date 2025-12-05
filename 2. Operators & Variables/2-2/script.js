let ch = +prompt(
    "1. Area of circle\n2. Area of square\n3. Area of triangle\n4. Simple interest\n5. Perimeter of the circle\n"
);

const PI = 3.14;

switch (ch) {
    case 1:
        let a = +prompt("Enter Radius Value : ");
        console.log(`The area of the circle = ${PI * a * a}`);
        break;

    case 2:
        let l = +prompt("Enter the length : ");
        console.log(`The area of the square = ${l * l}`);
        break;

    case 3:
        let base = +prompt("Enter base : ");
        let height = +prompt("Enter height : ");
        console.log(`The area of triangle ${0.5 * base * height}`);
        break;

    case 4:
        let p = +prompt("Enter principle amount : ");
        let r = +prompt("Enter rate of interest : ");
        let n = +prompt("Enter time in months : ");
        console.log(`The simple interest ${(p * r * n) / 100}`);
        break;

    case 5:
        let rad = +prompt("Enter radius : ");
        console.log(`Perimeter of the circle is ${2 * PI * rad}`);
        break;

    default:
        console.log("Invalid choice...!");
}
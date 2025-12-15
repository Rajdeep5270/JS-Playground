// Q.1 Write a Program to find the maximum number from the given 3 numbers using the ternary operator.

// let a = +prompt("Enter first value");
// let b = +prompt("Enter second value");
// let c = +prompt("Enter third value");

// (a > b)
// ? (a > c)
//     ? console.log(`${a} is max`)
//         : console.log(`${c} is max`)
//     : (b > c) ? console.log(`${b} is max`)
//         : console.log(`${c} is max`);


let ch = +prompt("1 for English\n2 for Hindi\n3 for Gujarati");

switch (ch) {
    case 1:
        let fCh = +prompt("Press 1 for Internet Recharge\nPress 2 for Top - up Recharge\nPress 3 for Special Recharge");
        switch (fCh) {
            case 1:
                console.log("You have successfully done a Internet Recharge.");
                break;

            case 2:
                console.log("You have successfully done a Top-up Recharge.");
                break;

            case 3:
                console.log("You have successfully done a Special Recharge.");
                break;

            default:
                console.log("Invalid choice...!");
        }
        break;

    case 2:
        let sCh = +prompt("Internet Recharge ke liye 1 dabaiye\nTop - up Recharge ke liye 2 dabaiye\nSpecial Recharge ke liye 3 dabaiye")

        switch (sCh) {
            case 1:
                console.log("Aapne safaltapurvak Internet Recharge kar liya he.");
                break;

            case 2:
                console.log("Aapne safaltapurvak Top-up Recharge kar liya he.");
                break;

            case 3:
                console.log("Aapne safaltapurvak Special Recharge kar liya he.");
                break;

            default:
                console.log("Aapne galat ank chayan kia ha.");
        }
        break;

    case 3:
        let tCh = +prompt("Internet Recharge mate 1 dabavo\nTop-up Recharge mate 2 dabavo\nSpecial Recharge mate 3 dabavo")

        switch (tCh) {
            case 1:
                console.log("Tame safaltapurvak Internet Recharge karyu chhe.");
                break;

            case 2:
                console.log("Tame safaltapurvak Top-up Recharge karyu chhe.");
                break;

            case 3:
                console.log("Tame safaltapurvak Special Recharge karyu chhe.");
                break;

            default:
                console.log("Tamari choice khoti chhe.");
                break;
        }
        break;
    default:
        console.log(`Invalid choice...!`);
}
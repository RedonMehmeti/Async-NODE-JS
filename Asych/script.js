// function bakecookies(){
//    console.log("1.Start baking cokies"); 
//    let cookies = '🍪';
//    console.log("2.Cookies are done");
//    return cookies;
// };

// function makeSandwich(){
//     console.log("3.Make an sandwich"); 
//     let sandwich = '🥪';
//     console.log("4.Sandwich are done");
//     return sandwich;
//  };
//  function boilEggs(){
//     console.log("5.Start boiling eggs"); 
//     let Eggs = '🍳';
//     console.log("6.Eggs are done");
//     return Eggs;
//  };

// const { resolve } = require("path");

//  console.log("Kitchen :");
//  let cookies = bakecookies();
//  let sandwich = makeSandwich();
//  let eggs = boilEggs();
//  console.log(`All done: ${cookies}, ${sandwich}, ${eggs}`);





//  function bakecookies(){
//     return new Promise((resolve) => {
//     console.log("1.Start baking cokies"); 
//     setTimeout(() => {
//     console.log("2.Cookies are done");
//    resolve("🍪");
// },3000);
//  });   
// };


// function makeSandwich(){
//     return new Promise((resolve) => {
//         console.log("3.Make an sandwich"); 
//     setTimeout(() => {
//         console.log("4.Sandwich are done");
//    resolve("🥪");
// },2000);
//  });   
// };

// function boilEggs(){
//     return new Promise((resolve) => {
//         console.log("5.Start boiling eggs");  
//     setTimeout(() => {
//         console.log("6.Eggs are done");
//    resolve("🍳");
// },1000);
//  });   
// };

// async function asyncKitchen(){
//     console.log("Miresevini ne kuzhinen ton:")
//     let cookiesPromise = bakecookies();
//     let sandwichPromise = makeSandwich();
//     let eggsPromise = boilEggs();


//     // Wait all tasks to complete
//     // await

//     const cookies = await cookiesPromise;
//     const sandwich = await sandwichPromise;
//     const eggs = await eggsPromise;

//     console.log(`All done: ${cookies}, ${sandwich}, ${eggs}`);
// }
// asyncKitchen();




function kuqe(){
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log("2.Drita e kuqe eshte ndezur");
   resolve("🔴");
},3000);
 });   
};


function verdh(){
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("4.Drita e verdh eshte ndezur");
   resolve("🟡");
},2000);
 });   
};

function gjelbert(){
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("6.Drita e gjelbert eshte ndezur");
   resolve("🟢");
},1000);
 });   
};

async function asyncSemafor(){
    console.log("Semafori po fillon:")
    let kuqePromise = kuqe();
    let verdhPromise = verdh();
    let gjelbertPromise = gjelbert();


    // Wait all tasks to complete
    // await

    const ekuqe = await kuqePromise;
    const everdh = await verdhPromise;
    const egjelbert = await gjelbertPromise;

    console.log(`All done: ${ekuqe}, ${everdh}, ${egjelbert}`);
}
asyncSemafor();
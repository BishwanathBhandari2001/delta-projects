//link with index8.html
    //***Axios instead of using fetch() ***/ get cat facts
// let btn = document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let res = await getfact();

//     let p = document.querySelector("#result");
//     p.innerText = res;
// });

// let url = "https://catfact.ninja/fact";

// async function getfact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(err){
//         console.log("error - ",err);
//         return "No fact found";
//     }
    
// }
// getfact();


        //***Dog images generate using apis**/
// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async()=>{
//     let link = await getfact();
//     console.log(link);
//     let img = document.querySelector("#imgs");
//     img.setAttribute("src", link);
//     return link;
// });

// async function getfact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     }catch(err){
//         console.log("error - ",err);
//         return "No Image found";
//     }
    
// }


        //***Axios Sending headers ****/
// let url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         let config = {headers: {Accept: "application/json"}};
//     let res = await axios.get(url, config);
//     console.log(res.data.joke);
//     }catch(err){
//         console.log(err);
//     }

// }
// getJokes();


        //country university list api
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;

//     console.log(country);

//     let colleges = await getColleges(country);

//     await show(colleges);
// });

// function show(colleges){
//     let list = document.querySelector("#list");
//     list.innerText = "";

//     for (col of colleges){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res= await axios.get(url + country);
//         return res.data;
//     }catch(e){
//         console.log("Error - ",e);
//         return [];
//     }
// }  



        //****college names according to state provience***/
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let stateprovince = document.querySelector("input").value;

    console.log(stateprovince);

    let colleges = await getColleges(stateprovince);

    await show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";

    for (col of colleges){
        let sp = col["state-province"] || "Unknown";
        console.log(col.name, sp);

        let li = document.createElement("li");
        li.innerText=`${col.name} (${sp})`;
        list.appendChild(li);
    }
}

async function getColleges(stateprovince){
    try{
        let res= await axios.get(url + stateprovince);
        return res.data;
    }catch(e){
        console.log("Error - ",e);
        return [];
    }
}
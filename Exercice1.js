//Exercice 1.1
/* L'ordre d'apparition est 1-A 2-G*/ 


//Exercice 1.2
const call1 = new Promise((res,rej)=>{setTimeout(()=>{console.log("B");res(call2)},2000)})
const call2 = new Promise((res,rej)=>{setTimeout(()=>{console.log("C");res(call3)},2000)})
const call3 = new Promise((res,rej)=>{setTimeout(()=>{console.log("D");res(finished)},2000)})
const finished = new Promise((res,rej)=>{setTimeout(()=>{console.log("E");res(console.log("F"),console.log("G"))},2000)})
console.log("A")
Promise.all([call1,call2,call3,finished])      


//Exercice 1.3
const call1 = new Promise((res,rej)=>{setTimeout(()=>{console.log("B");res(call2)},2000)})
const call2 = new Promise((res,rej)=>{setTimeout(()=>{console.log("C");res(call3)},2000)})
const call3 = new Promise((res,rej)=>{setTimeout(()=>{console.log("D");res(finished)},2000)})
const finished = new Promise((res,rej)=>{setTimeout(()=>{console.log("E");res(console.log("F"),console.log("G"))},2000)})
async function asyncCall(){
    console.log('A');
    let result = await call1;
    console.log(result)
}
asyncCall();
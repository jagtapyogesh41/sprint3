let apikey=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
let voucherdata = document.getElementById("vouchers")
let user = JSON.parse(localStorage.getItem("user"))
let vamount = document.getElementById("vamount")
vamount.append(user.userAmount)
let arr =[];

async function mainue(){
    let res = await fetch(apikey)
    let data = await res.json()
    // console.log(data[0].vouchers)
    Append(data[0].vouchers)
}
mainue()



async function Append(data){
    console.log(data)
    // voucherdata.innerHTML="";
    data.forEach(element => {
        const div1 = document.createElement('div');

        const image = document.createElement('img');
        image.src = element.image;

        const name = document.createElement('p');
        name.innerText = element.name;

        const price = document.createElement('p');
        price.innerText = element.price;

        const btn = document.createElement('button');
        btn.innerText ="buy";
        btn.addEventListener("click",function(){
            purchaseV(element)
        })

        div1.append(image,name,price,btn)

        voucherdata.append(div1)
    });
}


function purchaseV(element){
    
    let a = Number(user.userAmount)-element.price
    // console.log(a)
    // console.log(a+10)
    if (a<0){
        alert("insufficinet balance")
    }
    else{
        vamount.innerHTML = a;
        arr.push(element)
    }
    localStorage.setItem("voucher",JSON.stringify(arr))
}
let balance = document.getElementById("balance")
let data = JSON.parse(localStorage.getItem("purchase"))
Append(data)

async function Append(data){
    console.log(data)
    let x = data[0][0];
    let y = data[0][1]
    console.log(y)
    balance.innerHTML=y

    // voucherdata.innerHTML="";
    data.forEach(element => {
        let x = data[0][0];
        console.log(element[0])

        const div1 = document.createElement('div');
        // div1.setAttribute("id","voucher_list")

        const image = document.createElement('img');
        image.src = element[0].image;

        const name = document.createElement('p');
        name.innerText = element[0].name;

        const price = document.createElement('p');
        price.innerText = element[0].price;

        balance.innerHTML=element[1]
        // console.log(y)
        

        div1.append(image,name,price)

        document.getElementById("purchased_vouchers").append(div1)
    });
}




function main(){
    event.preventDefault()
    let form = document.getElementById("signup")

    var data={
        userName : form.name.value,
        userEmail:form.email.value,
        userAdd:form.address.value,
        userAmount:form.amount.value,
    }
    localStorage.setItem("user",JSON.stringify(data))
    window.location.href="voucher.html"
}
// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault()
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    }
    axios
        .post("https://crudcrud.com/api/68bbfb00c37142d18bb199ccdc448c38", userDetails)

    event.target.reset();       

    
}
document.addEventListener("DOMContentLoaded", () => {
    axios
        .get("https://crudcrud.com/api/abcd1234efgh5676acvg226311f/users")
        .then(res =>
            res.data.forEach(displayUser)
        )
        .catch(err =>
            console.log(err)
        )
});

function displayUser(user) {
    const li = document.createELement("li")
    li.textContent = `${user.username}-${user.email}-${user.phone}`

    const del = document.createELement("button")
    del.textContent = "delete"
    del.onclick = () => {
        axios.delete("https://crudcrud.com/api/xxxxxxxx/user._id")
            .then(() => 
            li.remove()
        )
        .catch(err=> console.log(err))
    }
    li.appendChild(del);
    document.querySelector("ul").appendChild("li")
}
// Do not touch the code below
module.exports = handleFormSubmit;

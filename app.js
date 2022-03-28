// let container = document.querySelector('#container')


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) =>{
//    return res.json()
// })
// .then ((data) => {
//     let users = data.map(user =>{
//         return `<hi>${user.name}</h1>`

//     })
//     // container.innerHTML = users
//     console.log(users);

//     container.innerHTML = users.join('')

// })



// let container = document.querySelector('#box')


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         let users = data.map(user => {
//             let {
//                 street,
//                 suite,
//                 city,
//                 zipcode} = users.address
//             return `
//               <div class="users
//                 <h1>${user.name}</h1>
//                 <p>Email.email}</p>
//                 <p>Phone: ${user.phone}</p>
//                 <p>Website: ${user.website}</p>
//                 <p>Address: ${suite} ${street} ${city} ${zipcode}</p>
//               </div>

//             `
//         })
//         // container.innerHTML = users
//         // console.log(users);

//         // container.innerHTML = users.join('')

//     })

    // let container = document.querySelector('.container')

    // fetch('https://jsonplaceholder.typicode.com/comments')
    // .then((res)  =>{
    //     return res.json()
    // })
    // .then((data) =>{
    //     let comments =data.map(comments => {
    //         return `
    //         <div class ="comments
    //         <h1>Names: ${comments.name} </h1>
    //         <p>Email: ${comments.email} </p>
    //         <p>text: ${comments.body} </p>
            
            
    //         </div>

    //         `
    //     })
    //     container.innerHTML = comments

    // })



    const LoginForm = document.querySelector('#login-form')
    const userNameInput = document.querySelector('#username')
    const passwordInput = document.querySelector('#password')

    LoginForm.addEventListener( 'submit', (evt) =>{
        evt.preventDefault()
        let details ={
            username: userNameInput.value,
            password: passwordInput.value

        }
        let config = {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:5000/login', config)
        .then(res => res.json())
        .then(data => { 
            console.log(data);
        }) 
    })
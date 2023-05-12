// Add your code here

/*
//note sample_form.html is set up wtih "action=URL" and "mehod=POST"

//pulling this out of configurationObjects makes code more flexible
const formData = {
   dogName: "Bryon",
   dogBreed: "Poodle"
}

//configurationObject neeeds HTTP verb, headers, the body
const configurationObject = {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
   },
   //converts objects to strings to preserve key/value pair 
   body: JSON.stringify(formData),
}

fetch("http://localhost:3000/dogs", configurationObject)

.then(function(response){
   return response.json()
}) //what the server sent back to us
.then(function (object){
   console.log(object)
})// what we do with the info
.catch(function(error){
   alert("Bad things!")
   console.log(error.message)
})//when things go wrong --like using wrong method
*/


function submitData(userName, userEmail) {
   const userData = {
      name: userName,
      email: userEmail
   }

   const postUserName = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
      },
      body: JSON.stringify(userData),
   }

   return fetch("http://localhost:3000/users", postUserName)
   .then(function(response){
      return response.json()
   })
   .then(function(object){
      document.querySelector(`body`).textContent = object.id
      console.log(object.id)
   })
   .catch(function(error){
      document.querySelector(`body`).textContent = "Unauthorized Access"
      console.log(error.message)
   })

}


//submitData("Kerry", "kerry@email.com")

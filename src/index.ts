import Express, {Request,Response} from 'express'

//fake database
const userList = [
    {id: 1, name: 'Andrea', age:3},
    {id: 2, name: 'Ismat', age:4},
    {id: 3, name: 'Thoa', age:5},
];

const app=Express();
app.use(Express.json())

//get method to get all the user
app.get("/users",(req:Request,res:Response)=>{
    res.json (userList)
})

//post method to add new user  {id: 4, name: 'Soo', age:5}
app.post("/users",(req:Request,res:Response)=>{
    const newUser = req.body  //body is from postman
    userList.push(newUser)
    res.json (userList)
})

//delete method endpoint: http://localhost:8000/users/1
//to make it dinamic the endpint should be:http://localhost:8000/users/:id 

//app.delete("/users/:id",(req:Request,res:Response)=>{
   // console.log(req.params)   we always get string in params method
   // res.json ('this is delete method')
//} )

//delet specific id 
app.delete("/users/:id",(req:Request,res:Response)=>{
    //first to get the specific id by params and then remove the id from array
    const userId = req.params;  //it's an object
   const result= userList.filter((user)=> user.id!== Number(userId.id))
        res.json (result)
})


const port= 8000;

app.listen(port, ()=>{
    console.log(`the server is running on http://localhost:$(port)`)
})

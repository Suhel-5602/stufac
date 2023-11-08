const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const Student = require("./models/studentModel");
const Faculty = require("./models/facultyModel");
app.use(express.json());
app.use(cors());
require('./db')

app.get("/",(req, res)=>{
    res.send("Hello World!.. homt good");

});

app.get("/students",(req, res)=>{
    res.send("Hello World!.. homeeeeeee");

});

app.post('/student',async(req,res)=>{
    try{
    const data = req.body;
    const createdStudent=new Student(data);
    await createdStudent.save();
    res.send("Student created");
    }catch (error){
        console.log(error);
    }
});

app.get('/student', async(req,res) => {
    try{
        const studentList = await Student.find();
        res.send(studentList);

    } catch (error){
        console.log(error);
        }
});

app.put('/student/:id', async(req,res) => {
    try{
        const studentId=req.params.id;
        await Student.updateOne({id: studentId},{$set:req.body});
        res.send("Student Updated");
    } catch (error){
        console.log(error);
        }
    });

    app.delete('/student/:id', async(req,res) => {
        try{
            const studentId=req.params.id;
            await Student.deleteOne({id: studentId});
            res.send("Student deleted");
        } catch (error){
            console.log(error);
            }
        });

    app.post('/faculty',async(req,res)=>{
        try{
            const data = req.body;
            const createdFaculty=new Faculty(data);
            await createdFaculty.save();
            res.send("Faculty created");
        }catch (error){
                console.log(error);
            }
        });

        app.get('/Faculty', async(req,res) => {
            try{
                const facultyList = await Faculty.find();
                res.send(facultyList);
        
            } catch (error){
                console.log(error);
                }
        });

        app.put('/faculty/:id', async(req,res) => {
            try{
                const facultyId=req.params.id;
                await updateOne({id: studentId},{$set:req.body});
                res.send("Student Updated");
            } catch (error){
                console.log(error);
                }
            });
        

app.listen(PORT, function () {
console.log(`Server is running on localhost:${PORT}`);
});
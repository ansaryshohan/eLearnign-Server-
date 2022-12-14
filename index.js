const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categoryData = require('./Data/category.json')
const courseData= require('./Data/couse.json')

app.use(cors())

app.get('/', (req, res) => { res.send('the server is running') });

app.get('/categories', (req, res) => {
  res.send(categoryData)
});

app.get('/courses/:categoryID',(req,res)=>{
  const Id= req.params.categoryID;
  console.log(Id)
  const categoryDataSet= courseData?.filter(course=>{return course?.category_id == Id});
  // console.log(categoryDataSet);
  if(Id===1){res.send(courseData)}
  else {
    res.send(categoryDataSet)
  }
  ;
})

app.get('/courses',(req,res)=>{ res.send(courseData)})

app.get('/course/:id', (req,res)=>{
  const id = req.params.id;
  const singleCourse= courseData.find(course=> course.id==id);
  if(singleCourse){res.send(singleCourse)}
  else{res.send('noo data found')} 
})

app.listen(port, () => { console.log('server running on post:', `${port}`); })

module.exports = app;
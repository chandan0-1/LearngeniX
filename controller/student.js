module.exports = function(req, res){
  return res.send("<h1> Hello from Student's Homepage!!</h1>")
}

module.exports.home = function (req, res) {
  return res.render('student_home',
  title = "Student Name"
  )
};

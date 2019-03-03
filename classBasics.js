class Student {
  constructor(firstName,lastName,year){
    this.firstName = firstName,
    this.lastName = lastName,
    this.grade = year,
    this.scores = []
    }
    fullName(){
      return `Your fullName is ${this.firstName + ' ' + this.lastName}`;
    }
    addScore(score){
      this.scores.push(score);
    }
    calculateAvg(){
      var sum = this.scores.reduce((a,b)=>a+b);
      return (sum/this.scores.length);
    }
    // This is a method ^
    static enrollStudents(){
      console.log("Enrolling  Students");
    }
    // This a Class Method

}

var ikshit = new Student('Ikshit','Jalan','COE');
var ibneet = new Student('Ibneet','Kaur','COE');

console.log(ibneet.firstName +" "+ ikshit.lastName);

var result = ikshit.fullName();
console.log(result);

console.log(ikshit.scores);
ikshit.addScore(99.99);
console.log(ikshit.scores);
ikshit.addScore(1);

console.log(ikshit.calculateAvg());

Student.enrollStudents();



export default function RandomDate() {
    var l = new Date()
      let currDay = l.getDate()
      let currMonth = l.getMonth() +1
      let currYear = l.getFullYear()
      let day = currDay + Math.floor(Math.random() * (31 - currDay))
      let month = currMonth + Math.floor(Math.random() * (12- currMonth))
      
      
      return day + '.' + month + '.' + currYear
    
}

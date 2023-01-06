//function showDateInfo(){
//    let currentDate = new Date();
//    console.log(currentDate);
//    let startOfMonth = new Date(currentDate.getFullYear(), currentDate.getFullMonth(), 1);
//    console.log(startOfMonth);
//    const msToday = (24 * 60 * 60 * 1000);
//    const days = Math.floor((currentDate - startOfMonth)/ msToday);
//    console.log(days);
//    console.log(`week :${Math.cell(days/7)}`);
//}

var currentDate = moment().format('dddd , MMMM D YYYY');
$('#currentDate').text(currentDate);

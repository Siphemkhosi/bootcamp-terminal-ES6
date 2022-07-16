export default function yearsAgo(year){
    const yearsFrom = new Date();
    return yearsFrom.getFullYear() - year;
  } 
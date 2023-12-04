function getMonthDays(monthName) {
  
    switch (monthName) {
      case "january":
        return 31;
      case "february":
        return 28;
      case "march":
        return 31;
      case "april":
        return 30;
      case "may":
        return 31;
      case "june":
        return 30;
      case "july":
        return 31;
      case "august":
        return 31;
      case "september":
        return 30;
      case "october":
        return 31;
      case "november":
        return 30;
      case "december":
        return 31;
      default:
        return "Invalid month name";
    }
  }
  console.log(getMonthDays("january"));

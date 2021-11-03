/*
THIS IS A PSEUDO CODE, ONLY FOR GUIDING PURPOSES
*/

//Getting all the data from our database, about services and costs of that
var iron_services_cassi = query_on_our_data_base.where(client==cassi || client==bem_cassi || client==cassi_df).where(services)

//Getting all the data from the spreadsheet 
var cassi_spreadsheet = import_and_open(cassi_spreadsheet.xlsx)
var items = read_all_columns(cassi_spreadsheet) 

//Get only the unique cases of services and it's costs
function onlyUnique(value, index, self) {  
    //this function really works. e.g.:  if value = [a,b,c,a,b,e,r], the return will be [a,b,c,e,r]
    //you can use it on your code
    return self.indexOf(value) === index;
}

var unique = items.services.filter(onlyUnique);  //here's an example of usage


//using a loop, you can add all the unique.services and unique.prices (per service) to an object
// after comparing with our database and setting our "database price" and "spreadsheet price" for each.
services = {
    service_name,
    database_iron_price,
    spreadseet_price
}

return services





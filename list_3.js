/*
THIS IS A PSEUDO CODE, ONLY FOR GUIDING PURPOSES
*/

//Getting all the data from our database, about services and costs of that
var iron_cassi_glossed = query_on_our_data_base.where(client==cassi || client==bem_cassi || client==cassi_df).where(services)

//Getting all the data from the spreadsheet 
var cassi_spreadsheet = import_and_open(cassi_spreadsheet.xlsx)
var items = read_all_columns(cassi_spreadsheet) 

listGlossed = [];

// verify if the column glossed exists
// here, will also need to get what was the reason of glossed
forEach (item in items);{ 
    if(item.glossed === iron_cassi_glossed){
        listGlossed.append_to_it(item) // New line, even if it's repeted
    }
} 

return listGlossed
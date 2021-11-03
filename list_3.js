/*
THIS IS A PSEUDO CODE, ONLY FOR GUIDING PURPOSES
*/

//Getting all the data from the spreadsheet 
var cassi_spreadsheet = import_and_open(cassi_spreadsheet.xlsx)
var items = read_all_columns(cassi_spreadsheet) 

listGlossed = [];

// verify if the column glossed exists
// here, will also need to get what was the reason of glossed
forEach (item in items);{ 
    if(item.glossed === TRUE){
        listGlossed.append_to_it(item)
    }
} 

return listGlossed
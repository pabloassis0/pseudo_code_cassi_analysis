/*
THIS IS A PSEUDO CODE, ONLY FOR GUIDING PURPOSES
*/

//Getting all the data from our database
cassi_users = query_on_our_data_base.where(client==cassi || client==bem_cassi || client==cassi_df)

//Getting all the data from the spreadsheet
cassi_spreadsheet = import_and_open(cassi_spreadsheet.xlsx)
items = read_all_columns(cassi_spreadsheet) 

listOfNotFound = [];

forEach (item in items);{ 
    if(item.name !== cassi_users){
       listOfNotFound.append_to_it(item)
    }
} 

return listOfNotFound //this can be empty, in case all the registry on the cassi_spreadsheet exists on our database

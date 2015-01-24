an exploration of 13 months of retail electricity usage data for my apartment.  I was paying above market electricity prices **17.2 cents per kilowatt hour** with [Reliant Energy](https://www.reliant.com/en/residential/join-now/new.jsp).  Reliant offers access to ["Green Button"](http://www.greenbuttondata.org/) hourly electricity usage data, in this [arcane xml-spreadsheet](https://github.com/micahstubbs/my-electricity/tree/master/ReliantGreenButtonData).

I used Excel to open the the xml-spreadsheet and save it as a more friendly .csv file.  then, [`reshape-data.R`](https://github.com/micahstubbs/my-electricity/blob/master/reshape-data.R) opens the .csv file and cleans up the data.

explore the results of that process yourself with the tableau workbook [`my_electricity.twbx`](https://github.com/micahstubbs/my-electricity/blob/master/my_electricity.twbx) [tableau public](https://public.tableausoftware.com/profile/micah.stubbs#!/vizhome/my_electricity/Story)

armed with this knowledge, I set out to select a new retail electricity vendor that would offer a market rate at attractive terms.

[`electricity_plans.js`](https://raw.githubusercontent.com/micahstubbs/my-electricity/master/electricity_plans.js) is a custom function for this [google sheet](https://docs.google.com/spreadsheets/d/1e-231CUqrFUtJOeXamyEtrQ_sj0Q-NCW9nQitKVCLBw/edit?usp=sharing) where I backtest several plans from multiple vendors.  

after modeling plans from several vendors, I selected [one](https://www.infiniteenergy.com/api/efl/CenterPoint/The_All-Inclusive_6_mo) that had the best combination of low effective price **9.4 cents per kilowatt hour**  based on my historical usage and positive reviews online.

after signing up with the delightfully named [Infinite Energy](http://www.infiniteenergy.com/) wondered "what their market share in my state"?  This is a proxy for the more basic questions "is this worth it?" and "just how fly-by-night is this new vendor?"  

the tableau workbook [`eia_retail_electricity_table6.twbx`](https://github.com/micahstubbs/my-electricity/blob/master/eia_retail_electricity_table6.twbx?raw=true) [tableau public](https://public.tableausoftware.com/profile/micah.stubbs#!/vizhome/eia_retail_electricity_table6/Dashboard) seeks to answer those questions by visualizing market share for all retail electricity providers by state by a few metrics.  This 2012 dataset is from [the US Energy Information Administration](http://www.eia.gov/electricity/data.cfm#sales)

Thanks to Javier, Peter, and Chris for prompting me to share this properly.








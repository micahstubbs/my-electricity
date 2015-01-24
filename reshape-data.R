# Set the working directory
setwd("~/workspace/quantified-home/electricity")

# read in a csv file containing the EIA data and assign it to a dataframe
# called table6
table6 <- read.csv(file="eia_table6.xls - data.csv",head=TRUE,sep=",")

# assign the table6 dataframe to another dataframe called market_share_by_state
# we will leave the table6 dataframe unmodified for reference
# we will reshape the market_share_by_state dataframe to the form
# that we'll use in our visualization
market_share_by_state <- table6

# rename specific columns in the market_share_by_state dataframe to friendly camelCase
colnames(market_share_by_state)[c(4,5,6,7)] <- c("customerCount", "salesMegawattHours",
                                  "revenuesThousandsDollars","averagePriceCentskwh")

# define a function that
# accepts a parameter column
# removes commas from a text string 
# then converts the text string to a number
removeCommas <- function(column){as.numeric(gsub(",", "", column))}

# use the removeCommas() function on all number fields in the market_share_by_state
# dataframe
market_share_by_state$customerCount <- 
  removeCommas(market_share_by_state$customerCount)

market_share_by_state$salesMegawattHours <- 
  removeCommas(market_share_by_state$salesMegawattHours)

market_share_by_state$revenuesThousandsDollars <- 
  removeCommas(market_share_by_state$revenuesThousandsDollars)

market_share_by_state$averagePriceCentskwh <- 
  removeCommas(market_share_by_state$averagePriceCentskwh)

# require the dplyr library
library(dplyr)

# get the totals by state for three measure columns, using the handy 
# group_by() and summarise() functions from dplyr
# and then assign the results to the totals_by_state dataframe
#
# the three measure columns are:
# customerCount
# salesMegawattHours
# revenuesThousandsDollars
#
totals_by_state <- market_share_by_state %>%
group_by(State) %>%
summarise(sumCustomers = sum(customerCount), 
          sumSalesMegawattHours = sum(salesMegawattHours),
          sumRevenuesThousandsDollars = sum(revenuesThousandsDollars))

# lookup the totals from each state and add them to a new column in the 
# market_share_by_state dataframe for every row, which is to say every unique
# combination of power company entity and state
#
# do this for each sum measure:
#
# sumCustomers
# sumRevenuesThousandsDollars

#
market_share_by_state$sumCustomersByState <- 
  totals_by_state$sumCustomers[
    match(market_share_by_state$State, totals_by_state$State)]

market_share_by_state$sumRevenueByState <- 
  totals_by_state$sumRevenuesThousandsDollars[
    match(market_share_by_state$State, totals_by_state$State)]

# sumSalesMegawattHours
market_share_by_state$sumSalesByState <- 
  totals_by_state$sumSalesMegawattHours[
    match(market_share_by_state$State, totals_by_state$State)]

# calculate the proportion of total customers in a state that each power company entity has
market_share_by_state$customerCountProportionByState <- 
  market_share_by_state$customerCount / market_share_by_state$sumCustomersByState

# calculate the proportion of total revenue in a state that each power company entity has
market_share_by_state$revenueProportionByState <- 
  market_share_by_state$revenuesThousandsDollars / market_share_by_state$sumRevenueByState

#  calculate the proportion of total power sales in a state that each power company entity has
market_share_by_state$salesProportionByState <-
  market_share_by_state$salesMegawattHours / market_share_by_state$sumSalesByState

# print the market_share_by_state dataframe in the console
# market_share_by_state

# to do
# format proportions as 0.#### four decimal numbers
# replicate this 'subset and calculate proportions' 
# workflow in more consise R code


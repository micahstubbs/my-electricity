aggregate(. ~ State, data=table6, sum)

aggregate(Customers..Count. ~ State, data = table6, FUN = max)
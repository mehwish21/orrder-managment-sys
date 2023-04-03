# orrder-managment-sys

# orrder-managment-sys

Problem-Order Matching System
You are given the problem of company for matching of orders -similar to stock exchanges.

You would be having two Table to work on namely-“Pending Order Table’’ and “Completed
Order Table”.
In which the given table below is the list of pending orders in the system.


                 Pending Order Table

| Buyer Qty | Buyer Price | Seller Price | Seller Qty |
|-----------|-------------|--------------|------------|
| 10        | 99          | 100          | 20         |
| 50        | 98          | 101          | 20         |
| 70        | 97          | 102          | 130        |
| 80        | 96          | 103          | 150        |
| 10        | 96          | 104          | 70         |

In which this data represents is called as ‘Pending Order Table’. Wherein When the price of
buyer and seller matches , The data is Moved from Pending Order Table to “Completed Order
Table’’.

Completed Order Table
| Price  | Qty |
|--------|-----|
| 100.5  | 50  |



To Further Understand the Order matching Certain examples are given.
Example 1
Existing Pending Order table

                 Pending Order Table

| Buyer Qty | Buyer Price | Seller Price | Seller Qty |
|-----------|-------------|--------------|------------|
| 10        | 99          | 100          | 20         |
| 50        | 98          | 101          | 20         |
| 70        | 97          | 102          | 130        |
| 80        | 96          | 103          | 150        |
| 10        | 96          | 104          | 70         |


Existing Completed Order Table

Completed Order Table
| Price  | Qty |
|--------|-----|
| 100.5  | 50  |


New Input =Buyer, Qty=20, Price=100
Results:
Then the resulted Pending Order table would be
               Pending Order Table

| Buyer Qty | Buyer Price | Seller Price | Seller Qty |
|-----------|-------------|--------------|------------|
| 10        | 99          | 100          | 20         |
| 50        | 98          | 101          | 20         |
| 70        | 97          | 102          | 130        |
| 80        | 96          | 103          | 150        |
| 10        | 96          | 104          | 70         |

Completed Order Table

| Price | Qty |
|-------|-----|
| 100   | 20  |
| 100.5 | 50  |

  
Whereas the new orders placing could be done both by Buyer and Seller

Task

֎ You are required to design the required table-Pending Order Table (Table 1). Wherein
the list of pending order is shown.
֎ The Table 2 to Would be the Completed Order Table. Wherein those orders whose price
have matched would be shown.
֎ And you are required to design and add functionality of form wherein a user could select
Buyer and Seller and place a new Entry.
֎ The candidate would have 3 days to complete the given problem.

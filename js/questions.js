// SQL LeetCode Questions Data
// This file contains all 50 SQL problems with solutions

export const Q=[
  {
    id:175, title:"Combine Two Tables",
    difficulty:"easy", tags:["LEFT JOIN"],
    description:`<p>Table: <code>Person</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |
+-------------+---------+
personId is the primary key (column with unique values) for this table.
This table contains information about the ID of some persons and their first and last names.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Address</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |
+-------------+---------+
addressId is the primary key (column with unique values) for this table.
Each row of this table contains information about the city and state of one person with ID = PersonId.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the first name, last name, city, and state of each person in the <code>Person</code> table. If the address of a <code>personId</code> is not present in the <code>Address</code> table, report <code>null</code> instead.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Person table:
+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
Address table:
+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
<strong>Output:</strong> 
+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
<strong>Explanation:</strong> 
There is no address in the address table for the personId = 1 so we return null in their city and state.
addressId = 1 contains information about the address of personId = 2.
</pre>`,
    mysql:`<span class="kw">SELECT</span> p.firstName, p.lastName, a.city, a.state
<span class="kw">FROM</span> Person p
<span class="kw">LEFT JOIN</span> Address a <span class="kw">ON</span> p.personId = a.personId;`,
    postgresql:`<span class="kw">SELECT</span> p.firstName, p.lastName, a.city, a.state
<span class="kw">FROM</span> Person p
<span class="kw">LEFT JOIN</span> Address a <span class="kw">ON</span> p.personId = a.personId;`,
    sqlserver:`<span class="kw">SELECT</span> p.firstName, p.lastName, a.city, a.state
<span class="kw">FROM</span> Person p
<span class="kw">LEFT JOIN</span> Address a <span class="kw">ON</span> p.personId = a.personId;`,
    oracle:`<span class="kw">SELECT</span> p.firstName, p.lastName, a.city, a.state
<span class="kw">FROM</span> Person p
<span class="kw">LEFT JOIN</span> Address a <span class="kw">ON</span> p.personId = a.personId;`
  },
  {
    id:182, title:"Duplicate Emails",
    difficulty:"easy", tags:["GROUP BY", "HAVING"],
    description:`<p>Table: <code>Person</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report all the duplicate emails. Note that it&#39;s guaranteed that the email&nbsp;field is not NULL.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Person table:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
<strong>Output:</strong> 
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
<strong>Explanation:</strong> a@b.com is repeated two times.
</pre>`,
    mysql:`<span class="kw">SELECT</span> email <span class="kw">AS</span> Email
<span class="kw">FROM</span> Person
<span class="kw">GROUP BY</span> email
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(email) &gt; 1;`,
    postgresql:`<span class="kw">SELECT</span> email <span class="kw">AS</span> Email
<span class="kw">FROM</span> Person
<span class="kw">GROUP BY</span> email
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(email) &gt; 1;`,
    sqlserver:`<span class="kw">SELECT</span> email <span class="kw">AS</span> Email
<span class="kw">FROM</span> Person
<span class="kw">GROUP BY</span> email
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(email) &gt; 1;`,
    oracle:`<span class="kw">SELECT</span> email <span class="kw">AS</span> Email
<span class="kw">FROM</span> Person
<span class="kw">GROUP BY</span> email
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(email) &gt; 1;`
  },
  {
    id:183, title:"Customers Who Never Order",
    difficulty:"easy", tags:["LEFT JOIN"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference columns) of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find all customers who never order anything.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
<strong>Output:</strong> 
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
</pre>`,
    mysql:`<span class="kw">SELECT</span> c.name <span class="kw">AS</span> Customers
<span class="kw">FROM</span> Customers c
<span class="kw">LEFT JOIN</span> Orders o <span class="kw">ON</span> c.id = o.customerId
<span class="kw">WHERE</span> o.id <span class="kw">IS NULL</span>;`,
    postgresql:`<span class="kw">SELECT</span> c.name <span class="kw">AS</span> Customers
<span class="kw">FROM</span> Customers c
<span class="kw">LEFT JOIN</span> Orders o <span class="kw">ON</span> c.id = o.customerId
<span class="kw">WHERE</span> o.id <span class="kw">IS NULL</span>;`,
    sqlserver:`<span class="kw">SELECT</span> c.name <span class="kw">AS</span> Customers
<span class="kw">FROM</span> Customers c
<span class="kw">LEFT JOIN</span> Orders o <span class="kw">ON</span> c.id = o.customerId
<span class="kw">WHERE</span> o.id <span class="kw">IS NULL</span>;`,
    oracle:`<span class="kw">SELECT</span> c.name <span class="kw">AS</span> Customers
<span class="kw">FROM</span> Customers c
<span class="kw">LEFT JOIN</span> Orders o <span class="kw">ON</span> c.id = o.customerId
<span class="kw">WHERE</span> o.id <span class="kw">IS NULL</span>;`
  },
  {
    id:184, title:"Department Highest Salary",
    difficulty:"medium", tags:["RANK", "CTE", "LEFT JOIN"],
    description:`<p>Table: <code>Employee</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| id           | int     |
| name         | varchar |
| salary       | int     |
| departmentId | int     |
+--------------+---------+
id is the primary key (column with unique values) for this table.
departmentId is a foreign key (reference columns) of the ID from the <code>Department </code>table.
Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Department</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table. It is guaranteed that department name is not <code>NULL.</code>
Each row of this table indicates the ID of a department and its name.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find employees who have the highest salary in each of the departments.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Employee table:
+----+-------+--------+--------------+
| id | name  | salary | departmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Jim   | 90000  | 1            |
| 3  | Henry | 80000  | 2            |
| 4  | Sam   | 60000  | 2            |
| 5  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
Department table:
+----+-------+
| id | name  |
+----+-------+
| 1  | IT    |
| 2  | Sales |
+----+-------+
<strong>Output:</strong> 
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Jim      | 90000  |
| Sales      | Henry    | 80000  |
| IT         | Max      | 90000  |
+------------+----------+--------+
<strong>Explanation:</strong> Max and Jim both have the highest salary in the IT department and Henry has the highest salary in the Sales department.
</pre>`,
    mysql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> e.name <span class="kw">AS</span> Employee, e.salary <span class="kw">AS</span> Salary,
           d.name <span class="kw">AS</span> Department,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> e.departmentId <span class="kw">ORDER BY</span> e.salary <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Employee e
    <span class="kw">LEFT JOIN</span> Department d <span class="kw">ON</span> e.departmentId = d.id
)
<span class="kw">SELECT</span> Department, Employee, Salary
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`,
    postgresql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> e.name <span class="kw">AS</span> Employee, e.salary <span class="kw">AS</span> Salary,
           d.name <span class="kw">AS</span> Department,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> e.departmentId <span class="kw">ORDER BY</span> e.salary <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Employee e
    <span class="kw">LEFT JOIN</span> Department d <span class="kw">ON</span> e.departmentId = d.id
)
<span class="kw">SELECT</span> Department, Employee, Salary
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`,
    sqlserver:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> e.name <span class="kw">AS</span> Employee, e.salary <span class="kw">AS</span> Salary,
           d.name <span class="kw">AS</span> Department,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> e.departmentId <span class="kw">ORDER BY</span> e.salary <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Employee e
    <span class="kw">LEFT JOIN</span> Department d <span class="kw">ON</span> e.departmentId = d.id
)
<span class="kw">SELECT</span> Department, Employee, Salary
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`,
    oracle:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> e.name <span class="kw">AS</span> Employee, e.salary <span class="kw">AS</span> Salary,
           d.name <span class="kw">AS</span> Department,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> e.departmentId <span class="kw">ORDER BY</span> e.salary <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Employee e
    <span class="kw">LEFT JOIN</span> Department d <span class="kw">ON</span> e.departmentId = d.id
)
<span class="kw">SELECT</span> Department, Employee, Salary
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`
  },
  {
    id:586, title:"Customer Placing the Largest Number of Orders",
    difficulty:"easy", tags:["RANK", "GROUP BY"],
    description:`<p>Table: <code>Orders</code></p>

<pre>
+-----------------+----------+
| Column Name     | Type     |
+-----------------+----------+
| order_number    | int      |
| customer_number | int      |
+-----------------+----------+
order_number is the primary key (column with unique values) for this table.
This table contains information about the order ID and the customer ID.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the <code>customer_number</code> for the customer who has placed <strong>the largest number of orders</strong>.</p>

<p>The test cases are generated so that <strong>exactly one customer</strong> will have placed more orders than any other customer.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Orders table:
+--------------+-----------------+
| order_number | customer_number |
+--------------+-----------------+
| 1            | 1               |
| 2            | 2               |
| 3            | 3               |
| 4            | 3               |
+--------------+-----------------+
<strong>Output:</strong> 
+-----------------+
| customer_number |
+-----------------+
| 3               |
+-----------------+
<strong>Explanation:</strong> 
The customer with number 3 has two orders, which is greater than either customer 1 or 2 because each of them only has one order. 
So the result is customer_number 3.
</pre>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if more than one customer has the largest number of orders, can you find all the <code>customer_number</code> in this case?</p>`,
    mysql:`<span class="kw">SELECT</span> customer_number
<span class="kw">FROM</span> Orders
<span class="kw">GROUP BY</span> customer_number
<span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(order_number) <span class="kw">DESC</span>
<span class="kw">LIMIT</span> 1;`,
    postgresql:`<span class="kw">SELECT</span> customer_number
<span class="kw">FROM</span> Orders
<span class="kw">GROUP BY</span> customer_number
<span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(order_number) <span class="kw">DESC</span>
<span class="kw">LIMIT</span> 1;`,
    sqlserver:`<span class="kw">SELECT</span> <span class="kw">TOP</span> 1 customer_number
<span class="kw">FROM</span> Orders
<span class="kw">GROUP BY</span> customer_number
<span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(order_number) <span class="kw">DESC</span>;`,
    oracle:`<span class="kw">SELECT</span> customer_number
<span class="kw">FROM</span> (
    <span class="kw">SELECT</span> customer_number,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(order_number) <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders
    <span class="kw">GROUP BY</span> customer_number
)
<span class="kw">WHERE</span> rn = 1;`
  },
  {
    id:603, title:"Consecutive Available Seats",
    difficulty:"easy", tags:["Window Fn", "CASE WHEN", "LAG/LEAD"],
    description:`<p>Table: <code>Cinema</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| seat_id     | int  |
| free        | bool |
+-------------+------+
seat_id is an auto-increment column for this table.
Each row of this table indicates whether the i<sup>th</sup> seat is free or not. 1 means free while 0 means occupied.
</pre>

<p>&nbsp;</p>

<p>Find all the consecutive available seats in the cinema.</p>

<p>Return the result table <strong>ordered</strong> by <code>seat_id</code> <strong>in ascending order</strong>.</p>

<p>The test cases are generated so that more than two seats are consecutively available.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Cinema table:
+---------+------+
| seat_id | free |
+---------+------+
| 1       | 1    |
| 2       | 0    |
| 3       | 1    |
| 4       | 1    |
| 5       | 1    |
+---------+------+
<strong>Output:</strong> 
+---------+
| seat_id |
+---------+
| 3       |
| 4       |
| 5       |
+---------+
</pre>`,
    mysql:`<span class="kw">SELECT</span> seat_id
<span class="kw">FROM</span> (
    <span class="kw">SELECT</span> seat_id,
           <span class="fn">LAG</span>(seat_id)  <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> prev_seat,
           <span class="fn">LEAD</span>(seat_id) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> next_seat
    <span class="kw">FROM</span> Cinema
    <span class="kw">WHERE</span> free = 1
) t
<span class="kw">WHERE</span> (seat_id - prev_seat = 1) <span class="kw">OR</span> (next_seat - seat_id = 1)
<span class="kw">ORDER BY</span> seat_id;`,
    postgresql:`<span class="kw">SELECT</span> seat_id
<span class="kw">FROM</span> (
    <span class="kw">SELECT</span> seat_id,
           <span class="fn">LAG</span>(seat_id)  <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> prev_seat,
           <span class="fn">LEAD</span>(seat_id) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> next_seat
    <span class="kw">FROM</span> Cinema
    <span class="kw">WHERE</span> free = 1
) t
<span class="kw">WHERE</span> (seat_id - prev_seat = 1) <span class="kw">OR</span> (next_seat - seat_id = 1)
<span class="kw">ORDER BY</span> seat_id;`,
    sqlserver:`<span class="kw">SELECT</span> seat_id
<span class="kw">FROM</span> (
    <span class="kw">SELECT</span> seat_id,
           <span class="fn">LAG</span>(seat_id)  <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> prev_seat,
           <span class="fn">LEAD</span>(seat_id) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> next_seat
    <span class="kw">FROM</span> Cinema
    <span class="kw">WHERE</span> free = 1
) t
<span class="kw">WHERE</span> (seat_id - prev_seat = 1) <span class="kw">OR</span> (next_seat - seat_id = 1)
<span class="kw">ORDER BY</span> seat_id;`,
    oracle:`<span class="kw">SELECT</span> seat_id
<span class="kw">FROM</span> (
    <span class="kw">SELECT</span> seat_id,
           <span class="fn">LAG</span>(seat_id)  <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> prev_seat,
           <span class="fn">LEAD</span>(seat_id) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> seat_id) <span class="kw">AS</span> next_seat
    <span class="kw">FROM</span> Cinema
    <span class="kw">WHERE</span> free = 1
)
<span class="kw">WHERE</span> (seat_id - prev_seat = 1) <span class="kw">OR</span> (next_seat - seat_id = 1)
<span class="kw">ORDER BY</span> seat_id;`
  },
  {
    id:607, title:"Sales Person",
    difficulty:"easy", tags:["LEFT JOIN"],
    description:`<p>Table: <code>SalesPerson</code></p>

<pre>
+-----------------+---------+
| Column Name     | Type    |
+-----------------+---------+
| sales_id        | int     |
| name            | varchar |
| salary          | int     |
| commission_rate | int     |
| hire_date       | date    |
+-----------------+---------+
sales_id is the primary key (column with unique values) for this table.
Each row of this table indicates the name and the ID of a salesperson alongside their salary, commission rate, and hire date.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Company</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| com_id      | int     |
| name        | varchar |
| city        | varchar |
+-------------+---------+
com_id is the primary key (column with unique values) for this table.
Each row of this table indicates the name and the ID of a company and the city in which the company is located.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| order_id    | int  |
| order_date  | date |
| com_id      | int  |
| sales_id    | int  |
| amount      | int  |
+-------------+------+
order_id is the primary key (column with unique values) for this table.
com_id is a foreign key (reference column) to com_id from the Company table.
sales_id is a foreign key (reference column) to sales_id from the SalesPerson table.
Each row of this table contains information about one order. This includes the ID of the company, the ID of the salesperson, the date of the order, and the amount paid.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the names of all the salespersons who did not have any orders related to the company with the name <strong>&quot;RED&quot;</strong>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
SalesPerson table:
+----------+------+--------+-----------------+------------+
| sales_id | name | salary | commission_rate | hire_date  |
+----------+------+--------+-----------------+------------+
| 1        | John | 100000 | 6               | 4/1/2006   |
| 2        | Amy  | 12000  | 5               | 5/1/2010   |
| 3        | Mark | 65000  | 12              | 12/25/2008 |
| 4        | Pam  | 25000  | 25              | 1/1/2005   |
| 5        | Alex | 5000   | 10              | 2/3/2007   |
+----------+------+--------+-----------------+------------+
Company table:
+--------+--------+----------+
| com_id | name   | city     |
+--------+--------+----------+
| 1      | RED    | Boston   |
| 2      | ORANGE | New York |
| 3      | YELLOW | Boston   |
| 4      | GREEN  | Austin   |
+--------+--------+----------+
Orders table:
+----------+------------+--------+----------+--------+
| order_id | order_date | com_id | sales_id | amount |
+----------+------------+--------+----------+--------+
| 1        | 1/1/2014   | 3      | 4        | 10000  |
| 2        | 2/1/2014   | 4      | 5        | 5000   |
| 3        | 3/1/2014   | 1      | 1        | 50000  |
| 4        | 4/1/2014   | 1      | 4        | 25000  |
+----------+------------+--------+----------+--------+
<strong>Output:</strong> 
+------+
| name |
+------+
| Amy  |
| Mark |
| Alex |
+------+
<strong>Explanation:</strong> 
According to orders 3 and 4 in the Orders table, it is easy to tell that only salesperson John and Pam have sales to company RED, so we report all the other names in the table salesperson.
</pre>`,
    mysql:`<span class="kw">SELECT</span> name
<span class="kw">FROM</span> SalesPerson
<span class="kw">WHERE</span> sales_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> o.sales_id
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Company c <span class="kw">ON</span> o.com_id = c.com_id
    <span class="kw">WHERE</span> c.name = 'RED'
);`,
    postgresql:`<span class="kw">SELECT</span> name
<span class="kw">FROM</span> SalesPerson
<span class="kw">WHERE</span> sales_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> o.sales_id
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Company c <span class="kw">ON</span> o.com_id = c.com_id
    <span class="kw">WHERE</span> c.name = 'RED'
);`,
    sqlserver:`<span class="kw">SELECT</span> name
<span class="kw">FROM</span> SalesPerson
<span class="kw">WHERE</span> sales_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> o.sales_id
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Company c <span class="kw">ON</span> o.com_id = c.com_id
    <span class="kw">WHERE</span> c.name = 'RED'
);`,
    oracle:`<span class="kw">SELECT</span> name
<span class="kw">FROM</span> SalesPerson
<span class="kw">WHERE</span> sales_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> o.sales_id
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Company c <span class="kw">ON</span> o.com_id = c.com_id
    <span class="kw">WHERE</span> c.name = 'RED'
);`
  },
  {
    id:608, title:"Tree Node",
    difficulty:"medium", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Tree</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| p_id        | int  |
+-------------+------+
id is the column with unique values for this table.
Each row of this table contains information about the id of a node and the id of its parent node in a tree.
The given structure is always a valid tree.
</pre>

<p>&nbsp;</p>

<p>Each node in the tree can be one of three types:</p>

<ul>
	<li><strong>&quot;Leaf&quot;</strong>: if the node is a leaf node.</li>
	<li><strong>&quot;Root&quot;</strong>: if the node is the root of the tree.</li>
	<li><strong>&quot;Inner&quot;</strong>: If the node is neither a leaf node nor a root node.</li>
</ul>

<p>Write a solution to report the type of each node in the tree.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/10/22/tree1.jpg" style="width: 304px; height: 224px;" />
<pre>
<strong>Input:</strong> 
Tree table:
+----+------+
| id | p_id |
+----+------+
| 1  | null |
| 2  | 1    |
| 3  | 1    |
| 4  | 2    |
| 5  | 2    |
+----+------+
<strong>Output:</strong> 
+----+-------+
| id | type  |
+----+-------+
| 1  | Root  |
| 2  | Inner |
| 3  | Leaf  |
| 4  | Leaf  |
| 5  | Leaf  |
+----+-------+
<strong>Explanation:</strong> 
Node 1 is the root node because its parent node is null and it has child nodes 2 and 3.
Node 2 is an inner node because it has parent node 1 and child node 4 and 5.
Nodes 3, 4, and 5 are leaf nodes because they have parent nodes and they do not have child nodes.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/10/22/tree2.jpg" style="width: 64px; height: 65px;" />
<pre>
<strong>Input:</strong> 
Tree table:
+----+------+
| id | p_id |
+----+------+
| 1  | null |
+----+------+
<strong>Output:</strong> 
+----+-------+
| id | type  |
+----+-------+
| 1  | Root  |
+----+-------+
<strong>Explanation:</strong> If there is only one node on the tree, you only need to output its root attributes.
</pre>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as <a href="https://leetcode.com/problems/binary-tree-nodes/description/" target="_blank"> 3054: Binary Tree Nodes.</a></p>`,
    mysql:`<span class="kw">SELECT</span> id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> p_id <span class="kw">IS NULL</span> <span class="kw">THEN</span> 'Root'
        <span class="kw">WHEN</span> id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> p_id <span class="kw">FROM</span> Tree <span class="kw">WHERE</span> p_id <span class="kw">IS NOT NULL</span>) <span class="kw">THEN</span> 'Inner'
        <span class="kw">ELSE</span> 'Leaf'
    <span class="kw">END</span> <span class="kw">AS</span> type
<span class="kw">FROM</span> Tree;`,
    postgresql:`<span class="kw">SELECT</span> id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> p_id <span class="kw">IS NULL</span> <span class="kw">THEN</span> 'Root'
        <span class="kw">WHEN</span> id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> p_id <span class="kw">FROM</span> Tree <span class="kw">WHERE</span> p_id <span class="kw">IS NOT NULL</span>) <span class="kw">THEN</span> 'Inner'
        <span class="kw">ELSE</span> 'Leaf'
    <span class="kw">END</span> <span class="kw">AS</span> type
<span class="kw">FROM</span> Tree;`,
    sqlserver:`<span class="kw">SELECT</span> id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> p_id <span class="kw">IS NULL</span> <span class="kw">THEN</span> 'Root'
        <span class="kw">WHEN</span> id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> p_id <span class="kw">FROM</span> Tree <span class="kw">WHERE</span> p_id <span class="kw">IS NOT NULL</span>) <span class="kw">THEN</span> 'Inner'
        <span class="kw">ELSE</span> 'Leaf'
    <span class="kw">END</span> <span class="kw">AS</span> type
<span class="kw">FROM</span> Tree;`,
    oracle:`<span class="kw">SELECT</span> id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> p_id <span class="kw">IS NULL</span> <span class="kw">THEN</span> 'Root'
        <span class="kw">WHEN</span> id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> p_id <span class="kw">FROM</span> Tree <span class="kw">WHERE</span> p_id <span class="kw">IS NOT NULL</span>) <span class="kw">THEN</span> 'Inner'
        <span class="kw">ELSE</span> 'Leaf'
    <span class="kw">END</span> <span class="kw">AS</span> type
<span class="kw">FROM</span> Tree;`
  },
  {
    id:613, title:"Shortest Distance in a Line",
    difficulty:"easy", tags:["CTE", "CROSS JOIN"],
    description:`<p>Table: <code>Point</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| x           | int  |
+-------------+------+
In SQL, x is the primary key column for this table.
Each row of this table indicates the position of a point on the X-axis.
</pre>

<p>&nbsp;</p>

<p>Find the shortest distance between any two points from the <code>Point</code> table.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Point table:
+----+
| x  |
+----+
| -1 |
| 0  |
| 2  |
+----+
<strong>Output:</strong> 
+----------+
| shortest |
+----------+
| 1        |
+----------+
<strong>Explanation:</strong> The shortest distance is between points -1 and 0 which is |(-1) - 0| = 1.
</pre>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> How could you optimize your solution if the <code>Point</code> table is ordered <strong>in ascending order</strong>?</p>`,
    mysql:`<span class="kw">SELECT</span> <span class="fn">MIN</span>(<span class="fn">ABS</span>(p1.x - p2.x)) <span class="kw">AS</span> shortest
<span class="kw">FROM</span> Point p1
<span class="kw">CROSS JOIN</span> Point p2
<span class="kw">WHERE</span> p1.x &lt;&gt; p2.x;`,
    postgresql:`<span class="kw">SELECT</span> <span class="fn">MIN</span>(<span class="fn">ABS</span>(p1.x - p2.x)) <span class="kw">AS</span> shortest
<span class="kw">FROM</span> Point p1
<span class="kw">CROSS JOIN</span> Point p2
<span class="kw">WHERE</span> p1.x &lt;&gt; p2.x;`,
    sqlserver:`<span class="kw">SELECT</span> <span class="fn">MIN</span>(<span class="fn">ABS</span>(p1.x - p2.x)) <span class="kw">AS</span> shortest
<span class="kw">FROM</span> Point p1
<span class="kw">CROSS JOIN</span> Point p2
<span class="kw">WHERE</span> p1.x &lt;&gt; p2.x;`,
    oracle:`<span class="kw">SELECT</span> <span class="fn">MIN</span>(<span class="fn">ABS</span>(p1.x - p2.x)) <span class="kw">AS</span> shortest
<span class="kw">FROM</span> Point p1
<span class="kw">CROSS JOIN</span> Point p2
<span class="kw">WHERE</span> p1.x &lt;&gt; p2.x;`
  },
  {
    id:1136, title:"Actors and Directors Who Cooperated At Least Three Times",
    difficulty:"easy", tags:["GROUP BY", "HAVING"],
    description:`<p>Table: <code>ActorDirector</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| actor_id    | int     |
| director_id | int     |
| timestamp   | int     |
+-------------+---------+
timestamp is the primary key (column with unique values) for this table.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find all the pairs <code>(actor_id, director_id)</code> where the actor has cooperated with the director at least three times.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
ActorDirector table:
+-------------+-------------+-------------+
| actor_id    | director_id | timestamp   |
+-------------+-------------+-------------+
| 1           | 1           | 0           |
| 1           | 1           | 1           |
| 1           | 1           | 2           |
| 1           | 2           | 3           |
| 1           | 2           | 4           |
| 2           | 1           | 5           |
| 2           | 1           | 6           |
+-------------+-------------+-------------+
<strong>Output:</strong> 
+-------------+-------------+
| actor_id    | director_id |
+-------------+-------------+
| 1           | 1           |
+-------------+-------------+
<strong>Explanation:</strong> The only pair is (1, 1) where they cooperated exactly 3 times.
</pre>`,
    mysql:`<span class="kw">SELECT</span> actor_id, director_id
<span class="kw">FROM</span> ActorDirector
<span class="kw">GROUP BY</span> actor_id, director_id
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt;= 3;`,
    postgresql:`<span class="kw">SELECT</span> actor_id, director_id
<span class="kw">FROM</span> ActorDirector
<span class="kw">GROUP BY</span> actor_id, director_id
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt;= 3;`,
    sqlserver:`<span class="kw">SELECT</span> actor_id, director_id
<span class="kw">FROM</span> ActorDirector
<span class="kw">GROUP BY</span> actor_id, director_id
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt;= 3;`,
    oracle:`<span class="kw">SELECT</span> actor_id, director_id
<span class="kw">FROM</span> ActorDirector
<span class="kw">GROUP BY</span> actor_id, director_id
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt;= 3;`
  },
  {
    id:1163, title:"Project Employees III",
    difficulty:"medium", tags:["RANK", "CTE", "LEFT JOIN"],
    description:`<p>Table: <code>Project</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| project_id  | int     |
| employee_id | int     |
+-------------+---------+
(project_id, employee_id) is the primary key (combination of columns with unique values) of this table.
employee_id is a foreign key (reference column) to <code>Employee</code> table.
Each row of this table indicates that the employee with employee_id is working on the project with project_id.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Employee</code></p>

<pre>
+------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| employee_id      | int     |
| name             | varchar |
| experience_years | int     |
+------------------+---------+
employee_id is the primary key (column with unique values) of this table.
Each row of this table contains information about one employee.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report&nbsp;the <strong>most experienced</strong> employees in each project. In case of a tie, report all employees with the maximum number of experience years.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Project table:
+-------------+-------------+
| project_id  | employee_id |
+-------------+-------------+
| 1           | 1           |
| 1           | 2           |
| 1           | 3           |
| 2           | 1           |
| 2           | 4           |
+-------------+-------------+
Employee table:
+-------------+--------+------------------+
| employee_id | name   | experience_years |
+-------------+--------+------------------+
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 3                |
| 4           | Doe    | 2                |
+-------------+--------+------------------+
<strong>Output:</strong> 
+-------------+---------------+
| project_id  | employee_id   |
+-------------+---------------+
| 1           | 1             |
| 1           | 3             |
| 2           | 1             |
+-------------+---------------+
<strong>Explanation:</strong> Both employees with id 1 and 3 have the most experience among the employees of the first project. For the second project, the employee with id 1 has the most experience.
</pre>`,
    mysql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> p.project_id, p.employee_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> p.project_id <span class="kw">ORDER BY</span> e.experience_years <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Project p
    <span class="kw">JOIN</span> Employee e <span class="kw">ON</span> p.employee_id = e.employee_id
)
<span class="kw">SELECT</span> project_id, employee_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`,
    postgresql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> p.project_id, p.employee_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> p.project_id <span class="kw">ORDER BY</span> e.experience_years <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Project p
    <span class="kw">JOIN</span> Employee e <span class="kw">ON</span> p.employee_id = e.employee_id
)
<span class="kw">SELECT</span> project_id, employee_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`,
    sqlserver:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> p.project_id, p.employee_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> p.project_id <span class="kw">ORDER BY</span> e.experience_years <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Project p
    <span class="kw">JOIN</span> Employee e <span class="kw">ON</span> p.employee_id = e.employee_id
)
<span class="kw">SELECT</span> project_id, employee_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`,
    oracle:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> p.project_id, p.employee_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> p.project_id <span class="kw">ORDER BY</span> e.experience_years <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Project p
    <span class="kw">JOIN</span> Employee e <span class="kw">ON</span> p.employee_id = e.employee_id
)
<span class="kw">SELECT</span> project_id, employee_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1;`
  },
  {
    id:1179, title:"Game Play Analysis I",
    difficulty:"easy", tags:["RANK"],
    description:`<p>Table: <code>Activity</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key (combination of columns with unique values) of this table.
This table shows the activity of players of some games.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the <strong>first login date</strong> for each player.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+
<strong>Output:</strong> 
+-----------+-------------+
| player_id | first_login |
+-----------+-------------+
| 1         | 2016-03-01  |
| 2         | 2017-06-25  |
| 3         | 2016-03-02  |
+-----------+-------------+
</pre>`,
    mysql:`<span class="kw">SELECT</span> player_id, <span class="fn">MIN</span>(event_date) <span class="kw">AS</span> first_login
<span class="kw">FROM</span> Activity
<span class="kw">GROUP BY</span> player_id;`,
    postgresql:`<span class="kw">SELECT</span> player_id, <span class="fn">MIN</span>(event_date) <span class="kw">AS</span> first_login
<span class="kw">FROM</span> Activity
<span class="kw">GROUP BY</span> player_id;`,
    sqlserver:`<span class="kw">SELECT</span> player_id, <span class="fn">MIN</span>(event_date) <span class="kw">AS</span> first_login
<span class="kw">FROM</span> Activity
<span class="kw">GROUP BY</span> player_id;`,
    oracle:`<span class="kw">SELECT</span> player_id, <span class="fn">MIN</span>(event_date) <span class="kw">AS</span> first_login
<span class="kw">FROM</span> Activity
<span class="kw">GROUP BY</span> player_id;`
  },
  {
    id:1180, title:"Game Play Analysis II",
    difficulty:"easy", tags:["ROW_NUMBER", "CTE"],
    description:`<p>Table: <code>Activity</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key (combination of columns with unique values) of this table.
This table shows the activity of players of some games.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the <strong>device</strong> that is first logged in for each player.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+
<strong>Output:</strong> 
+-----------+-----------+
| player_id | device_id |
+-----------+-----------+
| 1         | 2         |
| 2         | 3         |
| 3         | 1         |
+-----------+-----------+
</pre>`,
    mysql:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> *, <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> player_id <span class="kw">ORDER BY</span> event_date) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Activity
)
<span class="kw">SELECT</span> player_id, device_id
<span class="kw">FROM</span> cte
<span class="kw">WHERE</span> rn = 1;`,
    postgresql:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> *, <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> player_id <span class="kw">ORDER BY</span> event_date) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Activity
)
<span class="kw">SELECT</span> player_id, device_id
<span class="kw">FROM</span> cte
<span class="kw">WHERE</span> rn = 1;`,
    sqlserver:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> *, <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> player_id <span class="kw">ORDER BY</span> event_date) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Activity
)
<span class="kw">SELECT</span> player_id, device_id
<span class="kw">FROM</span> cte
<span class="kw">WHERE</span> rn = 1;`,
    oracle:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> player_id, device_id,
           <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> player_id <span class="kw">ORDER BY</span> event_date) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Activity
)
<span class="kw">SELECT</span> player_id, device_id
<span class="kw">FROM</span> cte
<span class="kw">WHERE</span> rn = 1;`
  },
  {
    id:1181, title:"Game Play Analysis III",
    difficulty:"medium", tags:["Window Fn"],
    description:`<p>Table: <code>Activity</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key (column with unique values) of this table.
This table shows the activity of players of some games.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report for each player and date, how many games played <strong>so far</strong> by the player. That is, the total number of games played by the player until that date. Check the example for clarity.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 1         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+
<strong>Output:</strong> 
+-----------+------------+---------------------+
| player_id | event_date | games_played_so_far |
+-----------+------------+---------------------+
| 1         | 2016-03-01 | 5                   |
| 1         | 2016-05-02 | 11                  |
| 1         | 2017-06-25 | 12                  |
| 3         | 2016-03-02 | 0                   |
| 3         | 2018-07-03 | 5                   |
+-----------+------------+---------------------+
<strong>Explanation:</strong> 
For the player with id 1, 5 + 6 = 11 games played by 2016-05-02, and 5 + 6 + 1 = 12 games played by 2017-06-25.
For the player with id 3, 0 + 5 = 5 games played by 2018-07-03.
Note that for each player we only care about the days when the player logged in.
</pre>`,
    mysql:`<span class="kw">SELECT</span> player_id, event_date,
       <span class="fn">SUM</span>(games_played) <span class="kw">OVER</span> (
           <span class="kw">PARTITION BY</span> player_id
           <span class="kw">ORDER BY</span> event_date
           <span class="kw">ROWS BETWEEN</span> <span class="kw">UNBOUNDED PRECEDING</span> <span class="kw">AND</span> <span class="kw">CURRENT ROW</span>
       ) <span class="kw">AS</span> games_played_so_far
<span class="kw">FROM</span> Activity;`,
    postgresql:`<span class="kw">SELECT</span> player_id, event_date,
       <span class="fn">SUM</span>(games_played) <span class="kw">OVER</span> (
           <span class="kw">PARTITION BY</span> player_id
           <span class="kw">ORDER BY</span> event_date
           <span class="kw">ROWS BETWEEN</span> <span class="kw">UNBOUNDED PRECEDING</span> <span class="kw">AND</span> <span class="kw">CURRENT ROW</span>
       ) <span class="kw">AS</span> games_played_so_far
<span class="kw">FROM</span> Activity;`,
    sqlserver:`<span class="kw">SELECT</span> player_id, event_date,
       <span class="fn">SUM</span>(games_played) <span class="kw">OVER</span> (
           <span class="kw">PARTITION BY</span> player_id
           <span class="kw">ORDER BY</span> event_date
           <span class="kw">ROWS BETWEEN</span> <span class="kw">UNBOUNDED PRECEDING</span> <span class="kw">AND</span> <span class="kw">CURRENT ROW</span>
       ) <span class="kw">AS</span> games_played_so_far
<span class="kw">FROM</span> Activity;`,
    oracle:`<span class="kw">SELECT</span> player_id, event_date,
       <span class="fn">SUM</span>(games_played) <span class="kw">OVER</span> (
           <span class="kw">PARTITION BY</span> player_id
           <span class="kw">ORDER BY</span> event_date
           <span class="kw">ROWS BETWEEN</span> <span class="kw">UNBOUNDED PRECEDING</span> <span class="kw">AND</span> <span class="kw">CURRENT ROW</span>
       ) <span class="kw">AS</span> games_played_so_far
<span class="kw">FROM</span> Activity;`
  },
  {
    id:1214, title:"Highest Grade For Each Student",
    difficulty:"medium", tags:["RANK"],
    description:`<p>Table: <code>Enrollments</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| student_id    | int     |
| course_id     | int     |
| grade         | int     |
+---------------+---------+
(student_id, course_id) is the primary key (combination of columns with unique values) of this table.
grade is never NULL.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the highest grade with its corresponding course for each student. In case of a tie, you should find the course with the smallest <code>course_id</code>.</p>

<p>Return the result table ordered by <code>student_id</code> in <strong>ascending order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Enrollments table:
+------------+-------------------+
| student_id | course_id | grade |
+------------+-----------+-------+
| 2          | 2         | 95    |
| 2          | 3         | 95    |
| 1          | 1         | 90    |
| 1          | 2         | 99    |
| 3          | 1         | 80    |
| 3          | 2         | 75    |
| 3          | 3         | 82    |
+------------+-----------+-------+
<strong>Output:</strong> 
+------------+-------------------+
| student_id | course_id | grade |
+------------+-----------+-------+
| 1          | 2         | 99    |
| 2          | 2         | 95    |
| 3          | 3         | 82    |
+------------+-----------+-------+
</pre>`,
    mysql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id, course_id, grade,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> student_id <span class="kw">ORDER BY</span> grade <span class="kw">DESC</span>, course_id <span class="kw">ASC</span>) <span class="kw">AS</span> rnk
    <span class="kw">FROM</span> Enrollments
)
<span class="kw">SELECT</span> student_id, course_id, grade
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rnk = 1
<span class="kw">ORDER BY</span> student_id;`,
    postgresql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id, course_id, grade,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> student_id <span class="kw">ORDER BY</span> grade <span class="kw">DESC</span>, course_id <span class="kw">ASC</span>) <span class="kw">AS</span> rnk
    <span class="kw">FROM</span> Enrollments
)
<span class="kw">SELECT</span> student_id, course_id, grade
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rnk = 1
<span class="kw">ORDER BY</span> student_id;`,
    sqlserver:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id, course_id, grade,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> student_id <span class="kw">ORDER BY</span> grade <span class="kw">DESC</span>, course_id <span class="kw">ASC</span>) <span class="kw">AS</span> rnk
    <span class="kw">FROM</span> Enrollments
)
<span class="kw">SELECT</span> student_id, course_id, grade
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rnk = 1
<span class="kw">ORDER BY</span> student_id;`,
    oracle:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id, course_id, grade,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> student_id <span class="kw">ORDER BY</span> grade <span class="kw">DESC</span>, course_id <span class="kw">ASC</span>) <span class="kw">AS</span> rnk
    <span class="kw">FROM</span> Enrollments
)
<span class="kw">SELECT</span> student_id, course_id, grade
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rnk = 1
<span class="kw">ORDER BY</span> student_id;`
  },
  {
    id:1291, title:"Immediate Food Delivery I",
    difficulty:"easy", tags:["CASE WHEN"],
    description:`<p>Table: <code>Delivery</code></p>

<pre>
+-----------------------------+---------+
| Column Name                 | Type    |
+-----------------------------+---------+
| delivery_id                 | int     |
| customer_id                 | int     |
| order_date                  | date    |
| customer_pref_delivery_date | date    |
+-----------------------------+---------+
delivery_id is the primary key (column with unique values) of this table.
The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).
</pre>

<p>&nbsp;</p>

<p>If the customer&#39;s preferred delivery date is the same as the order date, then the order is called <strong>immediate;</strong> otherwise, it is called <strong>scheduled</strong>.</p>

<p>Write a solution to find the percentage of immediate orders in the table, <strong>rounded to 2 decimal places</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Delivery table:
+-------------+-------------+------------+-----------------------------+
| delivery_id | customer_id | order_date | customer_pref_delivery_date |
+-------------+-------------+------------+-----------------------------+
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 5           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-11                  |
| 4           | 3           | 2019-08-24 | 2019-08-26                  |
| 5           | 4           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |
+-------------+-------------+------------+-----------------------------+
<strong>Output:</strong> 
+----------------------+
| immediate_percentage |
+----------------------+
| 33.33                |
+----------------------+
<strong>Explanation:</strong> The orders with delivery id 2 and 3 are immediate while the others are scheduled.
</pre>`,
    mysql:`<span class="kw">SELECT</span> <span class="fn">ROUND</span>(
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> order_date = customer_pref_delivery_date <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>) * 100.0
    / <span class="fn">COUNT</span>(*), 2
) <span class="kw">AS</span> immediate_percentage
<span class="kw">FROM</span> Delivery;`,
    postgresql:`<span class="kw">SELECT</span> <span class="fn">ROUND</span>(
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> order_date = customer_pref_delivery_date <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>) * 100.0
    / <span class="fn">COUNT</span>(*), 2
) <span class="kw">AS</span> immediate_percentage
<span class="kw">FROM</span> Delivery;`,
    sqlserver:`<span class="kw">SELECT</span> <span class="fn">ROUND</span>(
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> order_date = customer_pref_delivery_date <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>) * 100.0
    / <span class="fn">COUNT</span>(*), 2
) <span class="kw">AS</span> immediate_percentage
<span class="kw">FROM</span> Delivery;`,
    oracle:`<span class="kw">SELECT</span> <span class="fn">ROUND</span>(
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> order_date = customer_pref_delivery_date <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>) * 100.0
    / <span class="fn">COUNT</span>(*), 2
) <span class="kw">AS</span> immediate_percentage
<span class="kw">FROM</span> Delivery;`
  },
  {
    id:1339, title:"Team Scores in Football Tournament",
    difficulty:"medium", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Teams</code></p>

<pre>
+---------------+----------+
| Column Name   | Type     |
+---------------+----------+
| team_id       | int      |
| team_name     | varchar  |
+---------------+----------+
team_id is the column with unique values of this table.
Each row of this table represents a single football team.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Matches</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| match_id      | int     |
| host_team     | int     |
| guest_team    | int     | 
| host_goals    | int     |
| guest_goals   | int     |
+---------------+---------+
match_id is the column of unique values of this table.
Each row is a record of a finished match between two different teams. 
Teams host_team and guest_team are represented by their IDs in the Teams table (team_id), and they scored host_goals and guest_goals goals, respectively.
</pre>

<p>&nbsp;</p>
You would like to compute the scores of all teams after all matches. Points are awarded as follows:

<ul>
	<li>A team receives <strong>three points</strong> if they win a match (i.e., Scored more goals than the opponent team).</li>
	<li>A team receives <strong>one point</strong> if they draw a match (i.e., Scored the same number of goals as the opponent team).</li>
	<li>A team receives <strong>no points</strong> if they lose a match (i.e., Scored fewer goals than the opponent team).</li>
</ul>

<p>Write a solution that selects the <code>team_id</code>, <code>team_name</code> and <code>num_points</code> of each team in the tournament after all described matches.</p>

<p>Return the result table ordered by <code>num_points</code> <strong>in decreasing order</strong>. In case of a tie, order the records by <code>team_id</code> <strong>in increasing order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Teams table:
+-----------+--------------+
| team_id   | team_name    |
+-----------+--------------+
| 10        | Leetcode FC  |
| 20        | NewYork FC   |
| 30        | Atlanta FC   |
| 40        | Chicago FC   |
| 50        | Toronto FC   |
+-----------+--------------+
Matches table:
+------------+--------------+---------------+-------------+--------------+
| match_id   | host_team    | guest_team    | host_goals  | guest_goals  |
+------------+--------------+---------------+-------------+--------------+
| 1          | 10           | 20            | 3           | 0            |
| 2          | 30           | 10            | 2           | 2            |
| 3          | 10           | 50            | 5           | 1            |
| 4          | 20           | 30            | 1           | 0            |
| 5          | 50           | 30            | 1           | 0            |
+------------+--------------+---------------+-------------+--------------+
<strong>Output:</strong> 
+------------+--------------+---------------+
| team_id    | team_name    | num_points    |
+------------+--------------+---------------+
| 10         | Leetcode FC  | 7             |
| 20         | NewYork FC   | 3             |
| 50         | Toronto FC   | 3             |
| 30         | Atlanta FC   | 1             |
| 40         | Chicago FC   | 0             |
+------------+--------------+---------------+
</pre>`,
    mysql:`<span class="kw">WITH</span> scores <span class="kw">AS</span> (
    <span class="kw">SELECT</span> host_team <span class="kw">AS</span> team_id,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> host_goals &gt; guest_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span> <span class="kw">AS</span> pts
    <span class="kw">FROM</span> Matches
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> guest_team,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> guest_goals &gt; host_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>
    <span class="kw">FROM</span> Matches
)
<span class="kw">SELECT</span> t.team_id, t.team_name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(s.pts), 0) <span class="kw">AS</span> num_points
<span class="kw">FROM</span> Teams t
<span class="kw">LEFT JOIN</span> scores s <span class="kw">ON</span> t.team_id = s.team_id
<span class="kw">GROUP BY</span> t.team_id, t.team_name
<span class="kw">ORDER BY</span> num_points <span class="kw">DESC</span>, t.team_id <span class="kw">ASC</span>;`,
    postgresql:`<span class="kw">WITH</span> scores <span class="kw">AS</span> (
    <span class="kw">SELECT</span> host_team <span class="kw">AS</span> team_id,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> host_goals &gt; guest_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span> <span class="kw">AS</span> pts
    <span class="kw">FROM</span> Matches
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> guest_team,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> guest_goals &gt; host_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>
    <span class="kw">FROM</span> Matches
)
<span class="kw">SELECT</span> t.team_id, t.team_name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(s.pts), 0) <span class="kw">AS</span> num_points
<span class="kw">FROM</span> Teams t
<span class="kw">LEFT JOIN</span> scores s <span class="kw">ON</span> t.team_id = s.team_id
<span class="kw">GROUP BY</span> t.team_id, t.team_name
<span class="kw">ORDER BY</span> num_points <span class="kw">DESC</span>, t.team_id <span class="kw">ASC</span>;`,
    sqlserver:`<span class="kw">WITH</span> scores <span class="kw">AS</span> (
    <span class="kw">SELECT</span> host_team <span class="kw">AS</span> team_id,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> host_goals &gt; guest_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span> <span class="kw">AS</span> pts
    <span class="kw">FROM</span> Matches
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> guest_team,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> guest_goals &gt; host_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>
    <span class="kw">FROM</span> Matches
)
<span class="kw">SELECT</span> t.team_id, t.team_name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(s.pts), 0) <span class="kw">AS</span> num_points
<span class="kw">FROM</span> Teams t
<span class="kw">LEFT JOIN</span> scores s <span class="kw">ON</span> t.team_id = s.team_id
<span class="kw">GROUP BY</span> t.team_id, t.team_name
<span class="kw">ORDER BY</span> num_points <span class="kw">DESC</span>, t.team_id <span class="kw">ASC</span>;`,
    oracle:`<span class="kw">WITH</span> scores <span class="kw">AS</span> (
    <span class="kw">SELECT</span> host_team <span class="kw">AS</span> team_id,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> host_goals &gt; guest_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span> <span class="kw">AS</span> pts
    <span class="kw">FROM</span> Matches
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> guest_team,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> guest_goals &gt; host_goals <span class="kw">THEN</span> 3
                <span class="kw">WHEN</span> host_goals = guest_goals <span class="kw">THEN</span> 1 <span class="kw">ELSE</span> 0 <span class="kw">END</span>
    <span class="kw">FROM</span> Matches
)
<span class="kw">SELECT</span> t.team_id, t.team_name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(s.pts), 0) <span class="kw">AS</span> num_points
<span class="kw">FROM</span> Teams t
<span class="kw">LEFT JOIN</span> scores s <span class="kw">ON</span> t.team_id = s.team_id
<span class="kw">GROUP BY</span> t.team_id, t.team_name
<span class="kw">ORDER BY</span> num_points <span class="kw">DESC</span>, t.team_id <span class="kw">ASC</span>;`
  },
  {
    id:1357, title:"Report Contiguous Dates",
    difficulty:"hard", tags:["ROW_NUMBER", "CTE", "LEFT JOIN"],
    description:`<p>Table: <code>Failed</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| fail_date    | date    |
+--------------+---------+
fail_date is the primary key (column with unique values) for this table.
This table contains the days of failed tasks.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Succeeded</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| success_date | date    |
+--------------+---------+
success_date is the primary key (column with unique values) for this table.
This table contains the days of succeeded tasks.
</pre>

<p>&nbsp;</p>

<p>A system is running one task <strong>every day</strong>. Every task is independent of the previous tasks. The tasks can fail or succeed.</p>

<p>Write a solution&nbsp;to report the&nbsp;<code>period_state</code> for each continuous interval of days in the period from <code>2019-01-01</code> to <code>2019-12-31</code>.</p>

<p><code>period_state</code> is <em>&#39;</em><code>failed&#39;</code><em> </em>if tasks in this interval failed or <code>&#39;succeeded&#39;</code> if tasks in this interval succeeded. Interval of days are retrieved as <code>start_date</code> and <code>end_date.</code></p>

<p>Return the result table ordered by <code>start_date</code>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Failed table:
+-------------------+
| fail_date         |
+-------------------+
| 2018-12-28        |
| 2018-12-29        |
| 2019-01-04        |
| 2019-01-05        |
+-------------------+
Succeeded table:
+-------------------+
| success_date      |
+-------------------+
| 2018-12-30        |
| 2018-12-31        |
| 2019-01-01        |
| 2019-01-02        |
| 2019-01-03        |
| 2019-01-06        |
+-------------------+
<strong>Output:</strong> 
+--------------+--------------+--------------+
| period_state | start_date   | end_date     |
+--------------+--------------+--------------+
| succeeded    | 2019-01-01   | 2019-01-03   |
| failed       | 2019-01-04   | 2019-01-05   |
| succeeded    | 2019-01-06   | 2019-01-06   |
+--------------+--------------+--------------+
<strong>Explanation:</strong> 
The report ignored the system state in 2018 as we care about the system in the period 2019-01-01 to 2019-12-31.
From 2019-01-01 to 2019-01-03 all tasks succeeded and the system state was &quot;succeeded&quot;.
From 2019-01-04 to 2019-01-05 all tasks failed and the system state was &quot;failed&quot;.
From 2019-01-06 to 2019-01-06 all tasks succeeded and the system state was &quot;succeeded&quot;.
</pre>`,
    mysql:`<span class="kw">WITH</span> all_dates <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 'failed'    <span class="kw">AS</span> status, fail_date    <span class="kw">AS</span> dt <span class="kw">FROM</span> Failed
    <span class="kw">WHERE</span> fail_date <span class="kw">BETWEEN</span> '2019-01-01' <span class="kw">AND</span> '2019-12-31'
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> 'succeeded' <span class="kw">AS</span> status, success_date <span class="kw">AS</span> dt <span class="kw">FROM</span> Succeeded
    <span class="kw">WHERE</span> success_date <span class="kw">BETWEEN</span> '2019-01-01' <span class="kw">AND</span> '2019-12-31'
),
grouped <span class="kw">AS</span> (
    <span class="kw">SELECT</span> status, dt,
           <span class="fn">DATE_SUB</span>(dt, INTERVAL <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> status <span class="kw">ORDER BY</span> dt) DAY) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> all_dates
)
<span class="kw">SELECT</span> status <span class="kw">AS</span> period_state, <span class="fn">MIN</span>(dt) <span class="kw">AS</span> start_date, <span class="fn">MAX</span>(dt) <span class="kw">AS</span> end_date
<span class="kw">FROM</span> grouped
<span class="kw">GROUP BY</span> status, grp
<span class="kw">ORDER BY</span> start_date;`,
    postgresql:`<span class="kw">WITH</span> all_dates <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 'failed'    <span class="kw">AS</span> status, fail_date    <span class="kw">AS</span> dt <span class="kw">FROM</span> Failed
    <span class="kw">WHERE</span> fail_date <span class="kw">BETWEEN</span> '2019-01-01' <span class="kw">AND</span> '2019-12-31'
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> 'succeeded' <span class="kw">AS</span> status, success_date <span class="kw">AS</span> dt <span class="kw">FROM</span> Succeeded
    <span class="kw">WHERE</span> success_date <span class="kw">BETWEEN</span> '2019-01-01' <span class="kw">AND</span> '2019-12-31'
),
grouped <span class="kw">AS</span> (
    <span class="kw">SELECT</span> status, dt,
           dt - (<span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> status <span class="kw">ORDER BY</span> dt) * INTERVAL '1 day') <span class="kw">AS</span> grp
    <span class="kw">FROM</span> all_dates
)
<span class="kw">SELECT</span> status <span class="kw">AS</span> period_state, <span class="fn">MIN</span>(dt) <span class="kw">AS</span> start_date, <span class="fn">MAX</span>(dt) <span class="kw">AS</span> end_date
<span class="kw">FROM</span> grouped
<span class="kw">GROUP BY</span> status, grp
<span class="kw">ORDER BY</span> start_date;`,
    sqlserver:`<span class="kw">WITH</span> all_dates <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 'failed'    <span class="kw">AS</span> status, fail_date    <span class="kw">AS</span> dt <span class="kw">FROM</span> Failed
    <span class="kw">WHERE</span> fail_date <span class="kw">BETWEEN</span> '2019-01-01' <span class="kw">AND</span> '2019-12-31'
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> 'succeeded' <span class="kw">AS</span> status, success_date <span class="kw">AS</span> dt <span class="kw">FROM</span> Succeeded
    <span class="kw">WHERE</span> success_date <span class="kw">BETWEEN</span> '2019-01-01' <span class="kw">AND</span> '2019-12-31'
),
grouped <span class="kw">AS</span> (
    <span class="kw">SELECT</span> status, dt,
           <span class="fn">DATEADD</span>(DAY, -<span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> status <span class="kw">ORDER BY</span> dt), dt) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> all_dates
)
<span class="kw">SELECT</span> status <span class="kw">AS</span> period_state, <span class="fn">MIN</span>(dt) <span class="kw">AS</span> start_date, <span class="fn">MAX</span>(dt) <span class="kw">AS</span> end_date
<span class="kw">FROM</span> grouped
<span class="kw">GROUP BY</span> status, grp
<span class="kw">ORDER BY</span> start_date;`,
    oracle:`<span class="kw">WITH</span> all_dates <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 'failed'    <span class="kw">AS</span> status, fail_date    <span class="kw">AS</span> dt <span class="kw">FROM</span> Failed
    <span class="kw">WHERE</span> fail_date <span class="kw">BETWEEN</span> DATE '2019-01-01' <span class="kw">AND</span> DATE '2019-12-31'
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> 'succeeded' <span class="kw">AS</span> status, success_date <span class="kw">AS</span> dt <span class="kw">FROM</span> Succeeded
    <span class="kw">WHERE</span> success_date <span class="kw">BETWEEN</span> DATE '2019-01-01' <span class="kw">AND</span> DATE '2019-12-31'
),
grouped <span class="kw">AS</span> (
    <span class="kw">SELECT</span> status, dt,
           dt - <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> status <span class="kw">ORDER BY</span> dt) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> all_dates
)
<span class="kw">SELECT</span> status <span class="kw">AS</span> period_state, <span class="fn">MIN</span>(dt) <span class="kw">AS</span> start_date, <span class="fn">MAX</span>(dt) <span class="kw">AS</span> end_date
<span class="kw">FROM</span> grouped
<span class="kw">GROUP BY</span> status, grp
<span class="kw">ORDER BY</span> start_date;`
  },
  {
    id:1399, title:"Page Recommendations",
    difficulty:"medium", tags:["CTE", "JOIN", "CASE WHEN"],
    description:`<p>Table: <code>Friendship</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user1_id      | int     |
| user2_id      | int     |
+---------------+---------+
(user1_id, user2_id) is the primary key (combination of columns with unique values) for this table.
Each row of this table indicates that there is a friendship relation between user1_id and user2_id.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Likes</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| user_id     | int     |
| page_id     | int     |
+-------------+---------+
(user_id, page_id) is the primary key (combination of columns with unique values) for this table.
Each row of this table indicates that user_id likes page_id.
</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to recommend pages to the user with <code>user_id = 1</code> using the pages that your friends liked. It should not recommend pages you already liked.</p>

<p>Return result table in <strong>any order</strong> without duplicates.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Friendship table:
+----------+----------+
| user1_id | user2_id |
+----------+----------+
| 1        | 2        |
| 1        | 3        |
| 1        | 4        |
| 2        | 3        |
| 2        | 4        |
| 2        | 5        |
| 6        | 1        |
+----------+----------+
Likes table:
+---------+---------+
| user_id | page_id |
+---------+---------+
| 1       | 88      |
| 2       | 23      |
| 3       | 24      |
| 4       | 56      |
| 5       | 11      |
| 6       | 33      |
| 2       | 77      |
| 3       | 77      |
| 6       | 88      |
+---------+---------+
<strong>Output:</strong> 
+------------------+
| recommended_page |
+------------------+
| 23               |
| 24               |
| 56               |
| 33               |
| 77               |
+------------------+
<strong>Explanation:</strong> 
User one is friend with users 2, 3, 4 and 6.
Suggested pages are 23 from user 2, 24 from user 3, 56 from user 3 and 33 from user 6.
Page 77 is suggested from both user 2 and user 3.
Page 88 is not suggested because user 1 already likes it.
</pre>`,
    mysql:`<span class="kw">WITH</span> friends <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user2_id <span class="kw">AS</span> friend_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user1_id = 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> user1_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user2_id = 1
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> page_id <span class="kw">AS</span> recommended_page
<span class="kw">FROM</span> Likes
<span class="kw">WHERE</span> user_id <span class="kw">IN</span> (<span class="kw">SELECT</span> friend_id <span class="kw">FROM</span> friends)
  <span class="kw">AND</span> page_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> page_id <span class="kw">FROM</span> Likes <span class="kw">WHERE</span> user_id = 1);`,
    postgresql:`<span class="kw">WITH</span> friends <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user2_id <span class="kw">AS</span> friend_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user1_id = 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> user1_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user2_id = 1
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> page_id <span class="kw">AS</span> recommended_page
<span class="kw">FROM</span> Likes
<span class="kw">WHERE</span> user_id <span class="kw">IN</span> (<span class="kw">SELECT</span> friend_id <span class="kw">FROM</span> friends)
  <span class="kw">AND</span> page_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> page_id <span class="kw">FROM</span> Likes <span class="kw">WHERE</span> user_id = 1);`,
    sqlserver:`<span class="kw">WITH</span> friends <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user2_id <span class="kw">AS</span> friend_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user1_id = 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> user1_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user2_id = 1
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> page_id <span class="kw">AS</span> recommended_page
<span class="kw">FROM</span> Likes
<span class="kw">WHERE</span> user_id <span class="kw">IN</span> (<span class="kw">SELECT</span> friend_id <span class="kw">FROM</span> friends)
  <span class="kw">AND</span> page_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> page_id <span class="kw">FROM</span> Likes <span class="kw">WHERE</span> user_id = 1);`,
    oracle:`<span class="kw">WITH</span> friends <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user2_id <span class="kw">AS</span> friend_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user1_id = 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> user1_id <span class="kw">AS</span> friend_id <span class="kw">FROM</span> Friendship <span class="kw">WHERE</span> user2_id = 1
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> page_id <span class="kw">AS</span> recommended_page
<span class="kw">FROM</span> Likes
<span class="kw">WHERE</span> user_id <span class="kw">IN</span> (<span class="kw">SELECT</span> friend_id <span class="kw">FROM</span> friends)
  <span class="kw">AND</span> page_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> page_id <span class="kw">FROM</span> Likes <span class="kw">WHERE</span> user_id = 1);`
  },
  {
    id:1405, title:"All People Report to the Given Manager",
    difficulty:"medium", tags:["CTE", "LEFT JOIN"],
    description:`<p>Table: <code>Employees</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| employee_id   | int     |
| employee_name | varchar |
| manager_id    | int     |
+---------------+---------+
employee_id is the column of unique values for this table.
Each row of this table indicates that the employee with ID employee_id and name employee_name reports his work to his/her direct manager with manager_id
The head of the company is the employee with employee_id = 1.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find <code>employee_id</code> of all employees that directly or indirectly report their work to the head of the company.</p>

<p>The indirect relation between managers <strong>will not exceed three managers</strong> as the company is small.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Employees table:
+-------------+---------------+------------+
| employee_id | employee_name | manager_id |
+-------------+---------------+------------+
| 1           | Boss          | 1          |
| 3           | Alice         | 3          |
| 2           | Bob           | 1          |
| 4           | Daniel        | 2          |
| 7           | Luis          | 4          |
| 8           | Jhon          | 3          |
| 9           | Angela        | 8          |
| 77          | Robert        | 1          |
+-------------+---------------+------------+
<strong>Output:</strong> 
+-------------+
| employee_id |
+-------------+
| 2           |
| 77          |
| 4           |
| 7           |
+-------------+
<strong>Explanation:</strong> 
The head of the company is the employee with employee_id 1.
The employees with employee_id 2 and 77 report their work directly to the head of the company.
The employee with employee_id 4 reports their work indirectly to the head of the company 4 --&gt; 2 --&gt; 1. 
The employee with employee_id 7 reports their work indirectly to the head of the company 7 --&gt; 4 --&gt; 2 --&gt; 1.
The employees with employee_id 3, 8, and 9 do not report their work to the head of the company directly or indirectly. 
</pre>`,
    mysql:`<span class="kw">WITH</span> <span class="kw">RECURSIVE</span> chain <span class="kw">AS</span> (
    <span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees <span class="kw">WHERE</span> manager_id = 1 <span class="kw">AND</span> employee_id &lt;&gt; 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> e.employee_id <span class="kw">FROM</span> Employees e
    <span class="kw">JOIN</span> chain c <span class="kw">ON</span> e.manager_id = c.employee_id
)
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> chain;`,
    postgresql:`<span class="kw">WITH</span> <span class="kw">RECURSIVE</span> chain <span class="kw">AS</span> (
    <span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees <span class="kw">WHERE</span> manager_id = 1 <span class="kw">AND</span> employee_id &lt;&gt; 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> e.employee_id <span class="kw">FROM</span> Employees e
    <span class="kw">JOIN</span> chain c <span class="kw">ON</span> e.manager_id = c.employee_id
)
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> chain;`,
    sqlserver:`<span class="kw">WITH</span> chain <span class="kw">AS</span> (
    <span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees <span class="kw">WHERE</span> manager_id = 1 <span class="kw">AND</span> employee_id &lt;&gt; 1
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> e.employee_id <span class="kw">FROM</span> Employees e
    <span class="kw">JOIN</span> chain c <span class="kw">ON</span> e.manager_id = c.employee_id
)
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> chain;`,
    oracle:`<span class="cm">-- Oracle uses CONNECT BY for hierarchy traversal</span>
<span class="kw">SELECT</span> employee_id
<span class="kw">FROM</span> Employees
<span class="kw">WHERE</span> employee_id &lt;&gt; 1
<span class="kw">START WITH</span> manager_id = 1
<span class="kw">CONNECT BY PRIOR</span> employee_id = manager_id;`
  },
  {
    id:1420, title:"Find the Start and End Number of Continuous Ranges",
    difficulty:"medium", tags:["ROW_NUMBER", "CTE", "GROUP BY"],
    description:`<p>Table: <code>Logs</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| log_id        | int     |
+---------------+---------+
log_id is the column of unique values for this table.
Each row of this table contains the ID in a log Table.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the start and end number of continuous ranges in the table <code>Logs</code>.</p>

<p>Return the result table ordered by <code>start_id</code>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Logs table:
+------------+
| log_id     |
+------------+
| 1          |
| 2          |
| 3          |
| 7          |
| 8          |
| 10         |
+------------+
<strong>Output:</strong> 
+------------+--------------+
| start_id   | end_id       |
+------------+--------------+
| 1          | 3            |
| 7          | 8            |
| 10         | 10           |
+------------+--------------+
<strong>Explanation:</strong> 
The result table should contain all ranges in table Logs.
From 1 to 3 is contained in the table.
From 4 to 6 is missing in the table
From 7 to 8 is contained in the table.
Number 9 is missing from the table.
Number 10 is contained in the table.
</pre>`,
    mysql:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> log_id,
           log_id - <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> log_id) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> Logs
)
<span class="kw">SELECT</span> <span class="fn">MIN</span>(log_id) <span class="kw">AS</span> start_id, <span class="fn">MAX</span>(log_id) <span class="kw">AS</span> end_id
<span class="kw">FROM</span> cte
<span class="kw">GROUP BY</span> grp
<span class="kw">ORDER BY</span> start_id;`,
    postgresql:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> log_id,
           log_id - <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> log_id) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> Logs
)
<span class="kw">SELECT</span> <span class="fn">MIN</span>(log_id) <span class="kw">AS</span> start_id, <span class="fn">MAX</span>(log_id) <span class="kw">AS</span> end_id
<span class="kw">FROM</span> cte
<span class="kw">GROUP BY</span> grp
<span class="kw">ORDER BY</span> start_id;`,
    sqlserver:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> log_id,
           log_id - <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> log_id) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> Logs
)
<span class="kw">SELECT</span> <span class="fn">MIN</span>(log_id) <span class="kw">AS</span> start_id, <span class="fn">MAX</span>(log_id) <span class="kw">AS</span> end_id
<span class="kw">FROM</span> cte
<span class="kw">GROUP BY</span> grp
<span class="kw">ORDER BY</span> start_id;`,
    oracle:`<span class="kw">WITH</span> cte <span class="kw">AS</span> (
    <span class="kw">SELECT</span> log_id,
           log_id - <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> log_id) <span class="kw">AS</span> grp
    <span class="kw">FROM</span> Logs
)
<span class="kw">SELECT</span> <span class="fn">MIN</span>(log_id) <span class="kw">AS</span> start_id, <span class="fn">MAX</span>(log_id) <span class="kw">AS</span> end_id
<span class="kw">FROM</span> cte
<span class="kw">GROUP BY</span> grp
<span class="kw">ORDER BY</span> start_id;`
  },
  {
    id:1438, title:"Find the Team Size",
    difficulty:"easy", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Employee</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| employee_id   | int     |
| team_id       | int     |
+---------------+---------+
employee_id is the primary key (column with unique values) for this table.
Each row of this table contains the ID of each employee and their respective team.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the team size of each of the employees.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Employee Table:
+-------------+------------+
| employee_id | team_id    |
+-------------+------------+
|     1       |     8      |
|     2       |     8      |
|     3       |     8      |
|     4       |     7      |
|     5       |     9      |
|     6       |     9      |
+-------------+------------+
<strong>Output:</strong> 
+-------------+------------+
| employee_id | team_size  |
+-------------+------------+
|     1       |     3      |
|     2       |     3      |
|     3       |     3      |
|     4       |     1      |
|     5       |     2      |
|     6       |     2      |
+-------------+------------+
<strong>Explanation:</strong> 
Employees with Id 1,2,3 are part of a team with team_id = 8.
Employee with Id 4 is part of a team with team_id = 7.
Employees with Id 5,6 are part of a team with team_id = 9.
</pre>`,
    mysql:`<span class="kw">SELECT</span> employee_id,
       <span class="fn">COUNT</span>(*) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> team_id) <span class="kw">AS</span> team_size
<span class="kw">FROM</span> Employee;`,
    postgresql:`<span class="kw">SELECT</span> employee_id,
       <span class="fn">COUNT</span>(*) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> team_id) <span class="kw">AS</span> team_size
<span class="kw">FROM</span> Employee;`,
    sqlserver:`<span class="kw">SELECT</span> employee_id,
       <span class="fn">COUNT</span>(*) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> team_id) <span class="kw">AS</span> team_size
<span class="kw">FROM</span> Employee;`,
    oracle:`<span class="kw">SELECT</span> employee_id,
       <span class="fn">COUNT</span>(*) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> team_id) <span class="kw">AS</span> team_size
<span class="kw">FROM</span> Employee;`
  },
  {
    id:1481, title:"Students With Invalid Departments",
    difficulty:"easy", tags:["LEFT JOIN"],
    description:`<p>Table: <code>Departments</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
In SQL, id is the primary key of this table.
The table has information about the id of each department of a university.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Students</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
| department_id | int     |
+---------------+---------+
In SQL, id is the primary key of this table.
The table has information about the id of each student at a university and the id of the department he/she studies at.
</pre>

<p>&nbsp;</p>

<p>Find the id and the name of all students who are enrolled in departments that no longer exist.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Departments table:
+------+--------------------------+
| id   | name                     |
+------+--------------------------+
| 1    | Electrical Engineering   |
| 7    | Computer Engineering     |
| 13   | Bussiness Administration |
+------+--------------------------+
Students table:
+------+----------+---------------+
| id   | name     | department_id |
+------+----------+---------------+
| 23   | Alice    | 1             |
| 1    | Bob      | 7             |
| 5    | Jennifer | 13            |
| 2    | John     | 14            |
| 4    | Jasmine  | 77            |
| 3    | Steve    | 74            |
| 6    | Luis     | 1             |
| 8    | Jonathan | 7             |
| 7    | Daiana   | 33            |
| 11   | Madelynn | 1             |
+------+----------+---------------+
<strong>Output:</strong> 
+------+----------+
| id   | name     |
+------+----------+
| 2    | John     |
| 7    | Daiana   |
| 4    | Jasmine  |
| 3    | Steve    |
+------+----------+
<strong>Explanation:</strong> 
John, Daiana, Steve, and Jasmine are enrolled in departments 14, 33, 74, and 77 respectively. department 14, 33, 74, and 77 do not exist in the Departments table.
</pre>`,
    mysql:`<span class="kw">SELECT</span> s.id, s.name
<span class="kw">FROM</span> Students s
<span class="kw">LEFT JOIN</span> Departments d <span class="kw">ON</span> s.department_id = d.id
<span class="kw">WHERE</span> d.id <span class="kw">IS NULL</span>;`,
    postgresql:`<span class="kw">SELECT</span> s.id, s.name
<span class="kw">FROM</span> Students s
<span class="kw">LEFT JOIN</span> Departments d <span class="kw">ON</span> s.department_id = d.id
<span class="kw">WHERE</span> d.id <span class="kw">IS NULL</span>;`,
    sqlserver:`<span class="kw">SELECT</span> s.id, s.name
<span class="kw">FROM</span> Students s
<span class="kw">LEFT JOIN</span> Departments d <span class="kw">ON</span> s.department_id = d.id
<span class="kw">WHERE</span> d.id <span class="kw">IS NULL</span>;`,
    oracle:`<span class="kw">SELECT</span> s.id, s.name
<span class="kw">FROM</span> Students s
<span class="kw">LEFT JOIN</span> Departments d <span class="kw">ON</span> s.department_id = d.id
<span class="kw">WHERE</span> d.id <span class="kw">IS NULL</span>;`
  },
  {
    id:1536, title:"Customers Who Bought Products A and B but Not C",
    difficulty:"medium", tags:["LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+---------------------+---------+
| Column Name         | Type    |
+---------------------+---------+
| customer_id         | int     |
| customer_name       | varchar |
+---------------------+---------+
customer_id is the column with unique values for this table.
customer_name is the name of the customer.</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| customer_id   | int     |
| product_name  | varchar |
+---------------+---------+
order_id is the column with unique values for this table.
customer_id is the id of the customer who bought the product &quot;product_name&quot;.
</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to report the customer_id and customer_name of customers who bought products <strong>&quot;A&quot;</strong>, <strong>&quot;B&quot;</strong> but did not buy the product <strong>&quot;C&quot;</strong> since we want to recommend them to purchase this product.</p>

<p>Return the result table <strong>ordered</strong> by <code>customer_id</code>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+-------------+---------------+
| customer_id | customer_name |
+-------------+---------------+
| 1           | Daniel        |
| 2           | Diana         |
| 3           | Elizabeth     |
| 4           | Jhon          |
+-------------+---------------+
Orders table:
+------------+--------------+---------------+
| order_id   | customer_id  | product_name  |
+------------+--------------+---------------+
| 10         |     1        |     A         |
| 20         |     1        |     B         |
| 30         |     1        |     D         |
| 40         |     1        |     C         |
| 50         |     2        |     A         |
| 60         |     3        |     A         |
| 70         |     3        |     B         |
| 80         |     3        |     D         |
| 90         |     4        |     C         |
+------------+--------------+---------------+
<strong>Output:</strong> 
+-------------+---------------+
| customer_id | customer_name |
+-------------+---------------+
| 3           | Elizabeth     |
+-------------+---------------+
<strong>Explanation:</strong> Only the customer_id with id 3 bought the product A and B but not the product C.
</pre>`,
    mysql:`<span class="kw">SELECT</span> customer_id, customer_name
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'A')
  <span class="kw">AND</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'B')
  <span class="kw">AND</span> customer_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'C')
<span class="kw">ORDER BY</span> customer_id;`,
    postgresql:`<span class="kw">SELECT</span> customer_id, customer_name
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'A')
  <span class="kw">AND</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'B')
  <span class="kw">AND</span> customer_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'C')
<span class="kw">ORDER BY</span> customer_id;`,
    sqlserver:`<span class="kw">SELECT</span> customer_id, customer_name
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'A')
  <span class="kw">AND</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'B')
  <span class="kw">AND</span> customer_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'C')
<span class="kw">ORDER BY</span> customer_id;`,
    oracle:`<span class="kw">SELECT</span> customer_id, customer_name
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'A')
  <span class="kw">AND</span> customer_id <span class="kw">IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'B')
  <span class="kw">AND</span> customer_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> customer_id <span class="kw">FROM</span> Orders <span class="kw">WHERE</span> product_name = 'C')
<span class="kw">ORDER BY</span> customer_id;`
  },
  {
    id:1541, title:"Top Travellers",
    difficulty:"easy", tags:["LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Users</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
id is the column with unique values for this table.
name is the name of the user.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Rides</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| user_id       | int     |
| distance      | int     |
+---------------+---------+
id is the column with unique values for this table.
user_id is the id of the user who traveled the distance &quot;distance&quot;.
</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to report the distance traveled by each user.</p>

<p>Return the result table ordered by <code>travelled_distance</code> in <strong>descending order</strong>, if two or more users traveled the same distance, order them by their <code>name</code> in <strong>ascending order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Users table:
+------+-----------+
| id   | name      |
+------+-----------+
| 1    | Alice     |
| 2    | Bob       |
| 3    | Alex      |
| 4    | Donald    |
| 7    | Lee       |
| 13   | Jonathan  |
| 19   | Elvis     |
+------+-----------+
Rides table:
+------+----------+----------+
| id   | user_id  | distance |
+------+----------+----------+
| 1    | 1        | 120      |
| 2    | 2        | 317      |
| 3    | 3        | 222      |
| 4    | 7        | 100      |
| 5    | 13       | 312      |
| 6    | 19       | 50       |
| 7    | 7        | 120      |
| 8    | 19       | 400      |
| 9    | 7        | 230      |
+------+----------+----------+
<strong>Output:</strong> 
+----------+--------------------+
| name     | travelled_distance |
+----------+--------------------+
| Elvis    | 450                |
| Lee      | 450                |
| Bob      | 317                |
| Jonathan | 312                |
| Alex     | 222                |
| Alice    | 120                |
| Donald   | 0                  |
+----------+--------------------+
<strong>Explanation:</strong> 
Elvis and Lee traveled 450 miles, Elvis is the top traveler as his name is alphabetically smaller than Lee.
Bob, Jonathan, Alex, and Alice have only one ride and we just order them by the total distances of the ride.
Donald did not have any rides, the distance traveled by him is 0.
</pre>`,
    mysql:`<span class="kw">SELECT</span> u.name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(r.distance), 0) <span class="kw">AS</span> travelled_distance
<span class="kw">FROM</span> Users u
<span class="kw">LEFT JOIN</span> Rides r <span class="kw">ON</span> u.id = r.user_id
<span class="kw">GROUP BY</span> u.id, u.name
<span class="kw">ORDER BY</span> travelled_distance <span class="kw">DESC</span>, u.name <span class="kw">ASC</span>;`,
    postgresql:`<span class="kw">SELECT</span> u.name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(r.distance), 0) <span class="kw">AS</span> travelled_distance
<span class="kw">FROM</span> Users u
<span class="kw">LEFT JOIN</span> Rides r <span class="kw">ON</span> u.id = r.user_id
<span class="kw">GROUP BY</span> u.id, u.name
<span class="kw">ORDER BY</span> travelled_distance <span class="kw">DESC</span>, u.name <span class="kw">ASC</span>;`,
    sqlserver:`<span class="kw">SELECT</span> u.name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(r.distance), 0) <span class="kw">AS</span> travelled_distance
<span class="kw">FROM</span> Users u
<span class="kw">LEFT JOIN</span> Rides r <span class="kw">ON</span> u.id = r.user_id
<span class="kw">GROUP BY</span> u.id, u.name
<span class="kw">ORDER BY</span> travelled_distance <span class="kw">DESC</span>, u.name <span class="kw">ASC</span>;`,
    oracle:`<span class="kw">SELECT</span> u.name, <span class="fn">COALESCE</span>(<span class="fn">SUM</span>(r.distance), 0) <span class="kw">AS</span> travelled_distance
<span class="kw">FROM</span> Users u
<span class="kw">LEFT JOIN</span> Rides r <span class="kw">ON</span> u.id = r.user_id
<span class="kw">GROUP BY</span> u.id, u.name
<span class="kw">ORDER BY</span> travelled_distance <span class="kw">DESC</span>, u.name <span class="kw">ASC</span>;`
  },
  {
    id:1546, title:"Find the Quiet Students in All Exams",
    difficulty:"hard", tags:["Window Fn", "CTE", "JOIN"],
    description:`<p>Table: <code>Student</code></p>

<pre>
+---------------------+---------+
| Column Name         | Type    |
+---------------------+---------+
| student_id          | int     |
| student_name        | varchar |
+---------------------+---------+
student_id is the primary key (column with unique values) for this table.
student_name is the name of the student.</pre>

<p>&nbsp;</p>

<p>Table: <code>Exam</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| exam_id       | int     |
| student_id    | int     |
| score         | int     |
+---------------+---------+
(exam_id, student_id) is the primary key (combination of columns with unique values) for this table.
Each row of this table indicates that the student with student_id had a score points in the exam with id exam_id.
</pre>

<p>&nbsp;</p>

<p>A <strong>quiet student</strong> is the one who took at least one exam and did not score the highest or the lowest score.</p>

<p>Write a solution&nbsp;to report the students <code>(student_id, student_name)</code> being quiet in all exams. Do not return the student who has never taken any exam.</p>

<p>Return the result table <strong>ordered</strong> by <code>student_id</code>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Student table:
+-------------+---------------+
| student_id  | student_name  |
+-------------+---------------+
| 1           | Daniel        |
| 2           | Jade          |
| 3           | Stella        |
| 4           | Jonathan      |
| 5           | Will          |
+-------------+---------------+
Exam table:
+------------+--------------+-----------+
| exam_id    | student_id   | score     |
+------------+--------------+-----------+
| 10         |     1        |    70     |
| 10         |     2        |    80     |
| 10         |     3        |    90     |
| 20         |     1        |    80     |
| 30         |     1        |    70     |
| 30         |     3        |    80     |
| 30         |     4        |    90     |
| 40         |     1        |    60     |
| 40         |     2        |    70     |
| 40         |     4        |    80     |
+------------+--------------+-----------+
<strong>Output:</strong> 
+-------------+---------------+
| student_id  | student_name  |
+-------------+---------------+
| 2           | Jade          |
+-------------+---------------+
<strong>Explanation:</strong> 
For exam 1: Student 1 and 3 hold the lowest and high scores respectively.
For exam 2: Student 1 hold both highest and lowest score.
For exam 3 and 4: Studnet 1 and 4 hold the lowest and high scores respectively.
Student 2 and 5 have never got the highest or lowest in any of the exams.
Since student 5 is not taking any exam, he is excluded from the result.
So, we only return the information of Student 2.
</pre>`,
    mysql:`<span class="kw">WITH</span> scored <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id,
           <span class="fn">MIN</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> min_s,
           <span class="fn">MAX</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> max_s,
           score
    <span class="kw">FROM</span> Exam
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> s.student_id, s.student_name
<span class="kw">FROM</span> Student s
<span class="kw">WHERE</span> s.student_id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> student_id <span class="kw">FROM</span> Exam)
  <span class="kw">AND</span> s.student_id <span class="kw">NOT IN</span> (
      <span class="kw">SELECT</span> student_id <span class="kw">FROM</span> scored <span class="kw">WHERE</span> score = min_s <span class="kw">OR</span> score = max_s
  )
<span class="kw">ORDER BY</span> s.student_id;`,
    postgresql:`<span class="kw">WITH</span> scored <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id,
           <span class="fn">MIN</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> min_s,
           <span class="fn">MAX</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> max_s,
           score
    <span class="kw">FROM</span> Exam
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> s.student_id, s.student_name
<span class="kw">FROM</span> Student s
<span class="kw">WHERE</span> s.student_id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> student_id <span class="kw">FROM</span> Exam)
  <span class="kw">AND</span> s.student_id <span class="kw">NOT IN</span> (
      <span class="kw">SELECT</span> student_id <span class="kw">FROM</span> scored <span class="kw">WHERE</span> score = min_s <span class="kw">OR</span> score = max_s
  )
<span class="kw">ORDER BY</span> s.student_id;`,
    sqlserver:`<span class="kw">WITH</span> scored <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id,
           <span class="fn">MIN</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> min_s,
           <span class="fn">MAX</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> max_s,
           score
    <span class="kw">FROM</span> Exam
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> s.student_id, s.student_name
<span class="kw">FROM</span> Student s
<span class="kw">WHERE</span> s.student_id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> student_id <span class="kw">FROM</span> Exam)
  <span class="kw">AND</span> s.student_id <span class="kw">NOT IN</span> (
      <span class="kw">SELECT</span> student_id <span class="kw">FROM</span> scored <span class="kw">WHERE</span> score = min_s <span class="kw">OR</span> score = max_s
  )
<span class="kw">ORDER BY</span> s.student_id;`,
    oracle:`<span class="kw">WITH</span> scored <span class="kw">AS</span> (
    <span class="kw">SELECT</span> student_id,
           <span class="fn">MIN</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> min_s,
           <span class="fn">MAX</span>(score) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> exam_id) <span class="kw">AS</span> max_s,
           score
    <span class="kw">FROM</span> Exam
)
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> s.student_id, s.student_name
<span class="kw">FROM</span> Student s
<span class="kw">WHERE</span> s.student_id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> student_id <span class="kw">FROM</span> Exam)
  <span class="kw">AND</span> s.student_id <span class="kw">NOT IN</span> (
      <span class="kw">SELECT</span> student_id <span class="kw">FROM</span> scored <span class="kw">WHERE</span> score = min_s <span class="kw">OR</span> score = max_s
  )
<span class="kw">ORDER BY</span> s.student_id;`
  },
  {
    id:1565, title:"Evaluate Boolean Expression",
    difficulty:"medium", tags:["CTE", "LEFT JOIN", "CASE WHEN"],
    description:`<p>Table <code>Variables</code>:</p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| name          | varchar |
| value         | int     |
+---------------+---------+
In SQL, name is the primary key for this table.
This table contains the stored variables and their values.
</pre>

<p>&nbsp;</p>

<p>Table <code>Expressions</code>:</p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| left_operand  | varchar |
| operator      | enum    |
| right_operand | varchar |
+---------------+---------+
In SQL, (left_operand, operator, right_operand) is the primary key for this table.
This table contains a boolean expression that should be evaluated.
operator is an enum that takes one of the values (&#39;&lt;&#39;, &#39;&gt;&#39;, &#39;=&#39;)
The values of left_operand and right_operand are guaranteed to be in the Variables table.
</pre>

<p>&nbsp;</p>

<p>Evaluate the boolean expressions in <code>Expressions</code> table.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Variables table:
+------+-------+
| name | value |
+------+-------+
| x    | 66    |
| y    | 77    |
+------+-------+
Expressions table:
+--------------+----------+---------------+
| left_operand | operator | right_operand |
+--------------+----------+---------------+
| x            | &gt;        | y             |
| x            | &lt;        | y             |
| x            | =        | y             |
| y            | &gt;        | x             |
| y            | &lt;        | x             |
| x            | =        | x             |
+--------------+----------+---------------+
<strong>Output:</strong> 
+--------------+----------+---------------+-------+
| left_operand | operator | right_operand | value |
+--------------+----------+---------------+-------+
| x            | &gt;        | y             | false |
| x            | &lt;        | y             | true  |
| x            | =        | y             | false |
| y            | &gt;        | x             | true  |
| y            | &lt;        | x             | false |
| x            | =        | x             | true  |
+--------------+----------+---------------+-------+
<strong>Explanation:</strong> 
As shown, you need to find the value of each boolean expression in the table using the variables table.
</pre>`,
    mysql:`<span class="kw">SELECT</span> e.left_operand, e.operator, e.right_operand,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> e.operator = '&gt;' <span class="kw">AND</span> v1.value &gt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '&lt;' <span class="kw">AND</span> v1.value &lt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '=' <span class="kw">AND</span> v1.value =  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">ELSE</span> 'false'
    <span class="kw">END</span> <span class="kw">AS</span> value
<span class="kw">FROM</span> Expressions e
<span class="kw">JOIN</span> Variables v1 <span class="kw">ON</span> e.left_operand  = v1.name
<span class="kw">JOIN</span> Variables v2 <span class="kw">ON</span> e.right_operand = v2.name;`,
    postgresql:`<span class="kw">SELECT</span> e.left_operand, e.operator, e.right_operand,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> e.operator = '&gt;' <span class="kw">AND</span> v1.value &gt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '&lt;' <span class="kw">AND</span> v1.value &lt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '=' <span class="kw">AND</span> v1.value =  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">ELSE</span> 'false'
    <span class="kw">END</span> <span class="kw">AS</span> value
<span class="kw">FROM</span> Expressions e
<span class="kw">JOIN</span> Variables v1 <span class="kw">ON</span> e.left_operand  = v1.name
<span class="kw">JOIN</span> Variables v2 <span class="kw">ON</span> e.right_operand = v2.name;`,
    sqlserver:`<span class="kw">SELECT</span> e.left_operand, e.operator, e.right_operand,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> e.operator = '&gt;' <span class="kw">AND</span> v1.value &gt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '&lt;' <span class="kw">AND</span> v1.value &lt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '=' <span class="kw">AND</span> v1.value =  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">ELSE</span> 'false'
    <span class="kw">END</span> <span class="kw">AS</span> value
<span class="kw">FROM</span> Expressions e
<span class="kw">JOIN</span> Variables v1 <span class="kw">ON</span> e.left_operand  = v1.name
<span class="kw">JOIN</span> Variables v2 <span class="kw">ON</span> e.right_operand = v2.name;`,
    oracle:`<span class="kw">SELECT</span> e.left_operand, e.operator, e.right_operand,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> e.operator = '&gt;' <span class="kw">AND</span> v1.value &gt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '&lt;' <span class="kw">AND</span> v1.value &lt;  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">WHEN</span> e.operator = '=' <span class="kw">AND</span> v1.value =  v2.value <span class="kw">THEN</span> 'true'
        <span class="kw">ELSE</span> 'false'
    <span class="kw">END</span> <span class="kw">AS</span> value
<span class="kw">FROM</span> Expressions e
<span class="kw">JOIN</span> Variables v1 <span class="kw">ON</span> e.left_operand  = v1.name
<span class="kw">JOIN</span> Variables v2 <span class="kw">ON</span> e.right_operand = v2.name;`
  },
  {
    id:1578, title:"Apples & Oranges",
    difficulty:"medium", tags:["JOIN"],
    description:`<p>Table: <code>Sales</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| sale_date     | date    |
| fruit         | enum    | 
| sold_num      | int     | 
+---------------+---------+
(sale_date, fruit) is the primary key (combination of columns with unique values) of this table.
This table contains the sales of &quot;apples&quot; and &quot;oranges&quot; sold each day.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the difference between the number of <strong>apples</strong> and <strong>oranges</strong> sold each day.</p>

<p>Return the result table <strong>ordered</strong> by <code>sale_date</code>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Sales table:
+------------+------------+-------------+
| sale_date  | fruit      | sold_num    |
+------------+------------+-------------+
| 2020-05-01 | apples     | 10          |
| 2020-05-01 | oranges    | 8           |
| 2020-05-02 | apples     | 15          |
| 2020-05-02 | oranges    | 15          |
| 2020-05-03 | apples     | 20          |
| 2020-05-03 | oranges    | 0           |
| 2020-05-04 | apples     | 15          |
| 2020-05-04 | oranges    | 16          |
+------------+------------+-------------+
<strong>Output:</strong> 
+------------+--------------+
| sale_date  | diff         |
+------------+--------------+
| 2020-05-01 | 2            |
| 2020-05-02 | 0            |
| 2020-05-03 | 20           |
| 2020-05-04 | -1           |
+------------+--------------+
<strong>Explanation:</strong> 
Day 2020-05-01, 10 apples and 8 oranges were sold (Difference  10 - 8 = 2).
Day 2020-05-02, 15 apples and 15 oranges were sold (Difference 15 - 15 = 0).
Day 2020-05-03, 20 apples and 0 oranges were sold (Difference 20 - 0 = 20).
Day 2020-05-04, 15 apples and 16 oranges were sold (Difference 15 - 16 = -1).
</pre>`,
    mysql:`<span class="kw">SELECT</span> a.sale_date, (a.sold_num - o.sold_num) <span class="kw">AS</span> diff
<span class="kw">FROM</span> Sales a
<span class="kw">JOIN</span> Sales o <span class="kw">ON</span> a.sale_date = o.sale_date
<span class="kw">WHERE</span> a.fruit = 'apples' <span class="kw">AND</span> o.fruit = 'oranges'
<span class="kw">ORDER BY</span> a.sale_date;`,
    postgresql:`<span class="kw">SELECT</span> a.sale_date, (a.sold_num - o.sold_num) <span class="kw">AS</span> diff
<span class="kw">FROM</span> Sales a
<span class="kw">JOIN</span> Sales o <span class="kw">ON</span> a.sale_date = o.sale_date
<span class="kw">WHERE</span> a.fruit = 'apples' <span class="kw">AND</span> o.fruit = 'oranges'
<span class="kw">ORDER BY</span> a.sale_date;`,
    sqlserver:`<span class="kw">SELECT</span> a.sale_date, (a.sold_num - o.sold_num) <span class="kw">AS</span> diff
<span class="kw">FROM</span> Sales a
<span class="kw">JOIN</span> Sales o <span class="kw">ON</span> a.sale_date = o.sale_date
<span class="kw">WHERE</span> a.fruit = 'apples' <span class="kw">AND</span> o.fruit = 'oranges'
<span class="kw">ORDER BY</span> a.sale_date;`,
    oracle:`<span class="kw">SELECT</span> a.sale_date, (a.sold_num - o.sold_num) <span class="kw">AS</span> diff
<span class="kw">FROM</span> Sales a
<span class="kw">JOIN</span> Sales o <span class="kw">ON</span> a.sale_date = o.sale_date
<span class="kw">WHERE</span> a.fruit = 'apples' <span class="kw">AND</span> o.fruit = 'oranges'
<span class="kw">ORDER BY</span> a.sale_date;`
  },
  {
    id:1639, title:"Friendly Movies Streamed Last Month",
    difficulty:"easy", tags:["LEFT JOIN"],
    description:`<p>Table: <code>TVProgram</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| program_date  | date    |
| content_id    | int     |
| channel       | varchar |
+---------------+---------+
(program_date, content_id) is the primary key (combination of columns with unique values) for this table.
This table contains information of the programs on the TV.
content_id is the id of the program in some channel on the TV.</pre>

<p>&nbsp;</p>

<p>Table: <code>Content</code></p>

<pre>
+------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| content_id       | varchar |
| title            | varchar |
| Kids_content     | enum    |
| content_type     | varchar |
+------------------+---------+
content_id is the primary key (column with unique values) for this table.
Kids_content is an ENUM (category) of types (&#39;Y&#39;, &#39;N&#39;) where: 
&#39;Y&#39; means is content for kids otherwise &#39;N&#39; is not content for kids.
content_type is the category of the content as movies, series, etc.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the distinct titles of the kid-friendly movies streamed in <strong>June 2020</strong>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
TVProgram table:
+--------------------+--------------+-------------+
| program_date       | content_id   | channel     |
+--------------------+--------------+-------------+
| 2020-06-10 08:00   | 1            | LC-Channel  |
| 2020-05-11 12:00   | 2            | LC-Channel  |
| 2020-05-12 12:00   | 3            | LC-Channel  |
| 2020-05-13 14:00   | 4            | Disney Ch   |
| 2020-06-18 14:00   | 4            | Disney Ch   |
| 2020-07-15 16:00   | 5            | Disney Ch   |
+--------------------+--------------+-------------+
Content table:
+------------+----------------+---------------+---------------+
| content_id | title          | Kids_content  | content_type  |
+------------+----------------+---------------+---------------+
| 1          | Leetcode Movie | N             | Movies        |
| 2          | Alg. for Kids  | Y             | Series        |
| 3          | Database Sols  | N             | Series        |
| 4          | Aladdin        | Y             | Movies        |
| 5          | Cinderella     | Y             | Movies        |
+------------+----------------+---------------+---------------+
<strong>Output:</strong> 
+--------------+
| title        |
+--------------+
| Aladdin      |
+--------------+
<strong>Explanation:</strong> 
&quot;Leetcode Movie&quot; is not a content for kids.
&quot;Alg. for Kids&quot; is not a movie.
&quot;Database Sols&quot; is not a movie
&quot;Alladin&quot; is a movie, content for kids and was streamed in June 2020.
&quot;Cinderella&quot; was not streamed in June 2020.
</pre>`,
    mysql:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> c.title
<span class="kw">FROM</span> Content c
<span class="kw">JOIN</span> TVProgram t <span class="kw">ON</span> c.content_id = t.content_id
<span class="kw">WHERE</span> c.Kids_content = 'Y'
  <span class="kw">AND</span> c.content_type = 'Movies'
  <span class="kw">AND</span> <span class="fn">DATE_FORMAT</span>(t.program_date, '%Y-%m') = '2020-06';`,
    postgresql:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> c.title
<span class="kw">FROM</span> Content c
<span class="kw">JOIN</span> TVProgram t <span class="kw">ON</span> c.content_id = t.content_id
<span class="kw">WHERE</span> c.Kids_content = 'Y'
  <span class="kw">AND</span> c.content_type = 'Movies'
  <span class="kw">AND</span> <span class="fn">TO_CHAR</span>(t.program_date, 'YYYY-MM') = '2020-06';`,
    sqlserver:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> c.title
<span class="kw">FROM</span> Content c
<span class="kw">JOIN</span> TVProgram t <span class="kw">ON</span> c.content_id = t.content_id
<span class="kw">WHERE</span> c.Kids_content = 'Y'
  <span class="kw">AND</span> c.content_type = 'Movies'
  <span class="kw">AND</span> <span class="fn">FORMAT</span>(t.program_date, 'yyyy-MM') = '2020-06';`,
    oracle:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> c.title
<span class="kw">FROM</span> Content c
<span class="kw">JOIN</span> TVProgram t <span class="kw">ON</span> c.content_id = t.content_id
<span class="kw">WHERE</span> c.Kids_content = 'Y'
  <span class="kw">AND</span> c.content_type = 'Movies'
  <span class="kw">AND</span> <span class="fn">TO_CHAR</span>(t.program_date, 'YYYY-MM') = '2020-06';`
  },
  {
    id:1641, title:"Countries You Can Safely Invest In",
    difficulty:"medium", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table <code>Person</code>:</p>

<pre>
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| id             | int     |
| name           | varchar |
| phone_number   | varchar |
+----------------+---------+
id is the column of unique values for this table.
Each row of this table contains the name of a person and their phone number.
Phone number will be in the form &#39;xxx-yyyyyyy&#39; where xxx is the country code (3 characters) and yyyyyyy is the phone number (7 characters) where x and y are digits. Both can contain leading zeros.
</pre>

<p>&nbsp;</p>

<p>Table <code>Country</code>:</p>

<pre>
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| name           | varchar |
| country_code   | varchar |
+----------------+---------+
country_code is the column of unique values for this table.
Each row of this table contains the country name and its code. country_code will be in the form &#39;xxx&#39; where x is digits.
</pre>

<p>&nbsp;</p>

<p>Table <code>Calls</code>:</p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| caller_id   | int  |
| callee_id   | int  |
| duration    | int  |
+-------------+------+
This table may contain duplicate rows.
Each row of this table contains the caller id, callee id and the duration of the call in minutes. caller_id != callee_id
</pre>

<p>&nbsp;</p>

<p>A telecommunications company wants to invest in new countries. The company intends to invest in the countries where the average call duration of the calls in this country is strictly greater than the global average call duration.</p>

<p>Write a solution to find the countries where this company can invest.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Person table:
+----+----------+--------------+
| id | name     | phone_number |
+----+----------+--------------+
| 3  | Jonathan | 051-1234567  |
| 12 | Elvis    | 051-7654321  |
| 1  | Moncef   | 212-1234567  |
| 2  | Maroua   | 212-6523651  |
| 7  | Meir     | 972-1234567  |
| 9  | Rachel   | 972-0011100  |
+----+----------+--------------+
Country table:
+----------+--------------+
| name     | country_code |
+----------+--------------+
| Peru     | 051          |
| Israel   | 972          |
| Morocco  | 212          |
| Germany  | 049          |
| Ethiopia | 251          |
+----------+--------------+
Calls table:
+-----------+-----------+----------+
| caller_id | callee_id | duration |
+-----------+-----------+----------+
| 1         | 9         | 33       |
| 2         | 9         | 4        |
| 1         | 2         | 59       |
| 3         | 12        | 102      |
| 3         | 12        | 330      |
| 12        | 3         | 5        |
| 7         | 9         | 13       |
| 7         | 1         | 3        |
| 9         | 7         | 1        |
| 1         | 7         | 7        |
+-----------+-----------+----------+
<strong>Output:</strong> 
+----------+
| country  |
+----------+
| Peru     |
+----------+
<strong>Explanation:</strong> 
The average call duration for Peru is (102 + 102 + 330 + 330 + 5 + 5) / 6 = 145.666667
The average call duration for Israel is (33 + 4 + 13 + 13 + 3 + 1 + 1 + 7) / 8 = 9.37500
The average call duration for Morocco is (33 + 4 + 59 + 59 + 3 + 7) / 6 = 27.5000 
Global call duration average = (2 * (33 + 4 + 59 + 102 + 330 + 5 + 13 + 3 + 1 + 7)) / 20 = 55.70000
Since Peru is the only country where the average call duration is greater than the global average, it is the only recommended country.
</pre>`,
    mysql:`<span class="kw">WITH</span> calls_with_country <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">SUBSTRING</span>(p.phone_number, 1, 3) <span class="kw">AS</span> code, c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.caller_id  = p.id
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> <span class="fn">SUBSTRING</span>(p.phone_number, 1, 3),        c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.callee_id  = p.id
)
<span class="kw">SELECT</span> co.name <span class="kw">AS</span> country
<span class="kw">FROM</span> calls_with_country cw
<span class="kw">JOIN</span> Country co <span class="kw">ON</span> cw.code = co.country_code
<span class="kw">GROUP BY</span> co.name
<span class="kw">HAVING</span> <span class="fn">AVG</span>(cw.duration) &gt; (<span class="kw">SELECT</span> <span class="fn">AVG</span>(duration) <span class="kw">FROM</span> Calls);`,
    postgresql:`<span class="kw">WITH</span> calls_with_country <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">SUBSTRING</span>(p.phone_number, 1, 3) <span class="kw">AS</span> code, c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.caller_id  = p.id
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> <span class="fn">SUBSTRING</span>(p.phone_number, 1, 3),        c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.callee_id  = p.id
)
<span class="kw">SELECT</span> co.name <span class="kw">AS</span> country
<span class="kw">FROM</span> calls_with_country cw
<span class="kw">JOIN</span> Country co <span class="kw">ON</span> cw.code = co.country_code
<span class="kw">GROUP BY</span> co.name
<span class="kw">HAVING</span> <span class="fn">AVG</span>(cw.duration) &gt; (<span class="kw">SELECT</span> <span class="fn">AVG</span>(duration) <span class="kw">FROM</span> Calls);`,
    sqlserver:`<span class="kw">WITH</span> calls_with_country <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">LEFT</span>(p.phone_number, 3) <span class="kw">AS</span> code, c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.caller_id  = p.id
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> <span class="fn">LEFT</span>(p.phone_number, 3),          c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.callee_id = p.id
)
<span class="kw">SELECT</span> co.name <span class="kw">AS</span> country
<span class="kw">FROM</span> calls_with_country cw
<span class="kw">JOIN</span> Country co <span class="kw">ON</span> cw.code = co.country_code
<span class="kw">GROUP BY</span> co.name
<span class="kw">HAVING</span> <span class="fn">AVG</span>(cw.duration * 1.0) &gt; (<span class="kw">SELECT</span> <span class="fn">AVG</span>(duration * 1.0) <span class="kw">FROM</span> Calls);`,
    oracle:`<span class="kw">WITH</span> calls_with_country <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">SUBSTR</span>(p.phone_number, 1, 3) <span class="kw">AS</span> code, c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.caller_id  = p.id
    <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> <span class="fn">SUBSTR</span>(p.phone_number, 1, 3),         c.duration
    <span class="kw">FROM</span> Calls c <span class="kw">JOIN</span> Person p <span class="kw">ON</span> c.callee_id = p.id
)
<span class="kw">SELECT</span> co.name <span class="kw">AS</span> country
<span class="kw">FROM</span> calls_with_country cw
<span class="kw">JOIN</span> Country co <span class="kw">ON</span> cw.code = co.country_code
<span class="kw">GROUP BY</span> co.name
<span class="kw">HAVING</span> <span class="fn">AVG</span>(cw.duration) &gt; (<span class="kw">SELECT</span> <span class="fn">AVG</span>(duration) <span class="kw">FROM</span> Calls);`
  },
  {
    id:1654, title:"Customer Order Frequency",
    difficulty:"easy", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| customer_id   | int     |
| name          | varchar |
| country       | varchar |
+---------------+---------+
customer_id is the column with unique values for this table.
This table contains information about the customers in the company.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Product</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| description   | varchar |
| price         | int     |
+---------------+---------+
product_id is the column with unique values for this table.
This table contains information on the products in the company.
price is the product cost.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| customer_id   | int     |
| product_id    | int     |
| order_date    | date    |
| quantity      | int     |
+---------------+---------+
order_id is the column with unique values for this table.
This table contains information on customer orders.
customer_id is the id of the customer who bought &quot;quantity&quot; products with id &quot;product_id&quot;.
Order_date is the date in format (&#39;YYYY-MM-DD&#39;) when the order was shipped.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the <code>customer_id</code> and <code>customer_name</code> of customers who have spent at least <code>$100</code> in each month of <strong>June and July 2020</strong>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+--------------+-----------+-------------+
| customer_id  | name      | country     |
+--------------+-----------+-------------+
| 1            | Winston   | USA         |
| 2            | Jonathan  | Peru        |
| 3            | Moustafa  | Egypt       |
+--------------+-----------+-------------+
Product table:
+--------------+-------------+-------------+
| product_id   | description | price       |
+--------------+-------------+-------------+
| 10           | LC Phone    | 300         |
| 20           | LC T-Shirt  | 10          |
| 30           | LC Book     | 45          |
| 40           | LC Keychain | 2           |
+--------------+-------------+-------------+
Orders table:
+--------------+-------------+-------------+-------------+-----------+
| order_id     | customer_id | product_id  | order_date  | quantity  |
+--------------+-------------+-------------+-------------+-----------+
| 1            | 1           | 10          | 2020-06-10  | 1         |
| 2            | 1           | 20          | 2020-07-01  | 1         |
| 3            | 1           | 30          | 2020-07-08  | 2         |
| 4            | 2           | 10          | 2020-06-15  | 2         |
| 5            | 2           | 40          | 2020-07-01  | 10        |
| 6            | 3           | 20          | 2020-06-24  | 2         |
| 7            | 3           | 30          | 2020-06-25  | 2         |
| 9            | 3           | 30          | 2020-05-08  | 3         |
+--------------+-------------+-------------+-------------+-----------+
<strong>Output:</strong> 
+--------------+------------+
| customer_id  | name       |  
+--------------+------------+
| 1            | Winston    |
+--------------+------------+
<strong>Explanation:</strong> 
Winston spent $300 (300 * 1) in June and $100 ( 10 * 1 + 45 * 2) in July 2020.
Jonathan spent $600 (300 * 2) in June and $20 ( 2 * 10) in July 2020.
Moustafa spent $110 (10 * 2 + 45 * 2) in June and $0 in July 2020.
</pre>`,
    mysql:`<span class="kw">SELECT</span> o.customer_id, c.name
<span class="kw">FROM</span> Orders o
<span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
<span class="kw">JOIN</span> Product p   <span class="kw">ON</span> o.product_id  = p.product_id
<span class="kw">GROUP BY</span> o.customer_id, c.name
<span class="kw">HAVING</span>
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">DATE_FORMAT</span>(o.order_date,'%Y-%m') = '2020-06' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100
<span class="kw">AND</span> <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">DATE_FORMAT</span>(o.order_date,'%Y-%m') = '2020-07' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100;`,
    postgresql:`<span class="kw">SELECT</span> o.customer_id, c.name
<span class="kw">FROM</span> Orders o
<span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
<span class="kw">JOIN</span> Product p   <span class="kw">ON</span> o.product_id  = p.product_id
<span class="kw">GROUP BY</span> o.customer_id, c.name
<span class="kw">HAVING</span>
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">TO_CHAR</span>(o.order_date,'YYYY-MM') = '2020-06' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100
<span class="kw">AND</span> <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">TO_CHAR</span>(o.order_date,'YYYY-MM') = '2020-07' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100;`,
    sqlserver:`<span class="kw">SELECT</span> o.customer_id, c.name
<span class="kw">FROM</span> Orders o
<span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
<span class="kw">JOIN</span> Product p   <span class="kw">ON</span> o.product_id  = p.product_id
<span class="kw">GROUP BY</span> o.customer_id, c.name
<span class="kw">HAVING</span>
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">FORMAT</span>(o.order_date,'yyyy-MM') = '2020-06' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100
<span class="kw">AND</span> <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">FORMAT</span>(o.order_date,'yyyy-MM') = '2020-07' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100;`,
    oracle:`<span class="kw">SELECT</span> o.customer_id, c.name
<span class="kw">FROM</span> Orders o
<span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
<span class="kw">JOIN</span> Product p   <span class="kw">ON</span> o.product_id  = p.product_id
<span class="kw">GROUP BY</span> o.customer_id, c.name
<span class="kw">HAVING</span>
    <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">TO_CHAR</span>(o.order_date,'YYYY-MM') = '2020-06' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100
<span class="kw">AND</span> <span class="fn">SUM</span>(<span class="kw">CASE</span> <span class="kw">WHEN</span> <span class="fn">TO_CHAR</span>(o.order_date,'YYYY-MM') = '2020-07' <span class="kw">THEN</span> o.quantity * p.price <span class="kw">ELSE</span> 0 <span class="kw">END</span>) &gt;= 100;`
  },
  {
    id:1671, title:"The Most Recent Three Orders",
    difficulty:"medium", tags:["RANK", "CTE", "LEFT JOIN"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| customer_id   | int     |
| name          | varchar |
+---------------+---------+
customer_id is the column with unique values for this table.
This table contains information about customers.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| order_date    | date    |
| customer_id   | int     |
| cost          | int     |
+---------------+---------+
order_id is the column with unique values for this table.
This table contains information about the orders made by customer_id.
Each customer has <strong>one order per day</strong>.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the most recent three orders of each user. If a user ordered less than three orders, return all of their orders.</p>

<p>Return the result table ordered by <code>customer_name</code> in <strong>ascending order</strong> and in case of a tie by the <code>customer_id</code> in <strong>ascending order</strong>. If there is still a tie, order them by <code>order_date</code> in <strong>descending order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+-------------+-----------+
| customer_id | name      |
+-------------+-----------+
| 1           | Winston   |
| 2           | Jonathan  |
| 3           | Annabelle |
| 4           | Marwan    |
| 5           | Khaled    |
+-------------+-----------+
Orders table:
+----------+------------+-------------+------+
| order_id | order_date | customer_id | cost |
+----------+------------+-------------+------+
| 1        | 2020-07-31 | 1           | 30   |
| 2        | 2020-07-30 | 2           | 40   |
| 3        | 2020-07-31 | 3           | 70   |
| 4        | 2020-07-29 | 4           | 100  |
| 5        | 2020-06-10 | 1           | 1010 |
| 6        | 2020-08-01 | 2           | 102  |
| 7        | 2020-08-01 | 3           | 111  |
| 8        | 2020-08-03 | 1           | 99   |
| 9        | 2020-08-07 | 2           | 32   |
| 10       | 2020-07-15 | 1           | 2    |
+----------+------------+-------------+------+
<strong>Output:</strong> 
+---------------+-------------+----------+------------+
| customer_name | customer_id | order_id | order_date |
+---------------+-------------+----------+------------+
| Annabelle     | 3           | 7        | 2020-08-01 |
| Annabelle     | 3           | 3        | 2020-07-31 |
| Jonathan      | 2           | 9        | 2020-08-07 |
| Jonathan      | 2           | 6        | 2020-08-01 |
| Jonathan      | 2           | 2        | 2020-07-30 |
| Marwan        | 4           | 4        | 2020-07-29 |
| Winston       | 1           | 8        | 2020-08-03 |
| Winston       | 1           | 1        | 2020-07-31 |
| Winston       | 1           | 10       | 2020-07-15 |
+---------------+-------------+----------+------------+
<strong>Explanation:</strong> 
Winston has 4 orders, we discard the order of &quot;2020-06-10&quot; because it is the oldest order.
Annabelle has only 2 orders, we return them.
Jonathan has exactly 3 orders.
Marwan ordered only one time.
We sort the result table by customer_name in ascending order, by customer_id in ascending order, and by order_date in descending order in case of a tie.
</pre>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you write a general solution for the most recent <code>n</code> orders?</p>`,
    mysql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> c.name <span class="kw">AS</span> customer_name, o.customer_id, o.order_id, o.order_date,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.customer_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
)
<span class="kw">SELECT</span> customer_name, customer_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn &lt;= 3
<span class="kw">ORDER BY</span> customer_name, customer_id, order_date <span class="kw">DESC</span>;`,
    postgresql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> c.name <span class="kw">AS</span> customer_name, o.customer_id, o.order_id, o.order_date,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.customer_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
)
<span class="kw">SELECT</span> customer_name, customer_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn &lt;= 3
<span class="kw">ORDER BY</span> customer_name, customer_id, order_date <span class="kw">DESC</span>;`,
    sqlserver:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> c.name <span class="kw">AS</span> customer_name, o.customer_id, o.order_id, o.order_date,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.customer_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
)
<span class="kw">SELECT</span> customer_name, customer_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn &lt;= 3
<span class="kw">ORDER BY</span> customer_name, customer_id, order_date <span class="kw">DESC</span>;`,
    oracle:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> c.name <span class="kw">AS</span> customer_name, o.customer_id, o.order_id, o.order_date,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.customer_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Customers c <span class="kw">ON</span> o.customer_id = c.customer_id
)
<span class="kw">SELECT</span> customer_name, customer_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn &lt;= 3
<span class="kw">ORDER BY</span> customer_name, customer_id, order_date <span class="kw">DESC</span>;`
  },
  {
    id:1688, title:"The Most Recent Orders for Each Product",
    difficulty:"medium", tags:["RANK", "CTE", "LEFT JOIN"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| customer_id   | int     |
| name          | varchar |
+---------------+---------+
customer_id is the column with unique values for this table.
This table contains information about the customers.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| order_date    | date    |
| customer_id   | int     |
| product_id    | int     |
+---------------+---------+
order_id is the column with unique values for this table.
This table contains information about the orders made by customer_id.
There will be no product ordered by the same user <strong>more than once</strong> in one day.</pre>

<p>&nbsp;</p>

<p>Table: <code>Products</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| product_name  | varchar |
| price         | int     |
+---------------+---------+
product_id is the column with unique values for this table.
This table contains information about the Products.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the most recent order(s) of each product.</p>

<p>Return the result table ordered by <code>product_name</code> in ascending order and in case of a tie by the <code>product_id</code> in <strong>ascending order</strong>. If there still a tie, order them by <code>order_id</code> in <strong>ascending order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+-------------+-----------+
| customer_id | name      |
+-------------+-----------+
| 1           | Winston   |
| 2           | Jonathan  |
| 3           | Annabelle |
| 4           | Marwan    |
| 5           | Khaled    |
+-------------+-----------+
Orders table:
+----------+------------+-------------+------------+
| order_id | order_date | customer_id | product_id |
+----------+------------+-------------+------------+
| 1        | 2020-07-31 | 1           | 1          |
| 2        | 2020-07-30 | 2           | 2          |
| 3        | 2020-08-29 | 3           | 3          |
| 4        | 2020-07-29 | 4           | 1          |
| 5        | 2020-06-10 | 1           | 2          |
| 6        | 2020-08-01 | 2           | 1          |
| 7        | 2020-08-01 | 3           | 1          |
| 8        | 2020-08-03 | 1           | 2          |
| 9        | 2020-08-07 | 2           | 3          |
| 10       | 2020-07-15 | 1           | 2          |
+----------+------------+-------------+------------+
Products table:
+------------+--------------+-------+
| product_id | product_name | price |
+------------+--------------+-------+
| 1          | keyboard     | 120   |
| 2          | mouse        | 80    |
| 3          | screen       | 600   |
| 4          | hard disk    | 450   |
+------------+--------------+-------+
<strong>Output:</strong> 
+--------------+------------+----------+------------+
| product_name | product_id | order_id | order_date |
+--------------+------------+----------+------------+
| keyboard     | 1          | 6        | 2020-08-01 |
| keyboard     | 1          | 7        | 2020-08-01 |
| mouse        | 2          | 8        | 2020-08-03 |
| screen       | 3          | 3        | 2020-08-29 |
+--------------+------------+----------+------------+
<strong>Explanation:</strong> 
keyboard&#39;s most recent order is in 2020-08-01, it was ordered two times this day.
mouse&#39;s most recent order is in 2020-08-03, it was ordered only once this day.
screen&#39;s most recent order is in 2020-08-29, it was ordered only once this day.
The hard disk was never ordered and we do not include it in the result table.
</pre>`,
    mysql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> o.order_id, o.order_date, o.product_id, p.product_name,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.product_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Products p <span class="kw">ON</span> o.product_id = p.product_id
)
<span class="kw">SELECT</span> product_name, product_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> product_name, product_id, order_id;`,
    postgresql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> o.order_id, o.order_date, o.product_id, p.product_name,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.product_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Products p <span class="kw">ON</span> o.product_id = p.product_id
)
<span class="kw">SELECT</span> product_name, product_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> product_name, product_id, order_id;`,
    sqlserver:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> o.order_id, o.order_date, o.product_id, p.product_name,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.product_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Products p <span class="kw">ON</span> o.product_id = p.product_id
)
<span class="kw">SELECT</span> product_name, product_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> product_name, product_id, order_id;`,
    oracle:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> o.order_id, o.order_date, o.product_id, p.product_name,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> o.product_id <span class="kw">ORDER BY</span> o.order_date <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders o
    <span class="kw">JOIN</span> Products p <span class="kw">ON</span> o.product_id = p.product_id
)
<span class="kw">SELECT</span> product_name, product_id, order_id, order_date
<span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> product_name, product_id, order_id;`
  },
  {
    id:1718, title:"Warehouse Manager",
    difficulty:"easy", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Warehouse</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| name         | varchar |
| product_id   | int     |
| units        | int     |
+--------------+---------+
(name, product_id) is the primary key (combination of columns with unique values) for this table.
Each row of this table contains the information of the products in each warehouse.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Products</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| product_name  | varchar |
| Width         | int     |
| Length        | int     |
| Height        | int     |
+---------------+---------+
product_id is the primary key (column with unique values) for this table.
Each row of this table contains information about the product dimensions (Width, Lenght, and Height) in feets of each product.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the number of cubic feet of <strong>volume </strong>the inventory occupies in each warehouse.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The query result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Warehouse table:
+------------+--------------+-------------+
| name       | product_id   | units       |
+------------+--------------+-------------+
| LCHouse1   | 1            | 1           |
| LCHouse1   | 2            | 10          |
| LCHouse1   | 3            | 5           |
| LCHouse2   | 1            | 2           |
| LCHouse2   | 2            | 2           |
| LCHouse3   | 4            | 1           |
+------------+--------------+-------------+
Products table:
+------------+--------------+------------+----------+-----------+
| product_id | product_name | Width      | Length   | Height    |
+------------+--------------+------------+----------+-----------+
| 1          | LC-TV        | 5          | 50       | 40        |
| 2          | LC-KeyChain  | 5          | 5        | 5         |
| 3          | LC-Phone     | 2          | 10       | 10        |
| 4          | LC-T-Shirt   | 4          | 10       | 20        |
+------------+--------------+------------+----------+-----------+
<strong>Output:</strong> 
+----------------+------------+
| warehouse_name | volume     | 
+----------------+------------+
| LCHouse1       | 12250      | 
| LCHouse2       | 20250      |
| LCHouse3       | 800        |
+----------------+------------+
<strong>Explanation:</strong> 
Volume of product_id = 1 (LC-TV), 5x50x40 = 10000
Volume of product_id = 2 (LC-KeyChain), 5x5x5 = 125 
Volume of product_id = 3 (LC-Phone), 2x10x10 = 200
Volume of product_id = 4 (LC-T-Shirt), 4x10x20 = 800
LCHouse1: 1 unit of LC-TV + 10 units of LC-KeyChain + 5 units of LC-Phone.
          Total volume: 1*10000 + 10*125  + 5*200 = 12250 cubic feet
LCHouse2: 2 units of LC-TV + 2 units of LC-KeyChain.
          Total volume: 2*10000 + 2*125 = 20250 cubic feet
LCHouse3: 1 unit of LC-T-Shirt.
          Total volume: 1*800 = 800 cubic feet.
</pre>`,
    mysql:`<span class="kw">SELECT</span> w.name <span class="kw">AS</span> warehouse_name,
       <span class="fn">SUM</span>(w.units * p.Width * p.Length * p.Height) <span class="kw">AS</span> volume
<span class="kw">FROM</span> Warehouse w
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> w.product_id = p.product_id
<span class="kw">GROUP BY</span> w.name;`,
    postgresql:`<span class="kw">SELECT</span> w.name <span class="kw">AS</span> warehouse_name,
       <span class="fn">SUM</span>(w.units * p.Width * p.Length * p.Height) <span class="kw">AS</span> volume
<span class="kw">FROM</span> Warehouse w
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> w.product_id = p.product_id
<span class="kw">GROUP BY</span> w.name;`,
    sqlserver:`<span class="kw">SELECT</span> w.name <span class="kw">AS</span> warehouse_name,
       <span class="fn">SUM</span>(w.units * p.Width * p.Length * p.Height) <span class="kw">AS</span> volume
<span class="kw">FROM</span> Warehouse w
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> w.product_id = p.product_id
<span class="kw">GROUP BY</span> w.name;`,
    oracle:`<span class="kw">SELECT</span> w.name <span class="kw">AS</span> warehouse_name,
       <span class="fn">SUM</span>(w.units * p.Width * p.Length * p.Height) <span class="kw">AS</span> volume
<span class="kw">FROM</span> Warehouse w
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> w.product_id = p.product_id
<span class="kw">GROUP BY</span> w.name;`
  },
  {
    id:1734, title:"Bank Account Summary II",
    difficulty:"easy", tags:["LEFT JOIN", "GROUP BY", "HAVING"],
    description:`<p>Table: <code>Users</code></p>

<pre>
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| account      | int     |
| name         | varchar |
+--------------+---------+
account is the primary key (column with unique values) for this table.
Each row of this table contains the account number of each user in the bank.
There will be no two users having the same name in the table.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Transactions</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| trans_id      | int     |
| account       | int     |
| amount        | int     |
| transacted_on | date    |
+---------------+---------+
trans_id is the primary key (column with unique values) for this table.
Each row of this table contains all changes made to all accounts.
amount is positive if the user received money and negative if they transferred money.
All accounts start with a balance of 0.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the name and balance of users with a balance higher than <code>10000</code>. The balance of an account is equal to the sum of the amounts of all transactions involving that account.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Users table:
+------------+--------------+
| account    | name         |
+------------+--------------+
| 900001     | Alice        |
| 900002     | Bob          |
| 900003     | Charlie      |
+------------+--------------+
Transactions table:
+------------+------------+------------+---------------+
| trans_id   | account    | amount     | transacted_on |
+------------+------------+------------+---------------+
| 1          | 900001     | 7000       |  2020-08-01   |
| 2          | 900001     | 7000       |  2020-09-01   |
| 3          | 900001     | -3000      |  2020-09-02   |
| 4          | 900002     | 1000       |  2020-09-12   |
| 5          | 900003     | 6000       |  2020-08-07   |
| 6          | 900003     | 6000       |  2020-09-07   |
| 7          | 900003     | -4000      |  2020-09-11   |
+------------+------------+------------+---------------+
<strong>Output:</strong> 
+------------+------------+
| name       | balance    |
+------------+------------+
| Alice      | 11000      |
+------------+------------+
<strong>Explanation:</strong> 
Alice&#39;s balance is (7000 + 7000 - 3000) = 11000.
Bob&#39;s balance is 1000.
Charlie&#39;s balance is (6000 + 6000 - 4000) = 8000.
</pre>`,
    mysql:`<span class="kw">SELECT</span> u.name, <span class="fn">SUM</span>(t.amount) <span class="kw">AS</span> balance
<span class="kw">FROM</span> Transactions t
<span class="kw">JOIN</span> Users u <span class="kw">ON</span> t.account = u.account
<span class="kw">GROUP BY</span> u.name
<span class="kw">HAVING</span> <span class="fn">SUM</span>(t.amount) &gt; 10000;`,
    postgresql:`<span class="kw">SELECT</span> u.name, <span class="fn">SUM</span>(t.amount) <span class="kw">AS</span> balance
<span class="kw">FROM</span> Transactions t
<span class="kw">JOIN</span> Users u <span class="kw">ON</span> t.account = u.account
<span class="kw">GROUP BY</span> u.name
<span class="kw">HAVING</span> <span class="fn">SUM</span>(t.amount) &gt; 10000;`,
    sqlserver:`<span class="kw">SELECT</span> u.name, <span class="fn">SUM</span>(t.amount) <span class="kw">AS</span> balance
<span class="kw">FROM</span> Transactions t
<span class="kw">JOIN</span> Users u <span class="kw">ON</span> t.account = u.account
<span class="kw">GROUP BY</span> u.name
<span class="kw">HAVING</span> <span class="fn">SUM</span>(t.amount) &gt; 10000;`,
    oracle:`<span class="kw">SELECT</span> u.name, <span class="fn">SUM</span>(t.amount) <span class="kw">AS</span> balance
<span class="kw">FROM</span> Transactions t
<span class="kw">JOIN</span> Users u <span class="kw">ON</span> t.account = u.account
<span class="kw">GROUP BY</span> u.name
<span class="kw">HAVING</span> <span class="fn">SUM</span>(t.amount) &gt; 10000;`
  },
  {
    id:1735, title:"The Most Frequently Ordered Products for Each Customer",
    difficulty:"medium", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| customer_id   | int     |
| name          | varchar |
+---------------+---------+
customer_id is the column with unique values for this table.
This table contains information about the customers.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| order_date    | date    |
| customer_id   | int     |
| product_id    | int     |
+---------------+---------+
order_id is the column with unique values for this table.
This table contains information about the orders made by customer_id.
No customer will order the same product <strong>more than once</strong> in a single day.</pre>

<p>&nbsp;</p>

<p>Table: <code>Products</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| product_name  | varchar |
| price         | int     |
+---------------+---------+
product_id is the column with unique values for this table.
This table contains information about the products.
</pre>

<p>&nbsp;</p>

<p>Write a solution to find the most frequently ordered product(s) for each customer.</p>

<p>The result table should have the <code>product_id</code> and <code>product_name</code> for each <code>customer_id</code> who ordered at least one order.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+-------------+-------+
| customer_id | name  |
+-------------+-------+
| 1           | Alice |
| 2           | Bob   |
| 3           | Tom   |
| 4           | Jerry |
| 5           | John  |
+-------------+-------+
Orders table:
+----------+------------+-------------+------------+
| order_id | order_date | customer_id | product_id |
+----------+------------+-------------+------------+
| 1        | 2020-07-31 | 1           | 1          |
| 2        | 2020-07-30 | 2           | 2          |
| 3        | 2020-08-29 | 3           | 3          |
| 4        | 2020-07-29 | 4           | 1          |
| 5        | 2020-06-10 | 1           | 2          |
| 6        | 2020-08-01 | 2           | 1          |
| 7        | 2020-08-01 | 3           | 3          |
| 8        | 2020-08-03 | 1           | 2          |
| 9        | 2020-08-07 | 2           | 3          |
| 10       | 2020-07-15 | 1           | 2          |
+----------+------------+-------------+------------+
Products table:
+------------+--------------+-------+
| product_id | product_name | price |
+------------+--------------+-------+
| 1          | keyboard     | 120   |
| 2          | mouse        | 80    |
| 3          | screen       | 600   |
| 4          | hard disk    | 450   |
+------------+--------------+-------+
<strong>Output:</strong> 
+-------------+------------+--------------+
| customer_id | product_id | product_name |
+-------------+------------+--------------+
| 1           | 2          | mouse        |
| 2           | 1          | keyboard     |
| 2           | 2          | mouse        |
| 2           | 3          | screen       |
| 3           | 3          | screen       |
| 4           | 1          | keyboard     |
+-------------+------------+--------------+
<strong>Explanation:</strong> 
Alice (customer 1) ordered the mouse three times and the keyboard one time, so the mouse is the most frequently ordered product for them.
Bob (customer 2) ordered the keyboard, the mouse, and the screen one time, so those are the most frequently ordered products for them.
Tom (customer 3) only ordered the screen (two times), so that is the most frequently ordered product for them.
Jerry (customer 4) only ordered the keyboard (one time), so that is the most frequently ordered product for them.
John (customer 5) did not order anything, so we do not include them in the result table.
</pre>`,
    mysql:`<span class="kw">WITH</span> freq <span class="kw">AS</span> (
    <span class="kw">SELECT</span> customer_id, product_id, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> cnt,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> customer_id <span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(*) <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders
    <span class="kw">GROUP BY</span> customer_id, product_id
)
<span class="kw">SELECT</span> f.customer_id, f.product_id, p.product_name
<span class="kw">FROM</span> freq f
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> f.product_id = p.product_id
<span class="kw">WHERE</span> rn = 1;`,
    postgresql:`<span class="kw">WITH</span> freq <span class="kw">AS</span> (
    <span class="kw">SELECT</span> customer_id, product_id, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> cnt,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> customer_id <span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(*) <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders
    <span class="kw">GROUP BY</span> customer_id, product_id
)
<span class="kw">SELECT</span> f.customer_id, f.product_id, p.product_name
<span class="kw">FROM</span> freq f
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> f.product_id = p.product_id
<span class="kw">WHERE</span> rn = 1;`,
    sqlserver:`<span class="kw">WITH</span> freq <span class="kw">AS</span> (
    <span class="kw">SELECT</span> customer_id, product_id, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> cnt,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> customer_id <span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(*) <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders
    <span class="kw">GROUP BY</span> customer_id, product_id
)
<span class="kw">SELECT</span> f.customer_id, f.product_id, p.product_name
<span class="kw">FROM</span> freq f
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> f.product_id = p.product_id
<span class="kw">WHERE</span> rn = 1;`,
    oracle:`<span class="kw">WITH</span> freq <span class="kw">AS</span> (
    <span class="kw">SELECT</span> customer_id, product_id, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> cnt,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> customer_id <span class="kw">ORDER BY</span> <span class="fn">COUNT</span>(*) <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Orders
    <span class="kw">GROUP BY</span> customer_id, product_id
)
<span class="kw">SELECT</span> f.customer_id, f.product_id, p.product_name
<span class="kw">FROM</span> freq f
<span class="kw">JOIN</span> Products p <span class="kw">ON</span> f.product_id = p.product_id
<span class="kw">WHERE</span> rn = 1;`
  },
  {
    id:1749, title:"Sellers With No Sales",
    difficulty:"easy", tags:["LEFT JOIN", "GROUP BY", "CASE WHEN"],
    description:`<p>Table: <code>Customer</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| customer_id   | int     |
| customer_name | varchar |
+---------------+---------+
customer_id is the column with unique values for this table.
Each row of this table contains the information of each customer in the WebStore.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Orders</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| sale_date     | date    |
| order_cost    | int     |
| customer_id   | int     |
| seller_id     | int     |
+---------------+---------+
order_id is the column with unique values for this table.
Each row of this table contains all orders made in the webstore.
sale_date is the date when the transaction was made between the customer (customer_id) and the seller (seller_id).
</pre>

<p>&nbsp;</p>

<p>Table: <code>Seller</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| seller_id     | int     |
| seller_name   | varchar |
+---------------+---------+
seller_id is the column with unique values for this table.
Each row of this table contains the information of each seller.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the names of all sellers who did not make any sales in <code>2020</code>.</p>

<p>Return the result table ordered by <code>seller_name</code> in <strong>ascending order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customer table:
+--------------+---------------+
| customer_id  | customer_name |
+--------------+---------------+
| 101          | Alice         |
| 102          | Bob           |
| 103          | Charlie       |
+--------------+---------------+
Orders table:
+-------------+------------+--------------+-------------+-------------+
| order_id    | sale_date  | order_cost   | customer_id | seller_id   |
+-------------+------------+--------------+-------------+-------------+
| 1           | 2020-03-01 | 1500         | 101         | 1           |
| 2           | 2020-05-25 | 2400         | 102         | 2           |
| 3           | 2019-05-25 | 800          | 101         | 3           |
| 4           | 2020-09-13 | 1000         | 103         | 2           |
| 5           | 2019-02-11 | 700          | 101         | 2           |
+-------------+------------+--------------+-------------+-------------+
Seller table:
+-------------+-------------+
| seller_id   | seller_name |
+-------------+-------------+
| 1           | Daniel      |
| 2           | Elizabeth   |
| 3           | Frank       |
+-------------+-------------+
<strong>Output:</strong> 
+-------------+
| seller_name |
+-------------+
| Frank       |
+-------------+
<strong>Explanation:</strong> 
Daniel made 1 sale in March 2020.
Elizabeth made 2 sales in 2020 and 1 sale in 2019.
Frank made 1 sale in 2019 but no sales in 2020.
</pre>`,
    mysql:`<span class="kw">SELECT</span> seller_name
<span class="kw">FROM</span> Seller
<span class="kw">WHERE</span> seller_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> <span class="kw">DISTINCT</span> seller_id <span class="kw">FROM</span> Orders
    <span class="kw">WHERE</span> <span class="fn">YEAR</span>(sale_date) = 2020
)
<span class="kw">ORDER BY</span> seller_name;`,
    postgresql:`<span class="kw">SELECT</span> seller_name
<span class="kw">FROM</span> Seller
<span class="kw">WHERE</span> seller_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> <span class="kw">DISTINCT</span> seller_id <span class="kw">FROM</span> Orders
    <span class="kw">WHERE</span> <span class="fn">EXTRACT</span>(YEAR <span class="kw">FROM</span> sale_date) = 2020
)
<span class="kw">ORDER BY</span> seller_name;`,
    sqlserver:`<span class="kw">SELECT</span> seller_name
<span class="kw">FROM</span> Seller
<span class="kw">WHERE</span> seller_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> <span class="kw">DISTINCT</span> seller_id <span class="kw">FROM</span> Orders
    <span class="kw">WHERE</span> <span class="fn">YEAR</span>(sale_date) = 2020
)
<span class="kw">ORDER BY</span> seller_name;`,
    oracle:`<span class="kw">SELECT</span> seller_name
<span class="kw">FROM</span> Seller
<span class="kw">WHERE</span> seller_id <span class="kw">NOT IN</span> (
    <span class="kw">SELECT</span> <span class="kw">DISTINCT</span> seller_id <span class="kw">FROM</span> Orders
    <span class="kw">WHERE</span> <span class="fn">EXTRACT</span>(YEAR <span class="kw">FROM</span> sale_date) = 2020
)
<span class="kw">ORDER BY</span> seller_name;`
  },
  {
    id:1837, title:"Daily Leads and Partners",
    difficulty:"easy", tags:["CTE", "LEFT JOIN", "GROUP BY"],
    description:`<p>Table: <code>DailySales</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| date_id     | date    |
| make_name   | varchar |
| lead_id     | int     |
| partner_id  | int     |
+-------------+---------+
There is no primary key (column with unique values) for this table. It may contain duplicates.
This table contains the date and the name of the product sold and the IDs of the lead and partner it was sold to.
The name consists of only lowercase English letters.
</pre>

<p>&nbsp;</p>

<p>For each <code>date_id</code> and <code>make_name</code>, find the number of <strong>distinct</strong> <code>lead_id</code>&#39;s and <strong>distinct</strong> <code>partner_id</code>&#39;s.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
DailySales table:
+-----------+-----------+---------+------------+
| date_id   | make_name | lead_id | partner_id |
+-----------+-----------+---------+------------+
| 2020-12-8 | toyota    | 0       | 1          |
| 2020-12-8 | toyota    | 1       | 0          |
| 2020-12-8 | toyota    | 1       | 2          |
| 2020-12-7 | toyota    | 0       | 2          |
| 2020-12-7 | toyota    | 0       | 1          |
| 2020-12-8 | honda     | 1       | 2          |
| 2020-12-8 | honda     | 2       | 1          |
| 2020-12-7 | honda     | 0       | 1          |
| 2020-12-7 | honda     | 1       | 2          |
| 2020-12-7 | honda     | 2       | 1          |
+-----------+-----------+---------+------------+
<strong>Output:</strong> 
+-----------+-----------+--------------+-----------------+
| date_id   | make_name | unique_leads | unique_partners |
+-----------+-----------+--------------+-----------------+
| 2020-12-8 | toyota    | 2            | 3               |
| 2020-12-7 | toyota    | 1            | 2               |
| 2020-12-8 | honda     | 2            | 2               |
| 2020-12-7 | honda     | 3            | 2               |
+-----------+-----------+--------------+-----------------+
<strong>Explanation:</strong> 
For 2020-12-8, toyota gets leads = [0, 1] and partners = [0, 1, 2] while honda gets leads = [1, 2] and partners = [1, 2].
For 2020-12-7, toyota gets leads = [0] and partners = [1, 2] while honda gets leads = [0, 1, 2] and partners = [1, 2].
</pre>`,
    mysql:`<span class="kw">SELECT</span> date_id, make_name,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> lead_id)    <span class="kw">AS</span> unique_leads,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> partner_id) <span class="kw">AS</span> unique_partners
<span class="kw">FROM</span> DailySales
<span class="kw">GROUP BY</span> date_id, make_name;`,
    postgresql:`<span class="kw">SELECT</span> date_id, make_name,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> lead_id)    <span class="kw">AS</span> unique_leads,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> partner_id) <span class="kw">AS</span> unique_partners
<span class="kw">FROM</span> DailySales
<span class="kw">GROUP BY</span> date_id, make_name;`,
    sqlserver:`<span class="kw">SELECT</span> date_id, make_name,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> lead_id)    <span class="kw">AS</span> unique_leads,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> partner_id) <span class="kw">AS</span> unique_partners
<span class="kw">FROM</span> DailySales
<span class="kw">GROUP BY</span> date_id, make_name;`,
    oracle:`<span class="kw">SELECT</span> date_id, make_name,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> lead_id)    <span class="kw">AS</span> unique_leads,
       <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> partner_id) <span class="kw">AS</span> unique_partners
<span class="kw">FROM</span> DailySales
<span class="kw">GROUP BY</span> date_id, make_name;`
  },
  {
    id:1842, title:"Number of Calls Between Two Persons",
    difficulty:"medium", tags:["CTE", "GROUP BY", "CASE WHEN"],
    description:`<p>Table: <code>Calls</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| from_id     | int     |
| to_id       | int     |
| duration    | int     |
+-------------+---------+
This table does not have a primary key (column with unique values), it may contain duplicates.
This table contains the duration of a phone call between from_id and to_id.
from_id != to_id
</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to report the number of calls and the total call duration between each pair of distinct persons <code>(person1, person2)</code> where <code>person1 &lt; person2</code>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Calls table:
+---------+-------+----------+
| from_id | to_id | duration |
+---------+-------+----------+
| 1       | 2     | 59       |
| 2       | 1     | 11       |
| 1       | 3     | 20       |
| 3       | 4     | 100      |
| 3       | 4     | 200      |
| 3       | 4     | 200      |
| 4       | 3     | 499      |
+---------+-------+----------+
<strong>Output:</strong> 
+---------+---------+------------+----------------+
| person1 | person2 | call_count | total_duration |
+---------+---------+------------+----------------+
| 1       | 2       | 2          | 70             |
| 1       | 3       | 1          | 20             |
| 3       | 4       | 4          | 999            |
+---------+---------+------------+----------------+
<strong>Explanation:</strong> 
Users 1 and 2 had 2 calls and the total duration is 70 (59 + 11).
Users 1 and 3 had 1 call and the total duration is 20.
Users 3 and 4 had 4 calls and the total duration is 999 (100 + 200 + 200 + 499).
</pre>`,
    mysql:`<span class="kw">WITH</span> normalized <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">LEAST</span>(from_id, to_id)    <span class="kw">AS</span> person1,
           <span class="fn">GREATEST</span>(from_id, to_id) <span class="kw">AS</span> person2,
           duration
    <span class="kw">FROM</span> Calls
)
<span class="kw">SELECT</span> person1, person2,
       <span class="fn">COUNT</span>(*)       <span class="kw">AS</span> call_count,
       <span class="fn">SUM</span>(duration)  <span class="kw">AS</span> total_duration
<span class="kw">FROM</span> normalized
<span class="kw">GROUP BY</span> person1, person2;`,
    postgresql:`<span class="kw">WITH</span> normalized <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">LEAST</span>(from_id, to_id)    <span class="kw">AS</span> person1,
           <span class="fn">GREATEST</span>(from_id, to_id) <span class="kw">AS</span> person2,
           duration
    <span class="kw">FROM</span> Calls
)
<span class="kw">SELECT</span> person1, person2,
       <span class="fn">COUNT</span>(*)       <span class="kw">AS</span> call_count,
       <span class="fn">SUM</span>(duration)  <span class="kw">AS</span> total_duration
<span class="kw">FROM</span> normalized
<span class="kw">GROUP BY</span> person1, person2;`,
    sqlserver:`<span class="kw">WITH</span> normalized <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="kw">CASE</span> <span class="kw">WHEN</span> from_id &lt; to_id <span class="kw">THEN</span> from_id <span class="kw">ELSE</span> to_id <span class="kw">END</span> <span class="kw">AS</span> person1,
           <span class="kw">CASE</span> <span class="kw">WHEN</span> from_id &gt; to_id <span class="kw">THEN</span> from_id <span class="kw">ELSE</span> to_id <span class="kw">END</span> <span class="kw">AS</span> person2,
           duration
    <span class="kw">FROM</span> Calls
)
<span class="kw">SELECT</span> person1, person2,
       <span class="fn">COUNT</span>(*)       <span class="kw">AS</span> call_count,
       <span class="fn">SUM</span>(duration)  <span class="kw">AS</span> total_duration
<span class="kw">FROM</span> normalized
<span class="kw">GROUP BY</span> person1, person2;`,
    oracle:`<span class="kw">WITH</span> normalized <span class="kw">AS</span> (
    <span class="kw">SELECT</span> <span class="fn">LEAST</span>(from_id, to_id)    <span class="kw">AS</span> person1,
           <span class="fn">GREATEST</span>(from_id, to_id) <span class="kw">AS</span> person2,
           duration
    <span class="kw">FROM</span> Calls
)
<span class="kw">SELECT</span> person1, person2,
       <span class="fn">COUNT</span>(*)       <span class="kw">AS</span> call_count,
       <span class="fn">SUM</span>(duration)  <span class="kw">AS</span> total_duration
<span class="kw">FROM</span> normalized
<span class="kw">GROUP BY</span> person1, person2;`
  },
  {
    id:1852, title:"Biggest Window Between Visits",
    difficulty:"medium", tags:["RANK", "CTE", "UNION"],
    description:`<p>Table: <code>UserVisits</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| user_id     | int  |
| visit_date  | date |
+-------------+------+
This table does not have a primary key, it might contain duplicate rows.
This table contains logs of the dates that users visited a certain retailer.
</pre>

<p>&nbsp;</p>

<p>Assume today&#39;s date is <code>&#39;2021-1-1&#39;</code>.</p>

<p>Write a solution that will, for each <code>user_id</code>, find out the largest <code>window</code> of days between each visit and the one right after it (or today if you are considering the last visit).</p>

<p>Return the result table ordered by <code>user_id</code>.</p>

<p>The query result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
UserVisits table:
+---------+------------+
| user_id | visit_date |
+---------+------------+
| 1       | 2020-11-28 |
| 1       | 2020-10-20 |
| 1       | 2020-12-3  |
| 2       | 2020-10-5  |
| 2       | 2020-12-9  |
| 3       | 2020-11-11 |
+---------+------------+
<strong>Output:</strong> 
+---------+---------------+
| user_id | biggest_window|
+---------+---------------+
| 1       | 39            |
| 2       | 65            |
| 3       | 51            |
+---------+---------------+
<strong>Explanation:</strong> 
For the first user, the windows in question are between dates:
    - 2020-10-20 and 2020-11-28 with a total of 39 days. 
    - 2020-11-28 and 2020-12-3 with a total of 5 days. 
    - 2020-12-3 and 2021-1-1 with a total of 29 days.
Making the biggest window the one with 39 days.
For the second user, the windows in question are between dates:
    - 2020-10-5 and 2020-12-9 with a total of 65 days.
    - 2020-12-9 and 2021-1-1 with a total of 23 days.
Making the biggest window the one with 65 days.
For the third user, the only window in question is between dates 2020-11-11 and 2021-1-1 with a total of 51 days.
</pre>`,
    mysql:`<span class="kw">WITH</span> gaps <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user_id,
           <span class="fn">DATEDIFF</span>(
               <span class="fn">LEAD</span>(visit_date, 1, '2021-01-01') <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> user_id <span class="kw">ORDER BY</span> visit_date),
               visit_date
           ) <span class="kw">AS</span> gap
    <span class="kw">FROM</span> UserVisits
)
<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(gap) <span class="kw">AS</span> biggest_window
<span class="kw">FROM</span> gaps
<span class="kw">GROUP BY</span> user_id
<span class="kw">ORDER BY</span> user_id;`,
    postgresql:`<span class="kw">WITH</span> gaps <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user_id,
           <span class="fn">COALESCE</span>(
               <span class="fn">LEAD</span>(visit_date) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> user_id <span class="kw">ORDER BY</span> visit_date),
               DATE '2021-01-01'
           ) - visit_date <span class="kw">AS</span> gap
    <span class="kw">FROM</span> UserVisits
)
<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(gap) <span class="kw">AS</span> biggest_window
<span class="kw">FROM</span> gaps
<span class="kw">GROUP BY</span> user_id
<span class="kw">ORDER BY</span> user_id;`,
    sqlserver:`<span class="kw">WITH</span> gaps <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user_id,
           <span class="fn">DATEDIFF</span>(DAY, visit_date,
               <span class="fn">COALESCE</span>(
                   <span class="fn">LEAD</span>(visit_date) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> user_id <span class="kw">ORDER BY</span> visit_date),
                   '2021-01-01'
               )
           ) <span class="kw">AS</span> gap
    <span class="kw">FROM</span> UserVisits
)
<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(gap) <span class="kw">AS</span> biggest_window
<span class="kw">FROM</span> gaps
<span class="kw">GROUP BY</span> user_id
<span class="kw">ORDER BY</span> user_id;`,
    oracle:`<span class="kw">WITH</span> gaps <span class="kw">AS</span> (
    <span class="kw">SELECT</span> user_id,
           <span class="fn">COALESCE</span>(
               <span class="fn">LEAD</span>(visit_date) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> user_id <span class="kw">ORDER BY</span> visit_date),
               DATE '2021-01-01'
           ) - visit_date <span class="kw">AS</span> gap
    <span class="kw">FROM</span> UserVisits
)
<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(gap) <span class="kw">AS</span> biggest_window
<span class="kw">FROM</span> gaps
<span class="kw">GROUP BY</span> user_id
<span class="kw">ORDER BY</span> user_id;`
  },
  {
    id:1892, title:"Find Total Time Spent by Each Employee",
    difficulty:"easy", tags:["GROUP BY"],
    description:`<p>Table: <code>Employees</code></p>

<pre>
+-------------+------+
| Column Name | Type |
+-------------+------+
| emp_id      | int  |
| event_day   | date |
| in_time     | int  |
| out_time    | int  |
+-------------+------+
(emp_id, event_day, in_time) is the primary key (combinations of columns with unique values) of this table.
The table shows the employees&#39; entries and exits in an office.
event_day is the day at which this event happened, in_time is the minute at which the employee entered the office, and out_time is the minute at which they left the office.
in_time and out_time are between 1 and 1440.
It is guaranteed that no two events on the same day intersect in time, and in_time &lt; out_time.
</pre>

<p>&nbsp;</p>

<p>Write a solution to calculate the total time <strong>in minutes</strong> spent by each employee on each day at the office. Note that within one day, an employee can enter and leave more than once. The time spent in the office for a single entry is <code>out_time - in_time</code>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Employees table:
+--------+------------+---------+----------+
| emp_id | event_day  | in_time | out_time |
+--------+------------+---------+----------+
| 1      | 2020-11-28 | 4       | 32       |
| 1      | 2020-11-28 | 55      | 200      |
| 1      | 2020-12-03 | 1       | 42       |
| 2      | 2020-11-28 | 3       | 33       |
| 2      | 2020-12-09 | 47      | 74       |
+--------+------------+---------+----------+
<strong>Output:</strong> 
+------------+--------+------------+
| day        | emp_id | total_time |
+------------+--------+------------+
| 2020-11-28 | 1      | 173        |
| 2020-11-28 | 2      | 30         |
| 2020-12-03 | 1      | 41         |
| 2020-12-09 | 2      | 27         |
+------------+--------+------------+
<strong>Explanation:</strong> 
Employee 1 has three events: two on day 2020-11-28 with a total of (32 - 4) + (200 - 55) = 173, and one on day 2020-12-03 with a total of (42 - 1) = 41.
Employee 2 has two events: one on day 2020-11-28 with a total of (33 - 3) = 30, and one on day 2020-12-09 with a total of (74 - 47) = 27.
</pre>`,
    mysql:`<span class="kw">SELECT</span> event_day <span class="kw">AS</span> day, emp_id,
       <span class="fn">SUM</span>(out_time - in_time) <span class="kw">AS</span> total_time
<span class="kw">FROM</span> Employees
<span class="kw">GROUP BY</span> event_day, emp_id;`,
    postgresql:`<span class="kw">SELECT</span> event_day <span class="kw">AS</span> day, emp_id,
       <span class="fn">SUM</span>(out_time - in_time) <span class="kw">AS</span> total_time
<span class="kw">FROM</span> Employees
<span class="kw">GROUP BY</span> event_day, emp_id;`,
    sqlserver:`<span class="kw">SELECT</span> event_day <span class="kw">AS</span> day, emp_id,
       <span class="fn">SUM</span>(out_time - in_time) <span class="kw">AS</span> total_time
<span class="kw">FROM</span> Employees
<span class="kw">GROUP BY</span> event_day, emp_id;`,
    oracle:`<span class="kw">SELECT</span> event_day <span class="kw">AS</span> day, emp_id,
       <span class="fn">SUM</span>(out_time - in_time) <span class="kw">AS</span> total_time
<span class="kw">FROM</span> Employees
<span class="kw">GROUP BY</span> event_day, emp_id;`
  },
  {
    id:1898, title:"Leetflex Banned Accounts",
    difficulty:"medium", tags:["CTE", "LEFT JOIN", "CASE WHEN"],
    description:`<p>Table: <code>LogInfo</code></p>

<pre>
+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| account_id  | int      |
| ip_address  | int      |
| login       | datetime |
| logout      | datetime |
+-------------+----------+
This table may contain duplicate rows.
The table contains information about the login and logout dates of Leetflex accounts. It also contains the IP address from which the account was logged in and out.
It is guaranteed that the logout time is after the login time.
</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to find the <code>account_id</code> of the accounts that should be banned from Leetflex. An account should be banned if it was logged in at some moment from two different IP addresses.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
LogInfo table:
+------------+------------+---------------------+---------------------+
| account_id | ip_address | login               | logout              |
+------------+------------+---------------------+---------------------+
| 1          | 1          | 2021-02-01 09:00:00 | 2021-02-01 09:30:00 |
| 1          | 2          | 2021-02-01 08:00:00 | 2021-02-01 11:30:00 |
| 2          | 6          | 2021-02-01 20:30:00 | 2021-02-01 22:00:00 |
| 2          | 7          | 2021-02-02 20:30:00 | 2021-02-02 22:00:00 |
| 3          | 9          | 2021-02-01 16:00:00 | 2021-02-01 16:59:59 |
| 3          | 13         | 2021-02-01 17:00:00 | 2021-02-01 17:59:59 |
| 4          | 10         | 2021-02-01 16:00:00 | 2021-02-01 17:00:00 |
| 4          | 11         | 2021-02-01 17:00:00 | 2021-02-01 17:59:59 |
+------------+------------+---------------------+---------------------+
<strong>Output:</strong> 
+------------+
| account_id |
+------------+
| 1          |
| 4          |
+------------+
<strong>Explanation:</strong> 
Account ID 1 --&gt; The account was active from &quot;2021-02-01 09:00:00&quot; to &quot;2021-02-01 09:30:00&quot; with two different IP addresses (1 and 2). It should be banned.
Account ID 2 --&gt; The account was active from two different addresses (6, 7) but in <strong>two different times</strong>.
Account ID 3 --&gt; The account was active from two different addresses (9, 13) on the same day but <strong>they do not intersect at any moment</strong>.
Account ID 4 --&gt; The account was active from &quot;2021-02-01 17:00:00&quot; to &quot;2021-02-01 17:00:00&quot; with two different IP addresses (10 and 11). It should be banned.
</pre>`,
    mysql:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> l1.account_id
<span class="kw">FROM</span> LogInfo l1
<span class="kw">JOIN</span> LogInfo l2
  <span class="kw">ON</span> l1.account_id = l2.account_id
 <span class="kw">AND</span> l1.ip_address &lt;&gt; l2.ip_address
 <span class="kw">AND</span> l2.login <span class="kw">BETWEEN</span> l1.login <span class="kw">AND</span> l1.logout;`,
    postgresql:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> l1.account_id
<span class="kw">FROM</span> LogInfo l1
<span class="kw">JOIN</span> LogInfo l2
  <span class="kw">ON</span> l1.account_id = l2.account_id
 <span class="kw">AND</span> l1.ip_address &lt;&gt; l2.ip_address
 <span class="kw">AND</span> l2.login <span class="kw">BETWEEN</span> l1.login <span class="kw">AND</span> l1.logout;`,
    sqlserver:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> l1.account_id
<span class="kw">FROM</span> LogInfo l1
<span class="kw">JOIN</span> LogInfo l2
  <span class="kw">ON</span> l1.account_id = l2.account_id
 <span class="kw">AND</span> l1.ip_address &lt;&gt; l2.ip_address
 <span class="kw">AND</span> l2.login <span class="kw">BETWEEN</span> l1.login <span class="kw">AND</span> l1.logout;`,
    oracle:`<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> l1.account_id
<span class="kw">FROM</span> LogInfo l1
<span class="kw">JOIN</span> LogInfo l2
  <span class="kw">ON</span> l1.account_id = l2.account_id
 <span class="kw">AND</span> l1.ip_address &lt;&gt; l2.ip_address
 <span class="kw">AND</span> l2.login <span class="kw">BETWEEN</span> l1.login <span class="kw">AND</span> l1.logout;`
  },
  {
    id:1914, title:"Find the Subtasks That Did Not Execute",
    difficulty:"hard", tags:["CTE", "LEFT JOIN", "UNION"],
    description:`<p>Table: <code>Tasks</code></p>

<pre>
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| task_id        | int     |
| subtasks_count | int     |
+----------------+---------+
task_id is the column with unique values for this table.
Each row in this table indicates that task_id was divided into subtasks_count subtasks labeled from 1 to subtasks_count.
It is guaranteed that 2 &lt;= subtasks_count &lt;= 20.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Executed</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| task_id       | int     |
| subtask_id    | int     |
+---------------+---------+
(task_id, subtask_id) is the combination of columns with unique values for this table.
Each row in this table indicates that for the task task_id, the subtask with ID subtask_id was executed successfully.
It is <strong>guaranteed</strong> that subtask_id &lt;= subtasks_count for each task_id.</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to report the IDs of the missing subtasks for each <code>task_id</code>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Tasks table:
+---------+----------------+
| task_id | subtasks_count |
+---------+----------------+
| 1       | 3              |
| 2       | 2              |
| 3       | 4              |
+---------+----------------+
Executed table:
+---------+------------+
| task_id | subtask_id |
+---------+------------+
| 1       | 2          |
| 3       | 1          |
| 3       | 2          |
| 3       | 3          |
| 3       | 4          |
+---------+------------+
<strong>Output:</strong> 
+---------+------------+
| task_id | subtask_id |
+---------+------------+
| 1       | 1          |
| 1       | 3          |
| 2       | 1          |
| 2       | 2          |
+---------+------------+
<strong>Explanation:</strong> 
Task 1 was divided into 3 subtasks (1, 2, 3). Only subtask 2 was executed successfully, so we include (1, 1) and (1, 3) in the answer.
Task 2 was divided into 2 subtasks (1, 2). No subtask was executed successfully, so we include (2, 1) and (2, 2) in the answer.
Task 3 was divided into 4 subtasks (1, 2, 3, 4). All of the subtasks were executed successfully.
</pre>`,
    mysql:`<span class="cm">-- MySQL does not support recursive CTEs easily for this pattern; use a numbers table trick</span>
<span class="kw">WITH</span> <span class="kw">RECURSIVE</span> nums <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 1 <span class="kw">AS</span> n
    <span class="kw">UNION ALL</span> <span class="kw">SELECT</span> n + 1 <span class="kw">FROM</span> nums <span class="kw">WHERE</span> n &lt; 20
)
<span class="kw">SELECT</span> t.task_id, n.n <span class="kw">AS</span> subtask_id
<span class="kw">FROM</span> Tasks t
<span class="kw">JOIN</span> nums n <span class="kw">ON</span> n.n &lt;= t.subtasks_count
<span class="kw">WHERE</span> (t.task_id, n.n) <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> task_id, subtask_id <span class="kw">FROM</span> Executed)
<span class="kw">ORDER BY</span> t.task_id, subtask_id;`,
    postgresql:`<span class="kw">WITH</span> <span class="kw">RECURSIVE</span> nums <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 1 <span class="kw">AS</span> n
    <span class="kw">UNION ALL</span> <span class="kw">SELECT</span> n + 1 <span class="kw">FROM</span> nums <span class="kw">WHERE</span> n &lt; 20
)
<span class="kw">SELECT</span> t.task_id, n.n <span class="kw">AS</span> subtask_id
<span class="kw">FROM</span> Tasks t
<span class="kw">JOIN</span> nums n <span class="kw">ON</span> n.n &lt;= t.subtasks_count
<span class="kw">WHERE</span> <span class="kw">NOT EXISTS</span> (
    <span class="kw">SELECT</span> 1 <span class="kw">FROM</span> Executed e
    <span class="kw">WHERE</span> e.task_id = t.task_id <span class="kw">AND</span> e.subtask_id = n.n
)
<span class="kw">ORDER BY</span> t.task_id, subtask_id;`,
    sqlserver:`<span class="kw">WITH</span> nums <span class="kw">AS</span> (
    <span class="kw">SELECT</span> 1 <span class="kw">AS</span> n
    <span class="kw">UNION ALL</span> <span class="kw">SELECT</span> n + 1 <span class="kw">FROM</span> nums <span class="kw">WHERE</span> n &lt; 20
)
<span class="kw">SELECT</span> t.task_id, n.n <span class="kw">AS</span> subtask_id
<span class="kw">FROM</span> Tasks t
<span class="kw">JOIN</span> nums n <span class="kw">ON</span> n.n &lt;= t.subtasks_count
<span class="kw">WHERE</span> <span class="kw">NOT EXISTS</span> (
    <span class="kw">SELECT</span> 1 <span class="kw">FROM</span> Executed e
    <span class="kw">WHERE</span> e.task_id = t.task_id <span class="kw">AND</span> e.subtask_id = n.n
)
<span class="kw">ORDER BY</span> t.task_id, subtask_id;`,
    oracle:`<span class="cm">-- Oracle: generate numbers with CONNECT BY</span>
<span class="kw">WITH</span> nums <span class="kw">AS</span> (
    <span class="kw">SELECT</span> LEVEL <span class="kw">AS</span> n <span class="kw">FROM</span> DUAL <span class="kw">CONNECT BY</span> LEVEL &lt;= 20
)
<span class="kw">SELECT</span> t.task_id, n.n <span class="kw">AS</span> subtask_id
<span class="kw">FROM</span> Tasks t
<span class="kw">JOIN</span> nums n <span class="kw">ON</span> n.n &lt;= t.subtasks_count
<span class="kw">WHERE</span> <span class="kw">NOT EXISTS</span> (
    <span class="kw">SELECT</span> 1 <span class="kw">FROM</span> Executed e
    <span class="kw">WHERE</span> e.task_id = t.task_id <span class="kw">AND</span> e.subtask_id = n.n
)
<span class="kw">ORDER BY</span> t.task_id, subtask_id;`
  },
  {
    id:1932, title:"Grand Slam Titles",
    difficulty:"medium", tags:["CTE", "JOIN", "GROUP BY"],
    description:`<p>Table: <code>Players</code></p>

<pre>
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| player_id      | int     |
| player_name    | varchar |
+----------------+---------+
player_id is the primary key (column with unique values) for this table.
Each row in this table contains the name and the ID of a tennis player.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Championships</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| year          | int     |
| Wimbledon     | int     |
| Fr_open       | int     |
| US_open       | int     |
| Au_open       | int     |
+---------------+---------+
year is the primary key (column with unique values) for this table.
Each row of this table contains the IDs of the players who won one each tennis tournament of the grand slam.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the number of grand slam tournaments won by each player. Do not include the players who did not win any tournament.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Players table:
+-----------+-------------+
| player_id | player_name |
+-----------+-------------+
| 1         | Nadal       |
| 2         | Federer     |
| 3         | Novak       |
+-----------+-------------+
Championships table:
+------+-----------+---------+---------+---------+
| year | Wimbledon | Fr_open | US_open | Au_open |
+------+-----------+---------+---------+---------+
| 2018 | 1         | 1       | 1       | 1       |
| 2019 | 1         | 1       | 2       | 2       |
| 2020 | 2         | 1       | 2       | 2       |
+------+-----------+---------+---------+---------+
<strong>Output:</strong> 
+-----------+-------------+-------------------+
| player_id | player_name | grand_slams_count |
+-----------+-------------+-------------------+
| 2         | Federer     | 5                 |
| 1         | Nadal       | 7                 |
+-----------+-------------+-------------------+
<strong>Explanation:</strong> 
Player 1 (Nadal) won 7 titles: Wimbledon (2018, 2019), Fr_open (2018, 2019, 2020), US_open (2018), and Au_open (2018).
Player 2 (Federer) won 5 titles: Wimbledon (2020), US_open (2019, 2020), and Au_open (2019, 2020).
Player 3 (Novak) did not win anything, we did not include them in the result table.
</pre>`,
    mysql:`<span class="kw">WITH</span> all_wins <span class="kw">AS</span> (
    <span class="kw">SELECT</span> Wimbledon <span class="kw">AS</span> player_id <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Fr_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> US_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Au_open                <span class="kw">FROM</span> Championships
)
<span class="kw">SELECT</span> w.player_id, p.player_name, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> grand_slams_count
<span class="kw">FROM</span> all_wins w
<span class="kw">JOIN</span> Players p <span class="kw">ON</span> w.player_id = p.player_id
<span class="kw">GROUP BY</span> w.player_id, p.player_name;`,
    postgresql:`<span class="kw">WITH</span> all_wins <span class="kw">AS</span> (
    <span class="kw">SELECT</span> Wimbledon <span class="kw">AS</span> player_id <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Fr_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> US_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Au_open                <span class="kw">FROM</span> Championships
)
<span class="kw">SELECT</span> w.player_id, p.player_name, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> grand_slams_count
<span class="kw">FROM</span> all_wins w
<span class="kw">JOIN</span> Players p <span class="kw">ON</span> w.player_id = p.player_id
<span class="kw">GROUP BY</span> w.player_id, p.player_name;`,
    sqlserver:`<span class="kw">WITH</span> all_wins <span class="kw">AS</span> (
    <span class="kw">SELECT</span> Wimbledon <span class="kw">AS</span> player_id <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Fr_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> US_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Au_open                <span class="kw">FROM</span> Championships
)
<span class="kw">SELECT</span> w.player_id, p.player_name, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> grand_slams_count
<span class="kw">FROM</span> all_wins w
<span class="kw">JOIN</span> Players p <span class="kw">ON</span> w.player_id = p.player_id
<span class="kw">GROUP BY</span> w.player_id, p.player_name;`,
    oracle:`<span class="kw">WITH</span> all_wins <span class="kw">AS</span> (
    <span class="kw">SELECT</span> Wimbledon <span class="kw">AS</span> player_id <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Fr_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> US_open                <span class="kw">FROM</span> Championships <span class="kw">UNION ALL</span>
    <span class="kw">SELECT</span> Au_open                <span class="kw">FROM</span> Championships
)
<span class="kw">SELECT</span> w.player_id, p.player_name, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> grand_slams_count
<span class="kw">FROM</span> all_wins w
<span class="kw">JOIN</span> Players p <span class="kw">ON</span> w.player_id = p.player_id
<span class="kw">GROUP BY</span> w.player_id, p.player_name;`
  },
  {
    id:1948, title:"Rearrange Products Table",
    difficulty:"easy", tags:["CTE", "UNION", "CASE WHEN"],
    description:`<p>Table: <code>Products</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| store1      | int     |
| store2      | int     |
| store3      | int     |
+-------------+---------+
product_id is the primary key (column with unique values) for this table.
Each row in this table indicates the product&#39;s price in 3 different stores: store1, store2, and store3.
If the product is not available in a store, the price will be null in that store&#39;s column.
</pre>

<p>&nbsp;</p>

<p>Write a solution to rearrange the <code>Products</code> table so that each row has <code>(product_id, store, price)</code>. If a product is not available in a store, do <strong>not</strong> include a row with that <code>product_id</code> and <code>store</code> combination in the result table.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Products table:
+------------+--------+--------+--------+
| product_id | store1 | store2 | store3 |
+------------+--------+--------+--------+
| 0          | 95     | 100    | 105    |
| 1          | 70     | null   | 80     |
+------------+--------+--------+--------+
<strong>Output:</strong> 
+------------+--------+-------+
| product_id | store  | price |
+------------+--------+-------+
| 0          | store1 | 95    |
| 0          | store2 | 100   |
| 0          | store3 | 105   |
| 1          | store1 | 70    |
| 1          | store3 | 80    |
+------------+--------+-------+
<strong>Explanation:</strong> 
Product 0 is available in all three stores with prices 95, 100, and 105 respectively.
Product 1 is available in store1 with price 70 and store3 with price 80. The product is not available in store2.
</pre>`,
    mysql:`<span class="kw">SELECT</span> product_id, 'store1' <span class="kw">AS</span> store, store1 <span class="kw">AS</span> price <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store1 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store2',          store2           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store2 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store3',          store3           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store3 <span class="kw">IS NOT NULL</span>;`,
    postgresql:`<span class="kw">SELECT</span> product_id, 'store1' <span class="kw">AS</span> store, store1 <span class="kw">AS</span> price <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store1 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store2',          store2           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store2 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store3',          store3           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store3 <span class="kw">IS NOT NULL</span>;`,
    sqlserver:`<span class="kw">SELECT</span> product_id, 'store1' <span class="kw">AS</span> store, store1 <span class="kw">AS</span> price <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store1 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store2',          store2           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store2 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store3',          store3           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store3 <span class="kw">IS NOT NULL</span>;`,
    oracle:`<span class="kw">SELECT</span> product_id, 'store1' <span class="kw">AS</span> store, store1 <span class="kw">AS</span> price <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store1 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store2',          store2           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store2 <span class="kw">IS NOT NULL</span> <span class="kw">UNION ALL</span>
<span class="kw">SELECT</span> product_id, 'store3',          store3           <span class="kw">FROM</span> Products <span class="kw">WHERE</span> store3 <span class="kw">IS NOT NULL</span>;`
  },
  {
    id:1974, title:"Find Customers With Positive Revenue this Year",
    difficulty:"easy", tags:["SELECT"],
    description:`<p>Table: <code>Customers</code></p>

<pre>
+--------------+------+
| Column Name  | Type |
+--------------+------+
| customer_id  | int  |
| year         | int  |
| revenue      | int  |
+--------------+------+
(customer_id, year) is the primary key (combination of columns with unique values) for this table.
This table contains the customer ID and the revenue of customers in different years.
Note that this revenue can be negative.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the customers with <strong>postive revenue</strong> in the year 2021.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Customers table:
+-------------+------+---------+
| customer_id | year | revenue |
+-------------+------+---------+
| 1           | 2018 | 50      |
| 1           | 2021 | 30      |
| 1           | 2020 | 70      |
| 2           | 2021 | -50     |
| 3           | 2018 | 10      |
| 3           | 2016 | 50      |
| 4           | 2021 | 20      |
+-------------+------+---------+
<strong>Output:</strong> 
+-------------+
| customer_id |
+-------------+
| 1           |
| 4           |
+-------------+
<strong>Explanation:</strong> 
Customer 1 has revenue equal to 30 in the year 2021.
Customer 2 has revenue equal to -50 in the year 2021.
Customer 3 has no revenue in the year 2021.
Customer 4 has revenue equal to 20 in the year 2021.
Thus only customers 1 and 4 have positive revenue in the year 2021.
</pre>`,
    mysql:`<span class="kw">SELECT</span> customer_id
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> year = 2021 <span class="kw">AND</span> revenue &gt; 0;`,
    postgresql:`<span class="kw">SELECT</span> customer_id
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> year = 2021 <span class="kw">AND</span> revenue &gt; 0;`,
    sqlserver:`<span class="kw">SELECT</span> customer_id
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> year = 2021 <span class="kw">AND</span> revenue &gt; 0;`,
    oracle:`<span class="kw">SELECT</span> customer_id
<span class="kw">FROM</span> Customers
<span class="kw">WHERE</span> year = 2021 <span class="kw">AND</span> revenue &gt; 0;`
  },
  {
    id:1981, title:"Maximum Transaction Each Day",
    difficulty:"medium", tags:["RANK", "CTE"],
    description:`<p>Table: <code>Transactions</code></p>

<pre>
+----------------+----------+
| Column Name    | Type     |
+----------------+----------+
| transaction_id | int      |
| day            | datetime |
| amount         | int      |
+----------------+----------+
transaction_id is the column with unique values for this table.
Each row contains information about one transaction.
</pre>

<p>&nbsp;</p>

<p>Write a solution&nbsp;to report the IDs of the transactions with the <strong>maximum</strong> <code>amount</code> on their respective day. If in one day there are multiple such transactions, return all of them.</p>

<p>Return the result table <strong>ordered by</strong> <code>transaction_id</code> <strong> in ascending order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Transactions table:
+----------------+--------------------+--------+
| transaction_id | day                | amount |
+----------------+--------------------+--------+
| 8              | 2021-4-3 15:57:28  | 57     |
| 9              | 2021-4-28 08:47:25 | 21     |
| 1              | 2021-4-29 13:28:30 | 58     |
| 5              | 2021-4-28 16:39:59 | 40     |
| 6              | 2021-4-29 23:39:28 | 58     |
+----------------+--------------------+--------+
<strong>Output:</strong> 
+----------------+
| transaction_id |
+----------------+
| 1              |
| 5              |
| 6              |
| 8              |
+----------------+
<strong>Explanation:</strong> 
&quot;2021-4-3&quot;  --&gt; We have one transaction with ID 8, so we add 8 to the result table.
&quot;2021-4-28&quot; --&gt; We have two transactions with IDs 5 and 9. The transaction with ID 5 has an amount of 40, while the transaction with ID 9 has an amount of 21. We only include the transaction with ID 5 as it has the maximum amount this day.
&quot;2021-4-29&quot; --&gt; We have two transactions with IDs 1 and 6. Both transactions have the same amount of 58, so we include both in the result table.
We order the result table by transaction_id after collecting these IDs.
</pre>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you solve it without using the <code>MAX()</code> function?</p>`,
    mysql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> transaction_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> DATE(day) <span class="kw">ORDER BY</span> amount <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Transactions
)
<span class="kw">SELECT</span> transaction_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> transaction_id;`,
    postgresql:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> transaction_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> day::date <span class="kw">ORDER BY</span> amount <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Transactions
)
<span class="kw">SELECT</span> transaction_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> transaction_id;`,
    sqlserver:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> transaction_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> <span class="fn">CAST</span>(day <span class="kw">AS</span> DATE) <span class="kw">ORDER BY</span> amount <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Transactions
)
<span class="kw">SELECT</span> transaction_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> transaction_id;`,
    oracle:`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
    <span class="kw">SELECT</span> transaction_id,
           <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> <span class="fn">TRUNC</span>(day) <span class="kw">ORDER BY</span> amount <span class="kw">DESC</span>) <span class="kw">AS</span> rn
    <span class="kw">FROM</span> Transactions
)
<span class="kw">SELECT</span> transaction_id
<span class="kw">FROM</span> ranked
<span class="kw">WHERE</span> rn = 1
<span class="kw">ORDER BY</span> transaction_id;`
  },
  {
    id:2024, title:"Calculate Special Bonus",
    difficulty:"easy", tags:["CASE WHEN"],
    description:`<p>Table: <code>Employees</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
| salary      | int     |
+-------------+---------+
employee_id is the primary key (column with unique values) for this table.
Each row of this table indicates the employee ID, employee name, and salary.
</pre>

<p>&nbsp;</p>

<p>Write a solution to calculate the bonus of each employee. The bonus of an employee is <code>100%</code> of their salary if the ID of the employee is <strong>an odd number</strong> and <strong>the employee&#39;s name does not start with the character </strong><code>&#39;M&#39;</code>. The bonus of an employee is <code>0</code> otherwise.</p>

<p>Return the result table ordered by <code>employee_id</code>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Employees table:
+-------------+---------+--------+
| employee_id | name    | salary |
+-------------+---------+--------+
| 2           | Meir    | 3000   |
| 3           | Michael | 3800   |
| 7           | Addilyn | 7400   |
| 8           | Juan    | 6100   |
| 9           | Kannon  | 7700   |
+-------------+---------+--------+
<strong>Output:</strong> 
+-------------+-------+
| employee_id | bonus |
+-------------+-------+
| 2           | 0     |
| 3           | 0     |
| 7           | 7400  |
| 8           | 0     |
| 9           | 7700  |
+-------------+-------+
<strong>Explanation:</strong> 
The employees with IDs 2 and 8 get 0 bonus because they have an even employee_id.
The employee with ID 3 gets 0 bonus because their name starts with &#39;M&#39;.
The rest of the employees get a 100% bonus.
</pre>`,
    mysql:`<span class="kw">SELECT</span> employee_id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> employee_id % 2 &lt;&gt; 0 <span class="kw">AND</span> name <span class="kw">NOT</span> <span class="kw">LIKE</span> 'M%' <span class="kw">THEN</span> salary
        <span class="kw">ELSE</span> 0
    <span class="kw">END</span> <span class="kw">AS</span> bonus
<span class="kw">FROM</span> Employees
<span class="kw">ORDER BY</span> employee_id;`,
    postgresql:`<span class="kw">SELECT</span> employee_id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> employee_id % 2 &lt;&gt; 0 <span class="kw">AND</span> name <span class="kw">NOT</span> <span class="kw">LIKE</span> 'M%' <span class="kw">THEN</span> salary
        <span class="kw">ELSE</span> 0
    <span class="kw">END</span> <span class="kw">AS</span> bonus
<span class="kw">FROM</span> Employees
<span class="kw">ORDER BY</span> employee_id;`,
    sqlserver:`<span class="kw">SELECT</span> employee_id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> employee_id % 2 &lt;&gt; 0 <span class="kw">AND</span> name <span class="kw">NOT</span> <span class="kw">LIKE</span> 'M%' <span class="kw">THEN</span> salary
        <span class="kw">ELSE</span> 0
    <span class="kw">END</span> <span class="kw">AS</span> bonus
<span class="kw">FROM</span> Employees
<span class="kw">ORDER BY</span> employee_id;`,
    oracle:`<span class="kw">SELECT</span> employee_id,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> <span class="fn">MOD</span>(employee_id, 2) &lt;&gt; 0 <span class="kw">AND</span> name <span class="kw">NOT</span> <span class="kw">LIKE</span> 'M%' <span class="kw">THEN</span> salary
        <span class="kw">ELSE</span> 0
    <span class="kw">END</span> <span class="kw">AS</span> bonus
<span class="kw">FROM</span> Employees
<span class="kw">ORDER BY</span> employee_id;`
  },
  {
    id:2041, title:"The Latest Login in 2020",
    difficulty:"easy", tags:["RANK", "GROUP BY"],
    description:`<p>Table: <code>Logins</code></p>

<pre>
+----------------+----------+
| Column Name    | Type     |
+----------------+----------+
| user_id        | int      |
| time_stamp     | datetime |
+----------------+----------+
(user_id, time_stamp) is the primary key (combination of columns with unique values) for this table.
Each row contains information about the login time for the user with ID user_id.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the <strong>latest</strong> login for all users in the year <code>2020</code>. Do <strong>not</strong> include the users who did not login in <code>2020</code>.</p>

<p>Return the result table <strong>in any order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Logins table:
+---------+---------------------+
| user_id | time_stamp          |
+---------+---------------------+
| 6       | 2020-06-30 15:06:07 |
| 6       | 2021-04-21 14:06:06 |
| 6       | 2019-03-07 00:18:15 |
| 8       | 2020-02-01 05:10:53 |
| 8       | 2020-12-30 00:46:50 |
| 2       | 2020-01-16 02:49:50 |
| 2       | 2019-08-25 07:59:08 |
| 14      | 2019-07-14 09:00:00 |
| 14      | 2021-01-06 11:59:59 |
+---------+---------------------+
<strong>Output:</strong> 
+---------+---------------------+
| user_id | last_stamp          |
+---------+---------------------+
| 6       | 2020-06-30 15:06:07 |
| 8       | 2020-12-30 00:46:50 |
| 2       | 2020-01-16 02:49:50 |
+---------+---------------------+
<strong>Explanation:</strong> 
User 6 logged into their account 3 times but only once in 2020, so we include this login in the result table.
User 8 logged into their account 2 times in 2020, once in February and once in December. We include only the latest one (December) in the result table.
User 2 logged into their account 2 times but only once in 2020, so we include this login in the result table.
User 14 did not login in 2020, so we do not include them in the result table.
</pre>`,
    mysql:`<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(time_stamp) <span class="kw">AS</span> last_stamp
<span class="kw">FROM</span> Logins
<span class="kw">WHERE</span> <span class="fn">YEAR</span>(time_stamp) = 2020
<span class="kw">GROUP BY</span> user_id;`,
    postgresql:`<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(time_stamp) <span class="kw">AS</span> last_stamp
<span class="kw">FROM</span> Logins
<span class="kw">WHERE</span> <span class="fn">EXTRACT</span>(YEAR <span class="kw">FROM</span> time_stamp) = 2020
<span class="kw">GROUP BY</span> user_id;`,
    sqlserver:`<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(time_stamp) <span class="kw">AS</span> last_stamp
<span class="kw">FROM</span> Logins
<span class="kw">WHERE</span> <span class="fn">YEAR</span>(time_stamp) = 2020
<span class="kw">GROUP BY</span> user_id;`,
    oracle:`<span class="kw">SELECT</span> user_id, <span class="fn">MAX</span>(time_stamp) <span class="kw">AS</span> last_stamp
<span class="kw">FROM</span> Logins
<span class="kw">WHERE</span> <span class="fn">EXTRACT</span>(YEAR <span class="kw">FROM</span> time_stamp) = 2020
<span class="kw">GROUP BY</span> user_id;`
  },
  {
    id:2110, title:"Employees With Missing Information",
    difficulty:"easy", tags:["CTE", "LEFT JOIN", "UNION"],
    description:`<p>Table: <code>Employees</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
+-------------+---------+
employee_id is the column with unique values for this table.
Each row of this table indicates the name of the employee whose ID is employee_id.
</pre>

<p>&nbsp;</p>

<p>Table: <code>Salaries</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| salary      | int     |
+-------------+---------+
employee_id is the column with unique values for this table.
Each row of this table indicates the salary of the employee whose ID is employee_id.
</pre>

<p>&nbsp;</p>

<p>Write a solution to report the IDs of all the employees with <strong>missing information</strong>. The information of an employee is missing if:</p>

<ul>
	<li>The employee&#39;s <strong>name</strong> is missing, or</li>
	<li>The employee&#39;s <strong>salary</strong> is missing.</li>
</ul>

<p>Return the result table ordered by <code>employee_id</code> <strong>in ascending order</strong>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Employees table:
+-------------+----------+
| employee_id | name     |
+-------------+----------+
| 2           | Crew     |
| 4           | Haven    |
| 5           | Kristian |
+-------------+----------+
Salaries table:
+-------------+--------+
| employee_id | salary |
+-------------+--------+
| 5           | 76071  |
| 1           | 22517  |
| 4           | 63539  |
+-------------+--------+
<strong>Output:</strong> 
+-------------+
| employee_id |
+-------------+
| 1           |
| 2           |
+-------------+
<strong>Explanation:</strong> 
Employees 1, 2, 4, and 5 are working at this company.
The name of employee 1 is missing.
The salary of employee 2 is missing.
</pre>`,
    mysql:`<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries)
<span class="kw">UNION</span>
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees)
<span class="kw">ORDER BY</span> employee_id;`,
    postgresql:`<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries)
<span class="kw">UNION</span>
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees)
<span class="kw">ORDER BY</span> employee_id;`,
    sqlserver:`<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries)
<span class="kw">UNION</span>
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees)
<span class="kw">ORDER BY</span> employee_id;`,
    oracle:`<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries)
<span class="kw">UNION</span>
<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Salaries
<span class="kw">WHERE</span> employee_id <span class="kw">NOT IN</span> (<span class="kw">SELECT</span> employee_id <span class="kw">FROM</span> Employees)
<span class="kw">ORDER BY</span> employee_id;`
  }
];

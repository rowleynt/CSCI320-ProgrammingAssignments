--Nathan Rowley
--CSCI320 HW4
--9 February 2023

--Q 1A
piece' x | x < -1 = (2 * x) + 1
		 | (-1 <= x && x <= 3) = -2
		 | x > 3 = (-3 * x) + 7

--Q 1B
exp' x 0 = 1
exp' x y = x * exp' x (y- 1)

--Q 2
f' x' = [x^2 | x <- x']

g' [] = 0
g' (x:xs) = x + g' xs

comp' = (g' . f')

--Q 3a
count _ [] = []
count fn (x:xs)
    | fn x = x : count fn xs
    | otherwise = count fn xs

--Q 3b
count'filter fn xs = length (filter (fn) xs)

--Q 3c
count'lc fn xs = length [x | x <- xs, fn x]

--Q 4
closure = count (\x -> x > 10)

--Q 5a
powers' x = [x ^ y | y <- [1..]]

--Q 5b
count' fn (x:xs)
    | fn x = x : y'
    | otherwise = y'
   where y' = count fn xs

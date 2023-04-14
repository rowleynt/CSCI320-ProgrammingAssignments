quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
  let leftPart = quicksort [a | a <- xs, a <= x]
      rightPart = quicksort [a | a <- xs, a > x]
  in  leftPart ++ [x] ++ rightPart

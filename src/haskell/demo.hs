import Data.Typeable
main :: IO()

magicBox :: Int -> Int
magicBox x = x + 1


main = do 
  let y = 300 :: Int
  let yType = typeOf y
  let result = let x = 200 in x * x * x 
  print yType
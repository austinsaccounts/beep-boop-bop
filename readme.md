Create a web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
Numbers that contain a 0 are replaced (all digits) with "Beep!"
Numbers that contain a 1 are replaced (all digits) with "Boop!"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

Also a user should be able to enter a new number and see new results over and over again.

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.

specifications:
user can input a number
input 5
output 5

input number will return a count up to that numbers
input = 5
output = 1 2 3 4 5

the number 1 will be replaced with "BOOP" and 0 will be replaced with "BEEP"  in all outputs it occurs in
input = 22
output = "BOOP" 2 3 4 5 6 7 8 9 "BOOP" "BOOP" "BOOP" "BOOP" "BOOP" "BOOP" "BOOP" "BOOP" "BOOP" "BOOP" "BEEP"

Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that." in all occuring outputs
input 3
output = "BOOP" 2 "I'm sorry, Dave. I'm afraid I can't do that."

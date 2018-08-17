KNOWN BUGS
somehting about gem and ruby files are listed as vulnerabilities accourding to github in regards to bootstrap
https://github.com/austinsaccounts/beep-boop-bop/network/dependencies#css%252Fbootstrap.css%252Fgitsheres%252Fblog%252FGemfile.lock









Create a web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
Numbers that contain a 0 are replaced (all digits) with "Beep!"
Numbers that contain a 1 are replaced (all digits) with "Boop!"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

Also a user should be able to enter a new number and see new results over and over again.

Break the program down into simple, individual behaviors with input/output examples. Begin with the simplest possible behavior. List these behaviors (also known as "specs" or "specifications") in the project's README.md file.






specifications:
input number will return a count up to that number with the following exceptions the number 1 will be replaced with "BOOP" and 0 will be replaced with "BEEP"  and numbers divisible by 3 willbe replaced with"I'm sorry, Dave. I'm afraid I can't do that." in all outputs it occurs in, weighed in reverse order
  *_input = 13_*
  *_output =
I'm sorry, Dave. I'm afraid I can't do that.
boop
2
I'm sorry, Dave. I'm afraid I can't do that.
4
5
I'm sorry, Dave. I'm afraid I can't do that.
7
8
I'm sorry, Dave. I'm afraid I can't do that.
beep
boop
I'm sorry, Dave. I'm afraid I can't do that.
boop
-Goodbye-
_*

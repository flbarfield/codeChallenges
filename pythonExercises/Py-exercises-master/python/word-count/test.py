#### HOW MAKETRANS AND TRANSLATE WORKS NOW ####

import string 
s = "string. With. Punctuation?" 
out = s.translate(str.maketrans("", "", string.punctuation))  

print(out)
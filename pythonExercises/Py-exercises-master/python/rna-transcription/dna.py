
def to_rna(DNA):
	""" 
	First, creates a dictionary with the base
	letters as the key and their values as 
	what I'd like those keys to translate to.

	Then..
	For the charcter in DNA, if the Character is in a key of
	the translation Dictionary..., it calls the value of the key
	and joins the values together into one sentence

	DICTS seem to be the easiest way to assign values to known 
	characters. Duh.

	"""
	trans = {'G':'C', 'C':'G', 'T':'A', 'A':'U'}
	#return(''.join(trans[s] for s in DNA if s in trans.keys())) 

	#### This is 2nd way, seemingly easier to understand ###
	# But even more confused on how to break it down into
	# something meaningful in pure english
	print(''.join(trans[s] if s in trans else s for s in DNA))

# trans[s]
# if s in trans:
# 	else:
# 		s for s in DNA ??

to_rna('ACGTGGTCTTAA')

### mandel01's solution:
# def to_rna(sequence):
#     transcribe = {'G':'C','A':'U','T':'A','C':'G'}  # DNA:RNA
#     return ''.join(transcribe[n] for n in sequence)


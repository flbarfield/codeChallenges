from datetime import datetime, timedelta

def add_gigasecond(in_datetime):
	return in_datetime + timedelta(seconds=10**9)

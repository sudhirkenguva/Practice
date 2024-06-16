# If you run a 10 kilometer race in 42 minutes 42 seconds, what is your average
# pace (time per mile in minutes and seconds)? What is your average speed in
# miles per hour?

time_taken_in_secs = 42*60 + 42 
distance_convered_in_kms = 10 
distance_convered_in_miles = (1/1.61) * distance_convered_in_kms
average_pace_secs = time_taken_in_secs / distance_convered_in_miles
print("Average pace average_pace_secs)
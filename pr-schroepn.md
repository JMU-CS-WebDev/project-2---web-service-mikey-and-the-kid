# Were you able to reach their endpoint on the web?
### I was able to clone their code and connect to my own endpoint.
## can you successfully make requests and receive responses from all of their endpoints?
### yes, all of the endpoints worked.
# What did you like about this service?
### I like how easy it is to use.
# What do you think about the paths that have been chosen?
## are they consistent? is there any possible point of confusion?
### I was not confused by any of the paths, though in report.html there are conflicting DELETE paths, and you should also specify when something is a parameter by using : before it (i.e. /remove/:id)
# What do you like about the structure of the responses from the different endpoints?
### I like how the responses tell you if it worked
# Describe one significant difference between your own P2 seervice and this person's. E.g.
## Which might be easier to build a front end for (and why)?
### This one, because this only has 1 table wheras mine has two
## Which codebase do you think would be more maintainable (and why)?
### this one for the same reason as above
# Is the code well-structured?
### yes
## if not, suggest some specific improvements
### there are a couple of indents that don't make sense, they are part of this pull request
# Did you find any other issues? If so, briefly enumerate them.
### the insert expects a personid but thats not necessary, because sql will make an id.
# Do you have any other constructive comments for the author?
## might they want to consider adding any endpoint(s) to better facilitate a particular front end feature you're imagining?
### maybe add a way to look at a person by their name so '/person/:name' endpoint
## might they be able to include more or less of the data in the response to an endpoint and better support the front end?
### you could maybe return the all the new data for a person when you update them, so someone can look back and make sure they inputted correctly.
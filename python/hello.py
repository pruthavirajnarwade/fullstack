# print("pruthaviraj");

# print("hello world");

# name="pruthaviraj ram narwade"

# print(2**5)
  

# age=10
# "tea" == "tea"
# print(age>=18  or "tea" == "tea")

# input example outcome come in omly string
# name = input("Entre your name: ")
# print(name)

#is-else example
# age=20
# if age>18:print("alligibal for voting")
# else:print("not elligibal")



# name_pruthaviraj_=True
# if name_pruthaviraj_:print("real name of student")
# else:print("not real name")




# elif multiple examole
# marks=75
# if marks>=90:print("grade A")
# elif marks>=75:print("grade B")
# elif marks>=60:print("grade c")
# else:print("grade e")

# "pruthaviraj==pruthaviraj"
# if False:print("the name is euals to each other")
# else  : print ("the name is not equal to each other")


# nasted if example
#  



# def check(num):

#     if num % 2 == 0:
#         return "Even"r

#     return "Odd"

# print(check(5))

# nums = 1,2,2,4
# print(nums)


# dictonary
  

# student = {
#     "name": "Aman",
#     "age": 20
# }

# student["city"]="Latur"

# print(student)
      
# student = {

#    "name": "Aman",

#    "age": 20
# }

# student.keys()

# print(student)

# name = "Aman"
# age = 20

# print ("My name is " + name,  age)


# def square(x):
#    return x*x 
# print(square(5)) 

# file = open("data.txt", "r")

# print(file.read())

# f = open("data.txt", "w")
# f.write("Hello")
# f.close() 

# f = open("student.txt", "a")

# f.write("\nAmit")

# f.close()

# f = open("student.txt", "r")
# print(f.readline())
# f.close()

name = input("Enter name: ")

with open("student.txt", "a") as f:
    f.write(name + "\n") 


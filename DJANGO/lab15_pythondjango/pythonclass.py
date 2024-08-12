"""
Chris Agianian
Aug 8, Python Classes
"""
print("----Example 1: class definition----")
class MyClass:
    x = 5

#calling the class MyClass
myclass1 = MyClass()
print("the complete class ", myclass1)
print("Property of MyClass ", myclass1.x)

print("----Example 2:initialize a class----")
class Person:
    #initialize class properties values
    def __init__(self,name,age):
        self.name = name
        self.age = age
        #set class property
        self.luckynumber = 88
    
    #return string
    def __str__(self):
        return f"User {self.name} is {self.age} years-old"
    
    #method
    def mymethod(self):
        print(f"{self.name} lucky number is {self.luckynumber}")

#calling class, creation of object Person
user1 = Person("Ann", 23)

#print(f"User {user1.name} is {user1.age} years-old")
print(f"Result --> {user1}")
user1.mymethod()
print(f"Class property --> {user1.luckynumber}")

#modify class propetry's value
user1.age = 31
print(f"Result --> {user1}")

#empty class
class Schedule:
    pass

print("\n----Example 3: class with adjustable methods----")
class Number:
    def __init__(self, num):
        self.num = num
    
    #accessible property
    num_symbol = '$'

    #define a method to double the number
    def doublenumber(self):
        self.num = self.num * 2
    
    #return the string of the class

    def __str__(self):
        return f"The final number is {self.num_symbol}{self.num}"

#create an object of class Number
n1 = Number(12)
#print the object of class Number
print(f"Object of class Number --> {n1}")
#call method doublenumber()
n1.doublenumber()
#print the object of class Number
print(f"Object of class Number --> {n1}")
#calling the method again doubles the number 24
n1.doublenumber()
#print the object of class Number
print(f"Object of class Number --> {n1}")

print("\n----Example 4: class with private property----")
class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.totaldimension = 0
        self.shippingcostfee = 0.2
        self.totalshipping = 0
        self.totalshippingcost = 0

    #accessible 'private' property
    _chair_color = 'brown'

    #method to calculate the total dimension
    def total_dimension(self):
        return self.height * self.length * self.width

    #method to calculate the total shipping cost
    def total_shipping(self):
        self.totalshippingcost = self.shippingcostfee * self.totaldimension

    #return string of the class
    def __str__(self):
        return f"The total dimension for the {self._chair_color} chair is {self.total_dimension()}"

#create an object of the chair class
chair1 = Chair(3,4,5)
#print the object
print(f"Result for {chair1._chair_color} chair --> {chair1}")



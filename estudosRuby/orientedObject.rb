class Employee
	attr_accessor :name, :vacations, :code

	def initialize(name, code)
		@name = name
		@code = code
		@vacations = false
	end

	def listEmployee
		puts "Name: #{name}"
		puts "Code: #{code}"
		puts "Vacations: #{vacations}"
	end

end

class Pupil
	def initialize(name, phone, age=18)
		@name = name
		@phone = phone
		@age = age
	end

	#If we want to declarete methods of read and write, just do it:
	attr_accessor :name, :phone, :age


end

class Team
	attr_accessor :name, :pupils

	def initialize
		@pupils = []
	end

	#Puting a new pupil in array pupils
	def addPupils(pupil)
		pupils << pupil
	end

	#Show the amount of pupils of array 
	def listPupils
		puts "We have #{pupils.length} pupils"  
		puts "#{pupils}"
	end 

	#Protecting the method of write pupils
	private
	attr_writer :pupils

end

#Herance of Employee (Dad) for Teacher (Son)
class Teacher < Employee
	attr_reader :dateStartVacations, :dateFinishVacations
	attr_accessor :subject

	#We need to keep the initialize how he was 
	def initialize(name, code, subject)
		super(name, code)
		@subject = subject
		@dateStartVacations = false #Put the time of my PC in variable
		@dateFinishVacations = false
	end

	def startVacations()
		@vacations = true
		@dateFinishVacations = Time.now()
	end

	def finishVacations()
		@vacations = false
		@dateFinishVacations = Time.now()
	end

	def listTeachers
		puts "Name: #{name}"
		puts "Code: #{code}"
		puts "Vacations: #{vacations}"
		puts "Subject: #{subject}"
	end

end 


#Creating a new pupil
Arthur = Pupil.new("Arthur", "44273784", 20)
Diana = Pupil.new("Diana", "954660546", 20)

#Creating a new teacher
Murilo = Teacher.new("Murilo", 10, "Programming")

#Creating a new team
Mechatronic = Team.new()

#Create a new employee
Leila = Employee.new("Leila", 9)
Leila.listEmployee()
Murilo.listTeachers()

#Put a pupil in your team Mechatronic 
Mechatronic.addPupils(Arthur)
Mechatronic.addPupils(Diana)
Mechatronic.listPupils()

#We will have an error, because this action is private
#Mechatronic.pupils = []

#We can see the genetic tree
puts Teacher.ancestors

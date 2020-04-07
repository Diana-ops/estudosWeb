class HomeController < ApplicationController
	def welcome
		@tasks = Task.all
	end
end
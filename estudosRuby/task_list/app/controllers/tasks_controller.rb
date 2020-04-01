class TasksController < ApplicationController 

	def new
	end

	def create
		@task = Task.new(params.require(:task).permit(:descrition, :status))

		@task.save

		redirect_to root_path
	end

	def edit
		@task = Task.find(params[:id])
	end

	def update
		@task = Task.find(params[:id])
		@task.update(params.require(:task).permit(:descrition, :status))

		redirect_to root_path
	end

	def destroy 
		task = Task.find(params[:id])
		task.destroy
		redirect_to root_path
	end
end
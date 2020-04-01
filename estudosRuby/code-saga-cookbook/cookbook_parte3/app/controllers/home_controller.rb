class HomeController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def new
  	@recipes = Recipe.new
  end

  def create 
  	@recipes = Recipe.new(params.require(:recipe).permit(:title, :recipe_type, :cuisine, :difficulty, :cook_time, :ingredients, :cook_method))
  	@recipes.save
  	redirect_to @recipe
  end


  def detalhes 
  	@recipes = Recipe.find(params[:recipe_id])
  end

end

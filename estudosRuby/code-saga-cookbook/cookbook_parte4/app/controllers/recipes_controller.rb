class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def create
  	@recipes = Recipe.new(params.require(:recipe).permit(:title, :recipe_type, :cuisine, :difficulty, :cook_time, :ingredients, :cook_method))
 	  @recipes.save
    redirect_to @recipe
  end

  def new 
  	@recipe = Recipe.new
  end
end

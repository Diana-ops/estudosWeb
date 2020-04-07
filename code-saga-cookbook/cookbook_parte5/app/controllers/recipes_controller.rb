class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def new
    @recipe = Recipe.new
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def update 
    @recipe = Recipe.find(params[:id])

    if @recipe.update(recipe_params)
      redirect_to @recipe
    else
      :edit
    end
  end

  def create
    @recipe = Recipe.create(recipe_params)
    @recipe.save
    redirect_to @recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :recipe_type, :cuisine, :difficulty,
                                   :cook_time, :ingredients, :cook_method)
  end
end

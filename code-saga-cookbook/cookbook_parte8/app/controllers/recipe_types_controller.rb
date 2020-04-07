class RecipeTypesController < ApplicationController
  def show
    @recipe_types = RecipeType.find(params[:id])
  end

  def new
    @recipe_types = RecipeType.new
  end

  def create
    @recipe_types = RecipeType.new(recipe_type_params)
    if @recipe_types.save
      redirect_to @recipe_types
    else
      flash[:alert] = 'Você deve informar o nome do tipo de receita'
      render :new
    end
  end

  def recipe_type_params
    params.require(:recipe_type).permit(:name)
  end

end

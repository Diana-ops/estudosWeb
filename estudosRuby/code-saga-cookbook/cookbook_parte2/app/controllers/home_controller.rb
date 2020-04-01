class HomeController < ApplicationController
  def index
  end

  def recipe
	@recipe = Recipe.new(params.require(:recipe).permit(:title, :recipe_type, :cuisine, :difficulty, :cook_time))

	@recipe.save

	redirect_to root_path
  end
end

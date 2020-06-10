class Recipe
	#Read and Write
	attr_accessor :title, :description , :ingredients, :cook_time, :featured

	#Don't metter the order of arguments
	def initialize(title:, description:, ingredients:, cook_time:, featured:)
		@title = title
		@description = description
                @ingredients = ingredients
		@cook_time = cook_time
		@featured = featured 
	end 
        
        def self.from_json(file)
		response = File.open(file).read
                # Convert to JSON
                json_file =  JSON.parse(response)
		Recipe.new(title: json_file['title'],
                        description: json_file['description'],
                        ingredients: json_file['ingredients'],
                        cook_time: json_file['cook_time'],
                        featured: json_file['featured'])
        end
end

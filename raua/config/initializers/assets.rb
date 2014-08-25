# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
#Rails.application.config.assets.precompile += %w( .css .js )
#config.assets.paths << Rails.root.join("assets", "fonts")

#config.assets.precompile = [ /\A[^\/\\]+\.(ccs|js)$/i ]
#config.assets.paths << File.join(Rails.root, '/vector') 
#app.config.assets.precompile << /\.(?:|eot|woff|ttf)$/
   
# add fonts to the asset pipeline
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "fonts")
# add precompile file types for images
Rails.application.config.assets.precompile += %w[*.png *.jpg *.jpeg *.gif *.eot *.svg *.ttf *.woff *.css *.css.erb *.js] 

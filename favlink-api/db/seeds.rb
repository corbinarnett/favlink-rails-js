# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

List.create([{title: "Cocktails"}, {title: "Recipes"}, {title: "Javascript"}])

Website.create([{title: "How to Upgrade Your Spritz This Summer", link: "https://www.bonappetit.com/story/upgrade-your-spritz#intcid=recommendations_bon-appetit-riser-similar_9df2b699-0355-4fb2-a0d7-d3071c0c0f19_cral2-2", list_id: 1},
  {title: "Spaghetti with No-Cook Puttanesca", link: "https://www.bonappetit.com/recipe/spaghetti-with-no-cook-puttanesca", list_id: 2},
  {title: "Eloquent JavaScript", link: "https://eloquentjavascript.net/", list_id: 3}
  ])
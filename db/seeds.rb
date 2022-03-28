# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {
    "email": "Bob@hotmail.com",
    "password": "cats1"
  },
  {
    "email": "Jill@aol.com",
    "password": "dog1"
  }
])

Restaurant.create([
{
    "name": "Mission Chinese Food",
    "photograph": "1.jpg",
    "address": "171 E Broadway, New York, NY 10002"
  }, {
    "name": "Emily",
    "photograph": "2.jpg",
    "address": "919 Fulton St, Brooklyn, NY 11238"
  }, {
    "name": "Kang Ho Dong Baekjeong",
    "photograph": "3.jpg",
    "address": "1 E 32nd St, New York, NY 10016"
  }, {
    "name": "Katz's Delicatessen",
    "photograph": "4.jpg",
    "address": "205 E Houston St, New York, NY 10002"
  }, {
    "name": "Roberta's Pizza",
    "photograph": "5.jpg",
    "address": "261 Moore St, Brooklyn, NY 11206"
  }, {
    "name": "Hometown BBQ",
    "photograph": "6.jpg",
    "address": "454 Van Brunt St, Brooklyn, NY 11231"
   }, {
    "name": "Superiority Burger",
    "photograph": "7.jpg",
    "address": "430 E 9th St, New York, NY 10009"
  }, {
    "name": "The Dutch",
    "photograph": "8.jpg",
    "address": "131 Sullivan St, New York, NY 10012"
  }, {
    "name": "Mu Ramen",
    "photograph": "9.jpg",
    "address": "1209 Jackson Ave, Queens, NY 11101"
  }, {
    "name": "Casa Enrique",
    "photograph": "10.jpg",
    "address": "5-48 49th Ave, Queens, NY 11101"
  }
])

Review.create ([
    {
      "comment": "Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.",
      "restaurant_id": Restaurant.all.sample.id,
      "user_id": User.all.sample.id
    },
    {
      "comment": "This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!",
      "restaurant_id": Restaurant.all.sample.id,
      "user_id": User.all.sample.id
      },
    {
      "comment": "I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.",
      "restaurant_id": Restaurant.all.sample.id,
      "user_id": User.all.sample.id
    }
  ]
)


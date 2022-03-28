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
    "name": "Dynasty Chinese Food",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIU5rBQnvl-F5579XsHBhy1dF_O37MDhAfA&usqp=CAU",
    "address": "171 E Broadway, New York, NY 10002"
  }, {
    "name": "Noglu Restaurant & Epicerie",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZTuhz_BI-LXtzjoG5BDHONZW8uY5tX7Acw&usqp=CAU",
    "address": "919 Fulton St, Brooklyn, NY 11238"
  }, {
    "name": "Cafe Umbria",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0rWFOAzNbcZ0DhTDFkQpnhM6-1mDYW-U6w&usqp=CAU",
    "address": "1 E 32nd St, New York, NY 10016"
  }, {
    "name": "Central Cafe and Restaurant",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtJ3gPPaqiJ2q0DJtRrp2-EKWEbpXDIoSqdKLV4iY9HfCu1gLBspAFPFrsKeVamaCXig&usqp=CAU",
    "address": "205 E Houston St, New York, NY 10002"
  }, {
    "name": "The Freehouse Pub",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bxgdHEYqGEJFj6R82gwkXFiQZT2Unfl6MQ&usqp=CAU",
    "address": "261 Moore St, Brooklyn, NY 11206"
  }, {
    "name": "Joe's Real BBQ",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAu2_HC82o4SrrqtD4GCuc-MX4jFLdRRgi0g&usqp=CAU",
    "address": "454 Van Brunt St, Brooklyn, NY 11231"
   }, {
    "name": "Chunky's Burger & More",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZmehsn7Nra3DgdEl1Zwjp7QABTcMuIhTGA&usqp=CAU",
    "address": "430 E 9th St, New York, NY 10009"
  }, {
    "name": "Peerless Grille",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz3mfjpr_4C-DQaSi7E0-J6Zak2UWaTS8Crg&usqp=CAU",
    "address": "131 Sullivan St, New York, NY 10012"
  }, {
    "name": "Nomama Ramen Bowl",
    "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjI7Jf8CVni1yVbEMQdrIhOM5bA-lvW1rgg&usqp=CAU",
    "address": "1209 Jackson Ave, Queens, NY 11101"
  }, {
    "name": "El Ranchito",
    "photograph": "data:image/jpeg;base64,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",
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


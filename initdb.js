const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Grilled Chicken Wrap",
    slug: "grilled-chicken-wrap",
    image: "/images/burger.jpg",
    summary:
      "A healthy wrap filled with grilled chicken, fresh veggies, and tangy sauce.",
    instructions: `
        1. Grill the chicken:
           Season and grill the chicken breasts until cooked.
  
        2. Prepare the filling:
           Slice lettuce, tomatoes, and onions. Warm the wrap bread.
  
        3. Assemble:
           Place chicken and veggies on the wrap, drizzle with sauce, and roll it up.
  
        4. Serve:
           Cut in half and enjoy with a side of yogurt dip.
      `,
    creator: "Megumine",
    creator_email: "megumine@example.com",
  },
  {
    title: "Thai Green Curry",
    slug: "thai-green-curry",
    image: "/images/curry.jpg",
    summary:
      "A fragrant and spicy Thai curry with coconut milk and green chilies.",
    instructions: `
        1. Prepare the ingredients:
           Chop vegetables and protein of choice.
  
        2. Cook curry paste:
           Sauté green curry paste in oil until fragrant.
  
        3. Add ingredients:
           Add coconut milk, protein, and veggies. Simmer until tender.
  
        4. Serve:
           Garnish with Thai basil and serve with jasmine rice.
      `,
    creator: "Liam Wang",
    creator_email: "liam@example.com",
  },
  {
    title: "Pork and Chive Dumplings",
    slug: "pork-chive-dumplings",
    image: "/images/dumplings.jpg",
    summary: "Savory dumplings filled with seasoned pork and fresh chives.",
    instructions: `
        1. Make the filling:
           Combine ground pork, chives, soy sauce, and sesame oil.
  
        2. Fill wrappers:
           Place filling in wrappers, fold, and seal the edges.
  
        3. Cook:
           Steam or pan-fry the dumplings until cooked through.
  
        4. Serve:
           Enjoy hot with soy vinegar dipping sauce.
      `,
    creator: "Chen Wu",
    creator_email: "chen@example.com",
  },
  {
    title: "Baked Alfredo Pasta",
    slug: "baked-alfredo-pasta",
    image: "/images/macncheese.jpg",
    summary: "Creamy Alfredo pasta baked with mozzarella cheese and herbs.",
    instructions: `
        1. Boil pasta:
           Cook penne or fettuccine until al dente.
  
        2. Make sauce:
           Melt butter, add cream and parmesan. Stir until smooth.
  
        3. Bake:
           Mix pasta with sauce, top with cheese, and bake until bubbly.
  
        4. Serve:
           Garnish with parsley and serve hot.
      `,
    creator: "Ella Johnson",
    creator_email: "ella@example.com",
  },
  {
    title: "Neapolitan Margherita Pizza",
    slug: "neapolitan-margherita-pizza",
    image: "/images/pizza.jpg",
    summary: "Classic Italian pizza with tomato, mozzarella, and fresh basil.",
    instructions: `
        1. Make the dough:
           Mix flour, yeast, water, and salt. Let rise for 1 hour.
  
        2. Add toppings:
           Spread tomato sauce, mozzarella slices, and basil leaves.
  
        3. Bake:
           Bake at high heat until crust is crispy and cheese melts.
  
        4. Serve:
           Slice and enjoy while hot.
      `,
    creator: "Giulia Bianchi",
    creator_email: "giulia@example.com",
  },
  {
    title: "Crispy Chicken Schnitzel",
    slug: "crispy-chicken-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Golden fried chicken schnitzel, crispy on the outside and juicy inside.",
    instructions: `
        1. Flatten chicken:
           Pound chicken breasts until even.
  
        2. Bread:
           Dredge in flour, dip in egg, and coat with breadcrumbs.
  
        3. Fry:
           Deep fry until golden brown and crispy.
  
        4. Serve:
           Serve with lemon wedges and coleslaw.
      `,
    creator: "Anna Müller",
    creator_email: "anna@example.com",
  },
  {
    title: "Cucumber Tomato Salad",
    slug: "cucumber-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "Refreshing salad with cucumbers, tomatoes, red onions, and vinaigrette.",
    instructions: `
        1. Slice ingredients:
           Thinly slice cucumbers, tomatoes, and onions.
  
        2. Make dressing:
           Mix olive oil, vinegar, salt, pepper, and oregano.
  
        3. Toss:
           Combine vegetables with dressing.
  
        4. Serve:
           Chill for 10 minutes before serving.
      `,
    creator: "Noah Patel",
    creator_email: "noah@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();

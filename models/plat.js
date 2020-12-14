class Plat {
  constructor(
    id,
    categoryIds,
    title,
    description,
    preparation,
    complexity,
    duration,
    imageUrl,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.description = description;

    this.preparation = preparation;
    this.complexity = complexity;
    this.duration = duration;

    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;

    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Plat;

//Meal = Plat;

const createHero = () => `
  <section class="hero">
    <picture>
      <source media="(max-width: 768px)" srcset="./images/heros/hero-image_1-small.jpg">
      <img src="./images/heros/hero-image_1-large.jpg" alt="Hero Image">
    </picture>
    <div class="hero__content">
      <div class="hero__badge">
        <h1 tabindex="0">WhereTheFood</h1>
      </div>
      <h2 tabindex="0" class="hero__title">Explore the Best Eats Around!</h2>
    </div>
  </section>
`;

export { createHero };

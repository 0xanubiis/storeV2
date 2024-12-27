// Add to stats interface:
products: {
  total: number;
  outOfStock: number;
  featured: number;
};

// Add new stat card in the grid:
<StatCard
  title="Featured Products"
  value={stats.products.featured}
  icon={Star}
/>
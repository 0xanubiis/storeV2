// Add to the existing App component, inside the mainContent function, replace the products.slice(0, 4) with:
{filterProducts(products, searchQuery, selectedCategory)
  .filter(product => product.featured)
  .map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onAddToCart={handleAddToCart}
      onClick={() => setSelectedProduct(product)}
    />
  ))}

// Add this new function inside the App component:
const handleToggleFeatured = (id: number) => {
  setProducts(prev => prev.map(product => 
    product.id === id 
      ? { ...product, featured: !product.featured }
      : product
  ));
  showToast(`Product ${products.find(p => p.id === id)?.featured ? 'removed from' : 'added to'} featured products`);
};

// Update the AdminDashboard props in mainContent():
<AdminDashboard
  products={products}
  cartItems={cartItems}
  orders={orders}
  onAddProduct={handleAddProduct}
  onEditProduct={handleEditProduct}
  onDeleteProduct={handleDeleteProduct}
  onToggleFeatured={handleToggleFeatured}
/>
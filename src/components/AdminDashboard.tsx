// Update the ProductActions usage in the products table:
<ProductActions
  onEdit={() => {
    setSelectedProduct(product);
    setIsAddProductOpen(true);
  }}
  onDelete={() => {
    setProductToDelete(product.id);
    setIsDeleteDialogOpen(true);
  }}
  onToggleFeatured={() => onToggleFeatured(product.id)}
  isFeatured={product.featured}
/>

// Add to props interface:
interface AdminDashboardProps {
  // ... existing props
  onToggleFeatured: (id: number) => void;
}

// Add to stats calculation:
const stats = {
  // ... existing stats
  products: {
    total: products.length,
    outOfStock: 0,
    featured: products.filter(p => p.featured).length
  },
};
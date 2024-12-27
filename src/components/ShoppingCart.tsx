// Update the handleOrderComplete function:
const handleOrderComplete = (orderData: any) => {
  onOrderComplete(orderData);
  showToast('Thank you for your purchase! Your order has been successfully placed and will be processed shortly.', 'success');
};
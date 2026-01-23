export const getAdminProducts = () =>
  JSON.parse(localStorage.getItem("admin_products")) || [];

export const saveAdminProducts = (products) =>
  localStorage.setItem("admin_products", JSON.stringify(products));

export const getOrders = () =>
  JSON.parse(localStorage.getItem("admin_orders")) || [];

export const saveOrders = (orders) =>
  localStorage.setItem("admin_orders", JSON.stringify(orders));

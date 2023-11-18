export function formatPrice(price: number) {
  return (price).toLocaleString("en-hindi", {
    style: "currency",
    currency: "INR",
  });
}

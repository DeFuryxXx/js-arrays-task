// BEGIN
export default function getTotalAmount(wallet, currency) {
  let total = 0;
  
  for (const item of wallet) {
    const itemCurrency = item.slice(0, 3);
    
    if (itemCurrency === currency) {
      const amount = Number(item.slice(4));
      total = total + amount;
    }
  }
  
  return total;
}
// END
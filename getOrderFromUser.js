export const getOrderFromUser = () => {
  let userOrder = undefined;
  while (userOrder == undefined || userOrder == null) {
    userOrder = prompt("What would you like to order?");
  }
  const lowerCaseUserOrder = userOrder.toLowerCase();
  return lowerCaseUserOrder;
};

import { fastFoodMenu } from "./foodmenu.js";
import { getRightOrder } from "./getRightOrder.js";
import { getOrderFromUser } from "./getOrderFromUser.js";

export const getTip = () => {
  alert("Welcome to our restaurant!");

  let userOrder = getOrderFromUser();

  for (let key in fastFoodMenu) {
    const lowerCaseFastFoodName = fastFoodMenu[key]["name"].toLowerCase();
    while (userOrder == undefined || userOrder != lowerCaseFastFoodName) {
      userOrder = getOrderFromUser();
    }
    if (userOrder === lowerCaseFastFoodName) {
      return getRightOrder(fastFoodMenu[key]["price"]);
    }
  }
};

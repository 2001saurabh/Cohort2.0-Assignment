/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let transMap = new Map();

  transactions.forEach((trans) => {
    const {category, price} = trans;

    if(!transMap.has(category)){
      transMap.set(category,price);
    }else{
      transMap.set(category, transMap.get(category)+price )
    }
  })
  res = Array.from(transMap);
  result = Array.from(transMap).map(([category, totalSpent]) => ({category, totalSpent}))
  return result;
}

module.exports = calculateTotalSpentByCategory;

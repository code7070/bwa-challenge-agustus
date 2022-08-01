const restaurantList = [
  {
    name: "Bind Balorant",
    rating: {
      star: 5,
      userAmount: 7600,
    },
    price: {
      bottom: 35000,
      top: 529000,
    },
    location: {
      city: "Jakarta",
      country: "Indonesia",
    },
    reservation: {
      available: false,
      cost: 0,
    },
  },
  {
    name: "Batavia Restaurant",
    rating: 5,
    reviewedBy: 6650,
    price: {
      bottom: 29000,
      top: 259999,
    },
    location: {
      city: "Jakarta",
      country: "Indonesia",
    },
    reservation: {
      available: false,
      cost: 0,
    },
  },
  {
    name: "Split Ascent Restaurant",
    rating: 5,
    reviewedBy: 3620,
    price: {
      bottom: 49999,
      top: 560000,
    },
    location: {
      city: "Jakarta",
      country: "Indonesia",
    },
    reservation: {
      available: false,
      cost: 0,
    },
  },
  {
    name: "Padang Restaurant",
    rating: 5,
    reviewedBy: 5215,
    sponsored: true,
    price: {
      bottom: 49999,
      top: 560000,
    },
    location: {
      city: "Padang",
      country: "Indonesia",
    },
    reservation: {
      available: true,
      cost: 0,
    },
  },
];

export default restaurantList;

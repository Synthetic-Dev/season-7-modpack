// priority: 1

onEvent("recipes", event => {
  event.custom({
    type: "tconstruct:melting",
    ingredient: [
      {
        item: "aquaculture:tin_can",
      },
    ],
    result: {
      fluid: "tconstruct:molten_tin",
      amount: 90,
    },
    temperature: 500,
    time: 240,
  })
});

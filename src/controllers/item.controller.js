module.exports = {
  store: function ([_, ...params]) {
    let itemPrice = params.pop();
    if (!itemPrice) {
      return {
        response: "Comando CREATE: forneça um preço ao item.",
        error: "MISSING_ARGUMENT"
      };
    }
    itemPrice = parseFloat(itemPrice.replace(',', '.'));
    if (isNaN(itemPrice)) {
      return {
        response: `Comando CREATE: o preço do item precisa ser um número.`,
        error: 'INVALID_ARGUMET_TYPE'
      };
    }

    params.shift();

    const itemName = params.join(' ');

    return {
      data: {
        name: itemName,
        price_br: itemPrice
      }
    };
  },
  delete: function ([_, ...params], menu) {
    const itemId = params[1];

    if (!itemId) {
      return {
        response: `Comando DELETE: nenhum item informado.`,
        error: "BAD_REQUEST"
      }
    }
    let itemIdNumber = parseInt(itemId);
    if (isNaN(itemIdNumber)) {
      return {
        response: `Comando DELETE: o número do item precisa ser do tipo inteiro.`,
        error: 'INVALID_ARGUMET_TYPE'
      };
    }
    itemIdNumber -= 1;
    menu.items = menu.items.filter((_, i) => itemIdNumber !== i);
    return {
      response: `Item #${1+itemIdNumber} deletado com sucesso.`
    };
  }
}
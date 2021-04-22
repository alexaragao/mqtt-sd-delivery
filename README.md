# MQTT Delivery - Protocolo SDP
by: Alexandre Aragão

## Linguagens
![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript&logoColor=ddc508)

## Tecnologias
![Node.JS](https://img.shields.io/badge/-Node.js-000?&logo=node.js)

## Iniciando o projeto localmente
Como iniciar o projeto:

Instale as dependências do projeto:
- Comando `npm i`

Inicie o projeto (servidor):
- **PRODUÇÃO**: Comando `npm start`
- **DEVELOPMENT**: Comando `npm run start:dev`

Inicie o projeto (cliente):
- **PRODUÇÃO**: Comando `npm run start:client`
- **DEVELOPMENT**: Comando `npm run start:client:dev`

## Comando do protocolo
**Obs:** Os comandos deste protocolo são _case insensitive_.

### Comando PROFILE
#### Estutura
```sh
> PROFILE *PROFILE_NAME*
```

#### Parametros
Nome do Parametro|Tipo|Obrigatório|Descrição
-|-|-|-
_PROFILE_NAME_|`string`|Sim|O nome do usuário que se deseja logar no painel administrativo (padrão `admin`).

### Comando SHOW
#### Estutura
```sh
> SHOW *ITEM* *ID*
```

#### Parametros
Nome do Parametro|Tipo|Obrigatório|Descrição
-|-|-|-
_ITEM_|`string ('cardapio'|'pedido'|'pedidos')`|Sim|O nome do item que se deseja visualizar. No caso de 'pedido', caso não seja passado o parâmetro _ID_, retorna o pedido atual.
_ID_|`number`|Não*|O id do item que se deseja visualizar (Apenas para o item 'pedido').

#### Exemplos
```sh
SHOW CARDAPIO
```
```sh
SHOW PEDIDOS
```
```sh
SHOW PEDIDO 3
```

### Comando CREATE
#### Estutura
```sh
> CREATE *ITEM* *ITEM_NAME* *ITEM_PRICE*
```

#### Parametros
Nome do Parametro|Tipo|Obrigatório|Descrição
-|-|-|-
_ITEM_|`string ('pedido'|'item')`|Sim|O nome do item que se deseja criar. No caso de 'item', é necessário informar _ITEM_NAME_ e _ITEM_PRICE_.
_ITEM_NAME_|`string`|Não*|Nome do item que se deseja criar (Apenas para _ITEM_ 'item').
_ITEM_PRICE_|`number`|Não*|Preço do item que se deseja criar (Apenas para _ITEM_ 'item').

#### Exemplos
```sh
CREATE PEDIDO
```
```sh
CREATE ITEM Mc Lanche Feliz 21.50
```
### Comando DELETE
#### Estutura
```sh
> DELETE *ITEM* *ITEM_ID*
```

#### Parametros
Nome do Parametro|Tipo|Obrigatório|Descrição
-|-|-|-
_ITEM_|`string ('item')`|Sim|O nome do item que se deseja deletar.
_ITEM_ID_|`number`|Sim|O id do item que se deseja deletar.

#### Exemplos
```sh
DELETE ITEM 7
```

### Comando ADD
#### Estutura
```sh
> ADD *ITEM* *ITEM_ID* *ITEM_AMOUNT*
```

#### Parametros
Nome do Parametro|Tipo|Obrigatório|Descrição
-|-|-|-
_ITEM_|`string ('item')`|Sim|O nome do item que se deseja adicionar.
_ITEM_ID_|`number`|Sim|O id do item que se deseja adicionar.
_ITEM_AMOUNT_|`number`|Não|A quantidade de itens que se deseja adicionar por vez (um por padrão).

#### Exemplos
```sh
ADD ITEM 7 5
```

### Comando FINISH
#### Estutura
```sh
> FINISH *ITEM*
```

#### Parametros
Nome do Parametro|Tipo|Obrigatório|Descrição
-|-|-|-
_ITEM_|`string ('pedido')`|Sim|O nome do item que se deseja finalizar. (Em caso de pedido, é equivalente a solicitar a entrega.)

#### Exemplos
```sh
> FINISH PEDIDO
```

### Comando EXIT
Desconecta o usuário do sistema.

#### Estutura
```sh
> EXIT
```
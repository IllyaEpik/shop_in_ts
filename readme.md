# Проєкт по магазину продажі дронів
## Drone Shop



## Чому саме цей проєкт?
### Why this particular project?

Ми обрали цей проєкт тому що вважаємо що його буде цікаво створювати. І на ньому ми сможемо використати знання з TypeScript,React.

We chose this project because we think it will be interesting to create. And we will be able to use our knowledge of TypeScript and React on it.

## Участники команди/ Team members 

- [Илья Эпик](https://github.com/IllyaEpik)  |  [Illya Epik:Teamlead](https://github.com/IllyaEpik)
- [Ренат Белей](https://github.com/Renat19Belei)  |  [Renat Belei](https://github.com/Renat19Belei)
- [Попович Марк](https://github.com/markpopovich9)  |  [Popovych Mark](https://github.com/markpopovich9)


#  ендпоінти/ Endpoints

## user/ |  User

```http
POST /user/register
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 201  |  Користувача зареєстровано |
| 422  |  Некоректні дані при реєстрації |
| 409  |  Користувач з таким email вже існує |
| 500  |  Помилка сервера при реєстрації користувача |
</details>

<details>
  <summary>request</summary>

```json
{
  "email": "string",
  "password": "string"
}
```

</details>

<details>
  <summary>response</summary>

```json
{
  "token": "rtthjjmhtgrfe2.ewrtyrewqerty.eqwrtyrewqrty"
}
```

</details>

###

```http
POST /user/login
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Користувача авторизовано |
| 422  |  Некоректні дані при логіні |
| 401  |  Невірний email або пароль |
| 500  |  Помилка сервера при логіні користувача |
</details>
<details>
  <summary>request</summary>

```json
{
  "email": "string",
  "password": "string"
}
```

</details>
<details>
  <summary>response</summary>

```json
{
  "token": "rtthjjmhtgrfe2.ewrtyrewqerty.eqwrtyrewqrty"
}
```
</details>

###

```http
GET /user/me
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Користувача авторизовано |
| 401  |  Неавторизований доступ |
| 500  |  Помилка сервера при логіні користувача |
</details>
<details>
  <summary>request</summary>

- must have token in header

</details>
<details>
  <summary>response</summary>

```json
{
  "id": 1,
  "email": "epik@gmail.com",
  "name?": "Illya",
  "fatherName?": "Secret",
  "lastName?": "Epik",
  "cardNumber?": "XXXX-XXXX-XXXX-XXXX",
  "phoneNumber?": "+380XXXXXXXXX",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
</details>

###

```http
POST /user/address
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 201  |  Адресу додано |
| 401  |  Неавторизований доступ |
| 422  |  Некоректні дані при додаванні адреси |
| 500  |  Помилка сервера при додаванні адреси |
</details>
<details>
  <summary>request</summary>

```json
{
  "street": "west street",
  "city": "dnipro",
  "houseNumber": "12",
  "country": "ukraine"
}
```

</details>
<details>
  <summary>response</summary>

```json
{
  "id": 1,
  "street": "west street",
  "city": "dnipro",
  "houseNumber": "12",
  "country": "ukraine"
}
```
</details>
  
###

```http
GET /user/addresses
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Адресу отримано |
| 401  |  Неавторизований доступ |
| 500  |  Помилка сервера при отриманні адреси |
</details>
<details>
  <summary>request</summary>

must have token in header


</details>
<details>
  <summary>response</summary>

```json
[{
  "id": 1,
  "street": "west street",
  "city": "dnipro",
  "houseNumber": "12",
  "country": "ukraine"
}]
```
</details>

###

```http
PATCH /user/address/:id
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Адресу оновлено |
| 401  |  Неавторизований доступ |
| 404  |  Адресу не знайдено |
| 403  |  Відсутні права для оновлення адреси |
| 422  |  Некоректні дані при оновленні адреси |
| 500  |  Помилка сервера при оновленні адреси |
</details>
<details>
  <summary>request</summary>

must have token in header


</details>
<details>
  <summary>response</summary>

```json
{
  "id": 1,
  "street": "west street",
  "city": "dnipro",
  "houseNumber": "12",
  "country": "ukraine"
}
```
</details>

###

```http
DELETE /user/address/:id
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 204  |  Адресу видалено |
| 401  |  Неавторизований доступ |
| 404  |  Адресу не знайдено |
| 403  |  Відсутні права для видалення адреси |
| 500  |  Помилка сервера при видаленні адреси |
</details>
<details>
  <summary>request</summary>

must have token in header


</details>
<details>
  <summary>response</summary>

```json
{
  "id": 1,
  "street": "west street",
  "city": "dnipro",
  "houseNumber": "12",
  "country": "ukraine"
}
```
</details>

###

```http
PATCH /user/me
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Інформацію оновлено |
| 401  |  Неавторизований доступ |
| 500  |  Помилка сервера при оновленні інформації |
</details>
<details>
  <summary>request</summary>

must have token in header


</details>
<details>
  <summary>response</summary>

```json

{
  "id": 1,
  "email": "string",
  "name": "string",
  "fatherName": "string",
  "phone": "string",
  "avatar": "string",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}

```
</details>

###

```http
DELETE /user/me
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 204  |  Інформацію видалено |
| 401  |  Неавторизований доступ |
| 500  |  Помилка сервера при видаленні інформації |
</details>
<details>
  <summary>request</summary>

must have token in header


</details>
<details>
  <summary>response</summary>

```json

{
  "id": 1,
  "email": "string",
  "name": "string",
  "fatherName": "string",
  "phone": "string",
  "avatar": "string",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}

```
</details>

## /products  |  Products

###

```http
POST /products/
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 201  |  Інформацію створено |
| 401  |  Неавторизований доступ |
| 500  |  Помилка сервера при створенні інформації |
| 422  |  Некоректні дані при створенні інформації |
</details>
<details>
  <summary>request</summary>

must have token in header
```json
{
    "price":1000,
    "discount":0,
    "description":"drone",
    "name":"drone",
    "categoryId":1,
    "quantityLimit":100,
    "img":"data:image/jpeg;base64,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"
}
```

</details>
<details>
  <summary>response</summary>

```json

{
  {
    "id": 10,
    "price": 1000,
    "discount": 0,
    "description": "drone",
    "name": "drone",
    "quantityLimit": 100,
    "categoryId": 1,
    "userId": 1,
    "popular": 0,
    "createdAt": "2026-01-24T04:53:14.407Z",
    "img": "data:image/jpeg;base64,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"
}
}

```
</details>

###

```http
GET /products/
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Інформацію отримано |
| 500  |  Помилка сервера при отриманні інформації |
</details>
<details>
  <summary>request</summary>

3 query parameters

```json
{
	"count":1,
	"skip":10,
	"sort":"new or popular"
}
```

</details>
<details>
  <summary>response</summary>

```json
[{
  
    "id": 10,
    "price": 1000,
    "discount": 0,
    "description": "drone",
    "name": "drone",
    "quantityLimit": 100,
    "categoryId": 1,
    "userId": 1,
    "popular": 0,
    "createdAt": "2026-01-24T04:53:14.407Z",
    "img": "data:image/jpeg;base64,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"
}]
```

</details>

### 

```http
GET /products/:id
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  Інформацію отримано |
| 500  |  Помилка сервера при отриманні інформації |
| 404  |  Продукт не знайдено |
</details>
<details>
  <summary>request</summary>


</details>
<details>
  <summary>response</summary>

```json
{
  
    "id": 10,
    "price": 1000,
    "discount": 0,
    "description": "drone",
    "name": "drone",
    "quantityLimit": 100,
    "categoryId": 1,
    "userId": 1,
    "popular": 0,
    "createdAt": "2026-01-24T04:53:14.407Z",
    "img": "data:image/jpeg;base64,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"
}
```

</details>

###

```http
PUT /products/:id
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 200  |  продукт оновленн |
| 401  |  Неавторизований доступ |
| 403  |  Відсутні права для оновлення продукту |
| 404  |  Продукт не знайдено |
| 422  |  Некоректні дані при оновленні продукту |
| 500  |  Помилка сервера при оновленні продукту |

</details>
<details>
  <summary>request</summary>

must have token in header
```json
{
    "price":1000,
    "discount":0,
    "description":"drone",
    "name":"drone",
    "categoryId":1,
    "quantityLimit":100,
    "img":"data:image/jpeg;base64,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"
}
```

</details>
<details>
  <summary>response</summary>

```json
{
  
    "id": 10,
    "price": 1000,
    "discount": 0,
    "description": "drone",
    "name": "drone",
    "quantityLimit": 100,
    "categoryId": 1,
    "userId": 1,
    "popular": 0,
    "createdAt": "2026-01-24T04:53:14.407Z",
    "img": "data:image/jpeg;base64,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"
}
```

</details>
    
###

```http
DELETE /products/:id
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 204  |  продукт видален |
| 401  |  Неавторизований доступ |
| 403  |  Відсутні права для видалення продукту |
| 404  |  Продукт не знайдено |
| 500  |  Помилка сервера при видалення продукту |

</details>
<details>
  <summary>request</summary>

must have token in header

</details>
<details>
  <summary>response</summary>

```json
{
  
    "id": 10,
    "price": 1000,
    "discount": 0,
    "description": "drone",
    "name": "drone",
    "quantityLimit": 100,
    "categoryId": 1,
    "userId": 1,
    "popular": 0,
    "createdAt": "2026-01-24T04:53:14.407Z",
    "img": "data:image/jpeg;base64,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"
}
```

</details>

###

-  /orders  |  Orders


  - buy/:productId  |  Купити продукт 201
    - 422  |  Некоректні дані при купівлі продукту
    - 401  |  Неавторизований доступ
    - 404  |  Продукт не знайдено
    - 410  |  Продукт недоступний для купівлі

  - get/  |  Отримати всі замовлення 200
    - 401  |  Неавторизований доступ
  - get/:id  |  Отримати замовлення по id 200
    - 401  |  Неавторизований доступ
    - 404  |  Замовлення не знайдено

  - update/:id  |  Завершити замовлення по id 200
    - 401  |  Неавторизований доступ
    - 404  |  Замовлення не знайдено
    - 422  |  Некоректні дані при завершенні замовлення
    - 403  |  Відсутні права для завершення замовлення

  - get/products  |  Отримати всі продукти в замовленнях 200
    - 401  |  Неавторизований доступ


- /categories  |  Categories
  - create/  |  Створити категорію 201
    - 422  |  Некоректні дані при створенні категорії
    - 403  |  Відсутні права для створення категорії
  - get/  |  Отримати всі категорії 200
    - 400  |  Некоректні дані при отриманні категорій
  - getById/:id  |  Отримати категорію по id 200
    - 404  |  Категорія не знайдена
  - getByUrlName/:urlName  |  Отримати категорію по urlName 200
    - 404  |  Категорія не знайдена

  - update/:id  |  Оновити категорію по id 200
    - 422  |  Некоректні дані при оновленні категорії
    - 404  |  Категорія не знайдена 
    - 403  |  Відсутні права для оновлення категорії
  - delete/:id  |  Видалити категорію по id 204
    - 422  |  Некоректні дані при видаленні категорії
    - 404  |  Категорія не знайдена 
    - 403  |  Відсутні права для видалення категорії


## Технології які будемо використовувати/ Technologies we will use
  ### -TypeScript — надбудова над JavaScript, що додає статичну типізацію. Завдяки цьому помилки легше знаходити під час розробки, а великі проєкти стають надійнішими.

  ### Node.js — безплатне кросплатформне середовище, яке дозволяє виконувати JavaScript поза браузером. Використовується для створення серверів, вебзастосунків, інструментів командного рядка й автоматизації.

  ### Express.js — легкий і гнучкий серверний фреймворк для Node.js. Значно спрощує розробку API та вебзастосунків завдяки зручному маршрутизаційному механізму та підтримці middleware.

  ### Middleware — проміжні функції, що перехоплюють і обробляють запити між сервером і відповіддю. У Express.js відповідають за логування, авторизацію, парсинг даних та обробку помилок.


## Обробка запиту і шо робить кожний файл  | Request processing and what evety file do
  ``` mermaid
graph LR
    C{Request}
    A{Middleware}
    T{Router}
    F{Controller}
    O{Service}
    U{Repository}
    V{Response}
    C-->A
    A-->T
    T-->F
    F-->O
    O-->U
    U-->V

```
* Server - Керуе всіма додатками(Він всього один на всі додатки)
* Router - Відповідае за ссилки у додатку
* Controller - Отримує дані від запиту  
* Service - Бизнес-логіка 
* Repository - Відповідае за роботу с Базою Даних
## Prisma DB
**prisma/schema.prisma**
* Цей файл відповідае за структуру бази даних
* Якщо хочете докладніше побачити схему бази даних перейдіть по цій ссилці--> (https://www.figma.com/board/uO22KmxD7Zz7faDhTmpPKD/db-drones-ts?node-id=5-19&t=xefmEiy5JSxHMPMU-0)

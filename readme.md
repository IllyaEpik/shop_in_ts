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

- /products  |  Products
  - create/  |  Створити продукт 201
    - 422  |  Некоректні дані при створенні продукту
    - 401  |  Неавторизований доступ
    - 422  | Категорія не знайдена

  - get/     |  Отримати всі продукти 200
    - 401  |  Неавторизований доступ

  - get/:id  |  Отримати продукт по id 200
    - 404  |  Продукт не знайдено

  - update/:id  |  Оновити продукт по id 200
    - 422  |  Некоректні дані при оновленні продукту
    - 401  |  Неавторизований доступ
    - 404  |  Продукт не знайдено
    - 403  |  Відсутні права для оновлення продукту
    
  - delete/:id  |  Видалити продукт по id 204
    - 401  |  Неавторизований доступ 
    - 403  |  Відсутні права для видалення продукту
    - 404  |  Продукт не знайдено


-  /orders  |  Orders
<!--
### Buy Product
```http
POST /orders/buy/:productId
```
<details>
  <summary>status codes</summary>

| Code | Description |
| :--- | :--- |
| 201  |  Продукт куплено |
| 422  |  Некоректні дані при купівлі продукту |
| 401  |  Неавторизований доступ |
| 404  |  Продукт не знайдено |
| 410  |  Продукт недоступний для купівлі |

</details>

<details>
  <summary>request</summary>

```json
{
  "products": [0,1,2],
}
``` -->

<!-- </details> -->

<!-- <details>
  <summary>response</summary>

```json
{
  "orderId": 1,
  "products": [1,2,3],
  "user": "name",
  "status": "pending",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
</details>



#
#
# -->


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

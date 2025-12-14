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


##  ендпоінти/ Endpoints
- user/
  - register/  |  Реєстрація користувача 201
  - login/  |  Логін користувача 200
  - me/  |  Отримати інформацію про себе 200
  


- /products  |  Products
  - create/  |  Створити продукт 201
  - get/  |  Отримати всі продукти 200
  - get/:id  |  Отримати продукт по id 200
  - update/:id  |  Оновити продукт по id 200
  - delete/:id  |  Видалити продукт по id 204

- /orders  |  Orders
  - buy/:productId  |  Купити продукт 201
  - get/  |  Отримати всі замовлення 200
  - get/:id  |  Отримати замовлення по id 200
  - rate/:id  |  Оцінити продукт по id 200
  - complete/:id  |  Завершити замовлення по id 200
  - get/products  |  Отримати всі продукти в замовленнях 200


- /categories  |  Categories
  - create/  |  Створити категорію 201
  - get/  |  Отримати всі категорії 200
  - get/:id  |  Отримати категорію по id 200
  - update/:id  |  Оновити категорію по id 200
  - delete/:id  |  Видалити категорію по id 204


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

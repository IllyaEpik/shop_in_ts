<!-- ### Описание файлов и директорий

#### 1. **prisma/schema.prisma**
Этот файл содержит описание схемы базы данных для Prisma. Здесь определяются модели данных (например, пользователи, товары, заказы) и их связи. С помощью этого файла Prisma может генерировать SQL миграции и взаимодействовать с базой данных. Пример:

### prisma
 model User {
  id        Int    @id @default(autoincrement())
  name      String
  email     String @unique
  createdAt DateTime @default(now())
}
### Модели: Каждая модель представляет собой таблицу в базе данных.
### Поля: Поля модели соответствуют столбцам таблицы.
### Типы данных: Например, Int, String, DateTime — это типы данных для полей в таблице.
### Связи: Можно описывать связи между моделями, такие как 1-to-many или many-to-many.
### 2. prisma/.gitignore
Файл .gitignore содержит список файлов и директорий, которые Git должен игнорировать и не отслеживать в репозитории. Например, временные файлы, логи, файлы конфигурации или скомпилированные файлы.

### Пример содержания .gitignore:
node_modules/
.env
### 3. prisma/package.json
Файл package.json содержит метаданные о проекте и его зависимостях. Он является центральным для работы с Node.js и TypeScript. В нем указываются все зависимости проекта (например, Prisma, TypeScript), а также скрипты для запуска проекта и его тестирования.

## Пример содержимого:
{
  "name": "shop_in_ts-master",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "start": "ts-node src/index.ts",
    "dev": "ts-node-dev src/index.ts",
    "prisma-migrate": "npx prisma migrate dev"
  },
  "dependencies": {
    "prisma": "^3.0.0",
    "typescript": "^4.0.0",
    "ts-node": "^10.0.0"
  }
}
## scripts: Здесь указаны команды для удобного запуска проекта или выполнения других действий. Например, npm start или npm prisma-migrate.
## dependencies: Здесь указаны все внешние библиотеки, которые проект использует, например, Prisma, TypeScript и другие.
### 4. prisma/prisma.config.ts
Этот файл содержит конфигурацию для работы с Prisma. Он может включать настройки подключения к базе данных, параметры для генерации клиента Prisma, а также дополнительные настройки, такие как пути к миграциям или логирование.

Пример конфигурации может выглядеть так:
typescript
Copy code
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({});
PrismaClient: Экземпляр Prisma Client, с помощью которого осуществляется взаимодействие с базой данных.
Конфигурация логирования: Включение логирования запросов для отладки.
### 5. readme.md
Файл readme.md предоставляет описание проекта, инструкции по его установке и запуску. Он помогает другим разработчикам понять, как работать с проектом, какие шаги нужно выполнить для настройки и использования. -->

# Проєкт по магазину продажі дронів
## Drone Shop



## Чому саме цей проєкт?
### Why this particular project?

Ми обрали цей проєкт тому що вважаємо що його буде цікаво створювати. І на ньому ми сможемо використати знання з TypeScript,React.

We chose this project because we think it will be interesting to create. And we will be able to use our knowledge of TypeScript and React on it.

## Участники команди/ Team members 

- [Илья Эпик](https://github.com/IllyaEpik)  |  [Illya Epic:Teamlead](https://github.com/IllyaEpik)
- [Ренат Белей](https://github.com/Renat19Belei)  |  [Renat Belei](https://github.com/Renat19Belei)
- [Попович Марк](https://github.com/markpopovich9)  |  [Popovych Mark](https://github.com/markpopovich9)


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
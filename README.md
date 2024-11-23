# Cycle Store Backend

A backend service for managing a cycle store, built with **Node.js**, **Express**, **MongoDB**, and **TypeScript**.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Features

Cycle Management APIs

- Create a product
- Get all products
- Get a specific product by ID
- Update a product by ID
- Delete a product by ID

Orders Management APIs

- Create an order
- Calculate total revenue from orders

## Technologies

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB (Mongoose)**
- **Zod validation library**

---

## Installation

1. Clone the repository:
   ```bash
   $ git clone https://github.com/shipon-hossen-raju/L2-A2-cycle-store-backend.git
   $ cd L2-A2-cycle-store-backend
   $ pnpm i
   $ pnpm run start:dev
   ```

## Folder Structure

```
cycle-store-backend/
   ├── src/
      ├── app.ts
      ├── server.ts
      ├── config/
      ├── modules/
         ├── product/
            ├── product.interface.ts
            ├── product.model.ts
            ├── product.route.ts
            ├── product.controller.ts
            ├── product.service.ts
         ├── order/
            ├── order.interface.ts
            ├── order.model.ts
            ├── order.route.ts
            ├── order.controller.ts
            ├── order.service.ts
   ├── dist/
   ├── package.json
   ├── tsconfig.json
   ├── .eslintrc.js
   ├── .prettierrc
   └── .env
```

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

- CRUD operations can be performed on the product.
- Get All Bicycles

---

## Tech Stack

### our api endpoint

- ***

## Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB (Mongoose)**

---

## Installation

1. Clone the repository:
   ```bash
   $ git clone https://github.com/shipon-hossen-raju/L2-A2-cycle-store-backend.git
   $ cd L2-A2-cycle-store-backend
   $ pnpm i
   $
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

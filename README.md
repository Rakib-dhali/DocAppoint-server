# DocAppoint Server

A RESTful API server for the **DocAppoint** Doctor Appointment Booking System. Built with Node.js, Express, TypeScript, and MongoDB.

🌐 **Live Server URL:** `https://docappoint-server.vercel.app`

---

## Features

- 🏥 Fetch all available doctors with search and filter support
- ⭐ Get top 3 highest-rated doctors dynamically
- 📅 Book, view, update, and delete appointments securely
- 🔐 JWT-based authentication with protected routes
- 🚀 Built with TypeScript for type safety and scalability

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB (Native Driver)
- **Auth:**Better-Auth, JWT (jsonwebtoken)

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- `.env` file configured

### Installation

```bash
git clone https://github.com/Rakib-dhali/docappoint-server.git
cd docappoint-server
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/doc-appoint
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
PORT=4000
```

### Run Development Server

```bash
npm run server
```

---

## API Endpoints

### Doctors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/doctors` | Get all doctors |
| GET | `/top-doctors` | Get top 3 rated doctors |
| GET | `/doctors/:id` | Get single doctor by ID |

### Appointments

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/create-appointment` | Book a new appointment | ✅ |
| GET | `/appointments/:id` | Get appointment by ID | ✅ |
| PATCH | `/appointments/:id` | Update an appointment | ✅ |
| DELETE | `/appointments/:id` | Delete an appointment | ✅ |

> ✅ Protected routes require a valid JWT token in cookies or Authorization header.

---

## Folder Structure

```
DocAppoint/
├── src/
│   ├── db/
│   │   └── db.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── controllers/
│   │   └── controller.ts
│   ├── middleware/
│   │   └── verifyToken.ts
│   └── app.ts
├── server.ts
├── .env
├── package.json
└── tsconfig.json
```

---

## License

MIT © [Rakib Dhali](https://github.com/Rakib-dhali)
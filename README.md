# DocAppoint Server

**Backend API for DocAppoint (Cliniqo) - Doctor Appointment Booking System**

A robust, scalable RESTful API built with **Node.js**, **Express**, and **TypeScript** that powers the DocAppoint platform.

**Live Server:** [https://docappoint-server.vercel.app](https://docappoint-server.vercel.app)

**Frontend:** [https://doc-appoint-client-pi.vercel.app](https://doc-appoint-client-pi.vercel.app)

---

## ✨ Key Features

- **Doctor Management** — Fetch all doctors with search and filtering
- **Top Doctors** — Get highest-rated specialists instantly
- **Appointment System** — Complete booking, viewing, and cancellation flow
- **Secure Authentication** — JWT-based authentication with protected routes
- **Type Safety** — Fully built with TypeScript
- **MongoDB Integration** — Efficient database operations

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Vercel

## 📡 API Endpoints

All API routes are prefixed with `/api`

### Doctors
- `GET /api/doctors` — Get all doctors (supports search & filters)
- `GET /api/top-doctors` — Get top rated doctors
- `GET /api/doctors/:id` — Get single doctor by ID

### Appointments
- `POST /api/create-appointment` — Book new appointment (Protected)
- `GET /api/appointments/:id` — Get appointment details (Protected)
- `PATCH /api/appointments/:id` — Update appointment (Protected)
- `DELETE /api/appointments/:id` — Cancel appointment (Protected)

> Protected routes require a valid `Authorization` header with JWT token.

---

## Getting Started

### Installation

```bash
git clone https://github.com/Rakib-dhali/DocAppoint-server.git
cd DocAppoint-server
npm install
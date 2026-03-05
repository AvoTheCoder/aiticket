# AI Helpdesk CRM (TypeScript + Express + LangChain)

A simple full-stack helpdesk/CRM where anyone can submit a support ticket, and authenticated agents can view tickets, reply, and use AI tools (summary + suggested reply) powered by LangChain.

## Features

### Public
- Submit a support ticket via `/support`
- Creates a ticket + initial message in the database

### Agent Dashboard (Authenticated)
- Login + JWT auth
- View all tickets
- View ticket detail and message thread
- Reply to tickets
- Update ticket status (open / in_progress / resolved)

### AI Assist (LangChain)
- Summarize a ticket conversation
- Suggest a reply draft
- Optional: classify ticket category (billing/shipping/technical/account)

---

## Tech Stack

**Frontend**
- React + TypeScript
- React Router (routes: `/support`, `/login`, `/dashboard/...`)

**Backend**
- Node.js + Express + TypeScript
- JWT authentication (middleware protected routes)
- LangChain (LLM calls for summary + suggested reply)

**Database**
- PostgreSQL (recommended) + ORM (Prisma recommended, optional)

---

## App Routes (Frontend)

Public:
- `/support` — ticket submission form
- `/login` — agent login page

Private (requires auth):
- `/dashboard/tickets` — ticket list
- `/dashboard/tickets/:id` — ticket detail (thread + AI panel)

---

## Environment Variables

Backend (`server/.env`):

- `PORT=8080`
- `DATABASE_URL=postgresql://user:password@localhost:5432/helpdesk`
- `JWT_SECRET=your_long_random_secret`
- `LLM_PROVIDER=openai` (or `anthropic`, etc.)
- `OPENAI_API_KEY=...` (if using OpenAI)
- `ANTHROPIC_API_KEY=...` (if using Anthropic)

Frontend (`client/.env`):

- `VITE_API_BASE_URL=http://localhost:8080/api`

---

## Getting Started (Local)

### 1) Install deps
```bash
# server
cd server
npm install

# client
cd ../client
npm install

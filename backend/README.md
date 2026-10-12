# WARRIORWORLD Backend Services (Planned)

This directory is reserved for the future backend architecture for WARRIORWORLD D2C.

## Planned Architecture
- **Framework**: Node.js (Express / Fastify) or Go
- **Database**: PostgreSQL (Prisma ORM) + Redis (cart session & coupon rate limiting)
- **Integrations**:
  - **Payment Gateway**: Razorpay & Cashfree (UPI Express, COD validation)
  - **Logistics**: Shiprocket / Delhivery API for real-time tracking across 19,000+ pin codes
  - **Communications**: WhatsApp Cloud API & Kaleyra/Gupshup for order dispatches
  - **Inventory**: Real-time warehouse sync across Ahmedabad central facility

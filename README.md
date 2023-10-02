# Home task - ipwhois wrapper

### Prerequisites:

Node version 18 or above (version >= 18).

#### Environment

Create `.env` in the root directory with the following:

```bash

PORT=3000

MONGO_URI=<your-mongo-uri>

IPWHO_URL=http://ipwho.is

```

## Running the app

```bash
With NPM
# development
$  npm  run  dev
# production
$  npm  run  start

With Yarn
# development
$  yarn  dev
# production
$  npm  run  start
```

## HTTP Requests

### Check IP Geolocation information via [https://ipwhois.io/](https://ipwhois.io/)

- **Endpoint:** `GET /api/ip-info/:ip`

- **Response:** JSON object with details of IP address location.

- **Example:**

```http

GET /api/ip-info/8.8.8.8



```

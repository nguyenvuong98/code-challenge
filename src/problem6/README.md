## 🎯 Overview
This module provides a __backend API service__ to manage a __real-time scoreboard__ for a website.
The scoreboard displays __the top 10 users' scores__ and updates live when users complete in-app actions.

## 🔗 Main Features
1. __Update User Score__
*   Users perform an action (e.g., complete a challenge).
*   An API call is dispatched to update their score securely.
2. __Get Top Scores__
*   Retrieve the __Top 10 scores__ for the scoreboard.
3. __Live Updates__
*   Implement __real-time scoreboard updates__ using __WebSockets__ or __Server-Sent Events (SSE)__.
## 🚀 API Endpoints
1️⃣ __POST /score/update__
| Purpose  | Update the user’s score when an action is completed |
| -------- | --------------------------------------------------- |
| Method   | `POST`                                              |
| Endpoint | `/score/update`                                     |

__Request Body__
```
{
  "userId": "string",
  "actionToken": "string" 
}
```
__Behavior__
*   Verify `actionToken` to __prevent unauthorized score manipulation__.
*   Increment user’s score in the database.
__Response__
```
{
  "success": true,
  "newScore": 150
}
```
2️⃣ __GET /score/top__
| Purpose  | Get the top 10 scores |
| -------- | --------------------- |
| Method   | `GET`                 |
| Endpoint | `/score/top`          |
__Response__
```
[
  { "userId": "user1", "score": 200 },
  { "userId": "user2", "score": 190 },
  ...
]
```
3️⃣ __WebSocket / SSE Channel__
| Purpose | Real-time scoreboard updates |
| ------- | ---------------------------- |
| Event   | `scoreUpdate`                |
| Payload |                              |
```
{
  "userId": "user1",
  "newScore": 210,
  "top10": [
    { "userId": "user1", "score": 210 },
    { "userId": "user2", "score": 190 },
    ...
  ]
}
```

## 🔒 Security Requirements
| Problem                    | Solution                                                              |
| -------------------------- | --------------------------------------------------------------------- |
| Prevent fake score updates | Use **signed `actionToken`** (JWT / HMAC / Token-based validation).   |
| Replay attacks             | Use **nonce or timestamp validation**.                                |
| Secure API                 | Use **HTTPS** and **authentication (e.g., API keys or user tokens)**. |

## 🔧 Technology Suggestions
| Requirement      | Suggested Tech                     |
| ---------------- | ---------------------------------- |
| Realtime         | WebSocket (e.g., Socket.IO) or SSE |
| Database         | MongoDB / PostgreSQL / Redis       |
| Token Validation | JWT / HMAC / OAuth                 |

## 🗺️ Flow Diagram
```
sequenceDiagram
  participant User
  participant Frontend
  participant Backend API
  participant Database
  participant Realtime Service

  User->>Frontend: Complete action
  Frontend->>Backend API: POST /score/update (with actionToken)
  Backend API->>Backend API: Validate actionToken
  Backend API->>Database: Increment user score
  Database-->>Backend API: Return new score
  Backend API-->>Frontend: Respond with new score
  Backend API->>Realtime Service: Broadcast new top 10
  Realtime Service->>Frontend: Push scoreUpdate event
```
## 🧠 Additional Comments for Improvement
| Issue                   | Suggestion                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Scalability**         | Use Redis pub/sub or message queues (e.g., RabbitMQ) for broadcasting updates if multiple servers are involved. |
| **Action Validation**   | If action tokens are too weak, consider integrating with an **action verification service** (e.g., anti-cheat). |
| **Leaderboard Caching** | Cache top 10 scores in Redis for faster access.                                                                 |
| **Rate Limiting**       | Apply rate limiting to `/score/update` endpoint to prevent abuse.                                               |
| **Audit Log**           | Store logs of score changes for transparency and review.                                                        |

## ✅ Deliverable Summary
| Item         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `README.md`  | This document, given to backend engineering team     |
| Diagram      | Provided via Mermaid syntax (for markdown rendering) |
| Improvements | Listed in the Additional Comments section            |

## 📥 Next Steps
*   Backend engineers should implement this API following the spec.

*   Security team should review `actionToken` generation & validation strategy.

*   Frontend team should integrate WebSocket / SSE for live updates.
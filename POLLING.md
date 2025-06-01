# Polling
- Polling means checking for new data after a fixed interval of time by making api calls at regualar intervals to the server.
- It is used for real-time updates.
- Based on HTTP.
- # Two type:-
- Short Polling
- Long Polling

# Short Polling(Protocol:- HTTP)
- Request is send after some interval.
- Client repeatedly sends request to the server at regular time interval if server has data then send data else empty response that's why long polling is developed.
- Ex: Put get API under setInterval untilany response is achieved.
- Disadvantage: Burden on network, low latency

# Long Polling(Protocol:- HTTP)
- Now if client send any request then server hold the request until data is send as response.
- Client is live with server.
- No empty response as server holds the request until data is send.
- Creates less traffic then short polling.
- Long polling based on HTTP.

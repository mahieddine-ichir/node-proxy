# node-proxy
A nodejs backend proxy server to bypass CORS (for development and testing purposes)

# Installation

    npm install

# Usage

    node proxy.js <port> <server_to_request>

this will start a _node_ server listening on _port_ and all requests (GET & POST) to _localhost:port_ will be redirected to _server_to_request_. Request parameters and server response (status and body) are respected.

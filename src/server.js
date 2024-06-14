import http from "node:http";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // Read streams
  const buffers = [];
  // Read all content body
  for await (const chunk of req) {
    buffers.push(chunk);
  }


  // Transform body in object JSON
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "applicatoin/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end("Not Found");
});

server.listen(3333);

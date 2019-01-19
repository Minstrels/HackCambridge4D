import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class ServerMaker {
    public static HttpServer startServer(int port) {
        try {
            HttpServer s = HttpServer.create(new InetSocketAddress(port), 0);
            s.createContext("/play", new Handler());
            s.setExecutor(null);
            s.start();
            return s;
        } catch (IOException e) {
            System.out.println("unable to start server");
            e.printStackTrace();
            System.exit(1);
            return null;
        }
    }

    static class Handler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            String response = "This is the response";
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }

}
import express from 'express';
import {userRoutes} from "./routes/users";
import {messageRoutes} from "./routes/messages"

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

app.listen(8500, () => { console.log("Servidor operando")
});

///Link do API: https://api-back-end-i-3.onrender.com
//checked

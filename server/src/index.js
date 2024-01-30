import 'dotenv/config';
import app from './app';
import { initContract } from './config/contracts.config';

const port = 8080;
app.listen(port, async () => {
    await initContract();
    console.log(`Server up on port ${port}!`);
});
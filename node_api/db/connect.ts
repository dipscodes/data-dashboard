import { connect } from 'mongoose';
import 'dotenv/config';

(async function() {
    connect(process.env.CONNECTION_STRING as string);
})();
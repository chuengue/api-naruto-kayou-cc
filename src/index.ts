
import 'dotenv/config';

import { server } from './server/Server';


const startServer =  () => {
    server.listen(process.env.PORT || 3333, () =>{
        console.log(`App is Running on PORT ${process.env.PORT || 3333}`);
    });
};
// if(process.env.IS_LOCALHOST !== 'true') {
//     Knex.migrate.latest()
//         .then(() => {
//             Knex.seed.run()
//                 .then(() => startServer())
//                 .catch(console.log);
//         })
//         .catch(console.log);
// } else 
startServer();
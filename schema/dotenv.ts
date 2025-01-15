import z from 'zod';

export const envSchema = z.object({
    APP_PORT:z.number().default(4000).optional(),
    APP_HOST:z.string(),
    MYSQL_HOST:z.string(),
    MYSQL_USER:z.string(),
    MYSQL_PASSWORD:z.string(),
    MYSQL_DATABASe:z.string()
    

})







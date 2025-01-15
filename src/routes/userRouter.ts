import { FastifyInstance } from "fastify";

interface Iuser {
  //Object Interface inside it.........

  id: Number;
  name: String;
  email: String;
  password: String;
}

type Iusers = Iuser[];

const users: Iusers = [
  {
    id: 1,
    name: "John Smit",
    email: "john@gmail.com",
    password: "1234kldsfn$50i3250-2i2",
  },
  {
    id: 2,
    name: "TuPac Shakur",
    email: "tupac@gmail.com",
    password: "234832ymdffsnsfdn",
  },
];

async function userRouter(fastify: FastifyInstance) {
  fastify.get("/users", (request, reply) => {
    if (!users || users.length < 3) {

      return reply.code(404).send({
        code: 404,
        message: `There was an error requesting users`,
        body: null,
      })
    };

    return reply.send({
      code: 200,
      message: `Users retrieved Successfully`,
      body: users,
    });
  });


  
  

 
}

export default userRouter;

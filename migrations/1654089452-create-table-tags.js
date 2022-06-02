exports.up = async (sql) => {
  await sql`
  CREATE TABLE tags (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(50) NOT NULL
   )
 `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE tags
  `;
};

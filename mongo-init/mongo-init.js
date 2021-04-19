print("********************************************");
print("**************HELLO WORLD*******************");
print("********************************************");

db.auth("root", "example");

db = db.getSiblingDB("chess-app-db");

db.createUser({
  user: "chess_user",
  pwd: "chess_user123",
  roles: [
    {
      role: "dbOwner",
      db: "chess-app-db",
    },
  ],
});
print("database name : " + db.getName());
db.createCollection("test");

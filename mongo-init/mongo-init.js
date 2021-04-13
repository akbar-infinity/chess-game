print("********************************************");
print("**************HELLO WORLD*******************");
print("********************************************");

db.auth("root", "example");

db = db.getSiblingDB("chess-app-db");

db.createUser({
  user: "mah",
  pwd: "mah123",
  roles: [
    {
      role: "admin",
      db: "chess-app-db",
    },
  ],
});
print("database name : " + db.getName());
db.createCollection("test");

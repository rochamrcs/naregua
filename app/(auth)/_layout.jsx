import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { SQLiteProvider} from 'expo-sqlite';

const initializeDatabase = async (db) => {
  try {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password TEXT,
            role TEXT
        );
    `);

    const adminUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', ['admin']);

    if (!adminUser) {
      await db.runAsync('INSERT INTO users (username, password, role) VALUES ("admin", "admin", "Admin")');
      console.log('Admin user created!');
    } else {
      console.log('Admin user already exists.');
    }
    
    console.log('Database initialized!');
  } catch (error) {
    console.log('Error while initializing the database:', error);
  }
};

const AuthLayout = () => {
  return (
    <SQLiteProvider databaseName='regua.db' onInit={initializeDatabase}>
      <>
        <Stack>
          <Stack.Screen
            name="login"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="cadastro"
            options={{
              headerShown: false
            }}
          />
        </Stack>
        <StatusBar backgroundColor='#1E1C1F' style='light'></StatusBar>
      </>
    </SQLiteProvider>
  )
}

export default AuthLayout
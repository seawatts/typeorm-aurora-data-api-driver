import { Connection, ConnectionOptions } from 'typeorm';
export declare const createConnection: (dbType: DbType, partialOptions?: any) => Promise<Connection>;
export declare const createConnectionAndResetData: (dbType: DbType, partialOptions?: Partial<ConnectionOptions>) => Promise<Connection>;
export declare type DbType = 'mysql' | 'postgres';
export declare const useCleanDatabase: (dbType: DbType, partialOptions: Partial<import("typeorm/driver/mysql/MysqlConnectionOptions").MysqlConnectionOptions> | Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions> | Partial<import("typeorm/driver/cockroachdb/CockroachConnectionOptions").CockroachConnectionOptions> | Partial<import("typeorm/driver/sqlite/SqliteConnectionOptions").SqliteConnectionOptions> | Partial<import("typeorm/driver/sqlserver/SqlServerConnectionOptions").SqlServerConnectionOptions> | Partial<import("typeorm/driver/sap/SapConnectionOptions").SapConnectionOptions> | Partial<import("typeorm/driver/oracle/OracleConnectionOptions").OracleConnectionOptions> | Partial<import("typeorm/driver/cordova/CordovaConnectionOptions").CordovaConnectionOptions> | Partial<import("typeorm/driver/nativescript/NativescriptConnectionOptions").NativescriptConnectionOptions> | Partial<import("typeorm/driver/react-native/ReactNativeConnectionOptions").ReactNativeConnectionOptions> | Partial<import("typeorm/driver/sqljs/SqljsConnectionOptions").SqljsConnectionOptions> | Partial<import("typeorm/driver/mongodb/MongoConnectionOptions").MongoConnectionOptions> | Partial<import("typeorm/driver/aurora-data-api/AuroraDataApiConnectionOptions").AuroraDataApiConnectionOptions> | Partial<import("typeorm/driver/aurora-data-api-pg/AuroraDataApiPostgresConnectionOptions").AuroraDataApiPostgresConnectionOptions> | Partial<import("typeorm/driver/expo/ExpoConnectionOptions").ExpoConnectionOptions> | Partial<import("typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions").BetterSqlite3ConnectionOptions> | undefined, invoke: (connection: Connection) => Promise<void>) => Promise<void>;
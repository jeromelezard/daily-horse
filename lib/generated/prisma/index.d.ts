
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GlobalState
 * 
 */
export type GlobalState = $Result.DefaultSelection<Prisma.$GlobalStatePayload>
/**
 * Model UnsplashCollection
 * 
 */
export type UnsplashCollection = $Result.DefaultSelection<Prisma.$UnsplashCollectionPayload>
/**
 * Model IngestedUnsplashImage
 * 
 */
export type IngestedUnsplashImage = $Result.DefaultSelection<Prisma.$IngestedUnsplashImagePayload>
/**
 * Model ScheduledImage
 * 
 */
export type ScheduledImage = $Result.DefaultSelection<Prisma.$ScheduledImagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnimalType: {
  Horse: 'Horse',
  Bobby: 'Bobby',
  Bunny: 'Bunny'
};

export type AnimalType = (typeof AnimalType)[keyof typeof AnimalType]


export const ImageSource: {
  Unsplash: 'Unsplash',
  GCP: 'GCP',
  Other: 'Other'
};

export type ImageSource = (typeof ImageSource)[keyof typeof ImageSource]


export const Provider: {
  Google: 'Google',
  Microsoft: 'Microsoft',
  Apple: 'Apple'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const Role: {
  Admin: 'Admin',
  Jasmine: 'Jasmine',
  User: 'User'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type AnimalType = $Enums.AnimalType

export const AnimalType: typeof $Enums.AnimalType

export type ImageSource = $Enums.ImageSource

export const ImageSource: typeof $Enums.ImageSource

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GlobalStates
 * const globalStates = await prisma.globalState.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GlobalStates
   * const globalStates = await prisma.globalState.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.globalState`: Exposes CRUD operations for the **GlobalState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalStates
    * const globalStates = await prisma.globalState.findMany()
    * ```
    */
  get globalState(): Prisma.GlobalStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unsplashCollection`: Exposes CRUD operations for the **UnsplashCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnsplashCollections
    * const unsplashCollections = await prisma.unsplashCollection.findMany()
    * ```
    */
  get unsplashCollection(): Prisma.UnsplashCollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingestedUnsplashImage`: Exposes CRUD operations for the **IngestedUnsplashImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestedUnsplashImages
    * const ingestedUnsplashImages = await prisma.ingestedUnsplashImage.findMany()
    * ```
    */
  get ingestedUnsplashImage(): Prisma.IngestedUnsplashImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledImage`: Exposes CRUD operations for the **ScheduledImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledImages
    * const scheduledImages = await prisma.scheduledImage.findMany()
    * ```
    */
  get scheduledImage(): Prisma.ScheduledImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    GlobalState: 'GlobalState',
    UnsplashCollection: 'UnsplashCollection',
    IngestedUnsplashImage: 'IngestedUnsplashImage',
    ScheduledImage: 'ScheduledImage',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "globalState" | "unsplashCollection" | "ingestedUnsplashImage" | "scheduledImage" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GlobalState: {
        payload: Prisma.$GlobalStatePayload<ExtArgs>
        fields: Prisma.GlobalStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>
          }
          findFirst: {
            args: Prisma.GlobalStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>
          }
          findMany: {
            args: Prisma.GlobalStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>[]
          }
          create: {
            args: Prisma.GlobalStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>
          }
          createMany: {
            args: Prisma.GlobalStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>[]
          }
          delete: {
            args: Prisma.GlobalStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>
          }
          update: {
            args: Prisma.GlobalStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>
          }
          deleteMany: {
            args: Prisma.GlobalStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>[]
          }
          upsert: {
            args: Prisma.GlobalStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatePayload>
          }
          aggregate: {
            args: Prisma.GlobalStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalState>
          }
          groupBy: {
            args: Prisma.GlobalStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalStateCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalStateCountAggregateOutputType> | number
          }
        }
      }
      UnsplashCollection: {
        payload: Prisma.$UnsplashCollectionPayload<ExtArgs>
        fields: Prisma.UnsplashCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnsplashCollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnsplashCollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>
          }
          findFirst: {
            args: Prisma.UnsplashCollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnsplashCollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>
          }
          findMany: {
            args: Prisma.UnsplashCollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>[]
          }
          create: {
            args: Prisma.UnsplashCollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>
          }
          createMany: {
            args: Prisma.UnsplashCollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnsplashCollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>[]
          }
          delete: {
            args: Prisma.UnsplashCollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>
          }
          update: {
            args: Prisma.UnsplashCollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>
          }
          deleteMany: {
            args: Prisma.UnsplashCollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnsplashCollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnsplashCollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>[]
          }
          upsert: {
            args: Prisma.UnsplashCollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsplashCollectionPayload>
          }
          aggregate: {
            args: Prisma.UnsplashCollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnsplashCollection>
          }
          groupBy: {
            args: Prisma.UnsplashCollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnsplashCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnsplashCollectionCountArgs<ExtArgs>
            result: $Utils.Optional<UnsplashCollectionCountAggregateOutputType> | number
          }
        }
      }
      IngestedUnsplashImage: {
        payload: Prisma.$IngestedUnsplashImagePayload<ExtArgs>
        fields: Prisma.IngestedUnsplashImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestedUnsplashImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestedUnsplashImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>
          }
          findFirst: {
            args: Prisma.IngestedUnsplashImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestedUnsplashImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>
          }
          findMany: {
            args: Prisma.IngestedUnsplashImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>[]
          }
          create: {
            args: Prisma.IngestedUnsplashImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>
          }
          createMany: {
            args: Prisma.IngestedUnsplashImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestedUnsplashImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>[]
          }
          delete: {
            args: Prisma.IngestedUnsplashImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>
          }
          update: {
            args: Prisma.IngestedUnsplashImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>
          }
          deleteMany: {
            args: Prisma.IngestedUnsplashImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestedUnsplashImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngestedUnsplashImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>[]
          }
          upsert: {
            args: Prisma.IngestedUnsplashImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestedUnsplashImagePayload>
          }
          aggregate: {
            args: Prisma.IngestedUnsplashImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestedUnsplashImage>
          }
          groupBy: {
            args: Prisma.IngestedUnsplashImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestedUnsplashImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestedUnsplashImageCountArgs<ExtArgs>
            result: $Utils.Optional<IngestedUnsplashImageCountAggregateOutputType> | number
          }
        }
      }
      ScheduledImage: {
        payload: Prisma.$ScheduledImagePayload<ExtArgs>
        fields: Prisma.ScheduledImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>
          }
          findFirst: {
            args: Prisma.ScheduledImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>
          }
          findMany: {
            args: Prisma.ScheduledImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>[]
          }
          create: {
            args: Prisma.ScheduledImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>
          }
          createMany: {
            args: Prisma.ScheduledImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>[]
          }
          delete: {
            args: Prisma.ScheduledImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>
          }
          update: {
            args: Prisma.ScheduledImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>
          }
          deleteMany: {
            args: Prisma.ScheduledImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>[]
          }
          upsert: {
            args: Prisma.ScheduledImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledImagePayload>
          }
          aggregate: {
            args: Prisma.ScheduledImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledImage>
          }
          groupBy: {
            args: Prisma.ScheduledImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledImageCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledImageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    globalState?: GlobalStateOmit
    unsplashCollection?: UnsplashCollectionOmit
    ingestedUnsplashImage?: IngestedUnsplashImageOmit
    scheduledImage?: ScheduledImageOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UnsplashCollectionCountOutputType
   */

  export type UnsplashCollectionCountOutputType = {
    ingestedUnsplashImages: number
    ScheduledImage: number
  }

  export type UnsplashCollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingestedUnsplashImages?: boolean | UnsplashCollectionCountOutputTypeCountIngestedUnsplashImagesArgs
    ScheduledImage?: boolean | UnsplashCollectionCountOutputTypeCountScheduledImageArgs
  }

  // Custom InputTypes
  /**
   * UnsplashCollectionCountOutputType without action
   */
  export type UnsplashCollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollectionCountOutputType
     */
    select?: UnsplashCollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnsplashCollectionCountOutputType without action
   */
  export type UnsplashCollectionCountOutputTypeCountIngestedUnsplashImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestedUnsplashImageWhereInput
  }

  /**
   * UnsplashCollectionCountOutputType without action
   */
  export type UnsplashCollectionCountOutputTypeCountScheduledImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledImageWhereInput
  }


  /**
   * Count Type ScheduledImageCountOutputType
   */

  export type ScheduledImageCountOutputType = {
    users: number
  }

  export type ScheduledImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ScheduledImageCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ScheduledImageCountOutputType without action
   */
  export type ScheduledImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImageCountOutputType
     */
    select?: ScheduledImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduledImageCountOutputType without action
   */
  export type ScheduledImageCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    favourites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GlobalState
   */

  export type AggregateGlobalState = {
    _count: GlobalStateCountAggregateOutputType | null
    _avg: GlobalStateAvgAggregateOutputType | null
    _sum: GlobalStateSumAggregateOutputType | null
    _min: GlobalStateMinAggregateOutputType | null
    _max: GlobalStateMaxAggregateOutputType | null
  }

  export type GlobalStateAvgAggregateOutputType = {
    globalStateId: number | null
    skips: number | null
    shuffleOrder: number | null
  }

  export type GlobalStateSumAggregateOutputType = {
    globalStateId: number | null
    skips: number | null
    shuffleOrder: number[]
  }

  export type GlobalStateMinAggregateOutputType = {
    globalStateId: number | null
    category: $Enums.AnimalType | null
    startDate: Date | null
    skips: number | null
    cycleImages: boolean | null
    dateShuffled: Date | null
  }

  export type GlobalStateMaxAggregateOutputType = {
    globalStateId: number | null
    category: $Enums.AnimalType | null
    startDate: Date | null
    skips: number | null
    cycleImages: boolean | null
    dateShuffled: Date | null
  }

  export type GlobalStateCountAggregateOutputType = {
    globalStateId: number
    category: number
    startDate: number
    skips: number
    cycleImages: number
    shuffleOrder: number
    dateShuffled: number
    _all: number
  }


  export type GlobalStateAvgAggregateInputType = {
    globalStateId?: true
    skips?: true
    shuffleOrder?: true
  }

  export type GlobalStateSumAggregateInputType = {
    globalStateId?: true
    skips?: true
    shuffleOrder?: true
  }

  export type GlobalStateMinAggregateInputType = {
    globalStateId?: true
    category?: true
    startDate?: true
    skips?: true
    cycleImages?: true
    dateShuffled?: true
  }

  export type GlobalStateMaxAggregateInputType = {
    globalStateId?: true
    category?: true
    startDate?: true
    skips?: true
    cycleImages?: true
    dateShuffled?: true
  }

  export type GlobalStateCountAggregateInputType = {
    globalStateId?: true
    category?: true
    startDate?: true
    skips?: true
    cycleImages?: true
    shuffleOrder?: true
    dateShuffled?: true
    _all?: true
  }

  export type GlobalStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalState to aggregate.
     */
    where?: GlobalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStates to fetch.
     */
    orderBy?: GlobalStateOrderByWithRelationInput | GlobalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalStates
    **/
    _count?: true | GlobalStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalStateMaxAggregateInputType
  }

  export type GetGlobalStateAggregateType<T extends GlobalStateAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalState[P]>
      : GetScalarType<T[P], AggregateGlobalState[P]>
  }




  export type GlobalStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalStateWhereInput
    orderBy?: GlobalStateOrderByWithAggregationInput | GlobalStateOrderByWithAggregationInput[]
    by: GlobalStateScalarFieldEnum[] | GlobalStateScalarFieldEnum
    having?: GlobalStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalStateCountAggregateInputType | true
    _avg?: GlobalStateAvgAggregateInputType
    _sum?: GlobalStateSumAggregateInputType
    _min?: GlobalStateMinAggregateInputType
    _max?: GlobalStateMaxAggregateInputType
  }

  export type GlobalStateGroupByOutputType = {
    globalStateId: number
    category: $Enums.AnimalType
    startDate: Date
    skips: number
    cycleImages: boolean
    shuffleOrder: number[]
    dateShuffled: Date | null
    _count: GlobalStateCountAggregateOutputType | null
    _avg: GlobalStateAvgAggregateOutputType | null
    _sum: GlobalStateSumAggregateOutputType | null
    _min: GlobalStateMinAggregateOutputType | null
    _max: GlobalStateMaxAggregateOutputType | null
  }

  type GetGlobalStateGroupByPayload<T extends GlobalStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalStateGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalStateGroupByOutputType[P]>
        }
      >
    >


  export type GlobalStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
    cycleImages?: boolean
    shuffleOrder?: boolean
    dateShuffled?: boolean
  }, ExtArgs["result"]["globalState"]>

  export type GlobalStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
    cycleImages?: boolean
    shuffleOrder?: boolean
    dateShuffled?: boolean
  }, ExtArgs["result"]["globalState"]>

  export type GlobalStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
    cycleImages?: boolean
    shuffleOrder?: boolean
    dateShuffled?: boolean
  }, ExtArgs["result"]["globalState"]>

  export type GlobalStateSelectScalar = {
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
    cycleImages?: boolean
    shuffleOrder?: boolean
    dateShuffled?: boolean
  }

  export type GlobalStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"globalStateId" | "category" | "startDate" | "skips" | "cycleImages" | "shuffleOrder" | "dateShuffled", ExtArgs["result"]["globalState"]>

  export type $GlobalStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      globalStateId: number
      category: $Enums.AnimalType
      startDate: Date
      skips: number
      cycleImages: boolean
      shuffleOrder: number[]
      dateShuffled: Date | null
    }, ExtArgs["result"]["globalState"]>
    composites: {}
  }

  type GlobalStateGetPayload<S extends boolean | null | undefined | GlobalStateDefaultArgs> = $Result.GetResult<Prisma.$GlobalStatePayload, S>

  type GlobalStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalStateCountAggregateInputType | true
    }

  export interface GlobalStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalState'], meta: { name: 'GlobalState' } }
    /**
     * Find zero or one GlobalState that matches the filter.
     * @param {GlobalStateFindUniqueArgs} args - Arguments to find a GlobalState
     * @example
     * // Get one GlobalState
     * const globalState = await prisma.globalState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalStateFindUniqueArgs>(args: SelectSubset<T, GlobalStateFindUniqueArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalStateFindUniqueOrThrowArgs} args - Arguments to find a GlobalState
     * @example
     * // Get one GlobalState
     * const globalState = await prisma.globalState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalStateFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateFindFirstArgs} args - Arguments to find a GlobalState
     * @example
     * // Get one GlobalState
     * const globalState = await prisma.globalState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalStateFindFirstArgs>(args?: SelectSubset<T, GlobalStateFindFirstArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateFindFirstOrThrowArgs} args - Arguments to find a GlobalState
     * @example
     * // Get one GlobalState
     * const globalState = await prisma.globalState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalStateFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalStates
     * const globalStates = await prisma.globalState.findMany()
     * 
     * // Get first 10 GlobalStates
     * const globalStates = await prisma.globalState.findMany({ take: 10 })
     * 
     * // Only select the `globalStateId`
     * const globalStateWithGlobalStateIdOnly = await prisma.globalState.findMany({ select: { globalStateId: true } })
     * 
     */
    findMany<T extends GlobalStateFindManyArgs>(args?: SelectSubset<T, GlobalStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalState.
     * @param {GlobalStateCreateArgs} args - Arguments to create a GlobalState.
     * @example
     * // Create one GlobalState
     * const GlobalState = await prisma.globalState.create({
     *   data: {
     *     // ... data to create a GlobalState
     *   }
     * })
     * 
     */
    create<T extends GlobalStateCreateArgs>(args: SelectSubset<T, GlobalStateCreateArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalStates.
     * @param {GlobalStateCreateManyArgs} args - Arguments to create many GlobalStates.
     * @example
     * // Create many GlobalStates
     * const globalState = await prisma.globalState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalStateCreateManyArgs>(args?: SelectSubset<T, GlobalStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalStates and returns the data saved in the database.
     * @param {GlobalStateCreateManyAndReturnArgs} args - Arguments to create many GlobalStates.
     * @example
     * // Create many GlobalStates
     * const globalState = await prisma.globalState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalStates and only return the `globalStateId`
     * const globalStateWithGlobalStateIdOnly = await prisma.globalState.createManyAndReturn({
     *   select: { globalStateId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalStateCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalState.
     * @param {GlobalStateDeleteArgs} args - Arguments to delete one GlobalState.
     * @example
     * // Delete one GlobalState
     * const GlobalState = await prisma.globalState.delete({
     *   where: {
     *     // ... filter to delete one GlobalState
     *   }
     * })
     * 
     */
    delete<T extends GlobalStateDeleteArgs>(args: SelectSubset<T, GlobalStateDeleteArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalState.
     * @param {GlobalStateUpdateArgs} args - Arguments to update one GlobalState.
     * @example
     * // Update one GlobalState
     * const globalState = await prisma.globalState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalStateUpdateArgs>(args: SelectSubset<T, GlobalStateUpdateArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalStates.
     * @param {GlobalStateDeleteManyArgs} args - Arguments to filter GlobalStates to delete.
     * @example
     * // Delete a few GlobalStates
     * const { count } = await prisma.globalState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalStateDeleteManyArgs>(args?: SelectSubset<T, GlobalStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalStates
     * const globalState = await prisma.globalState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalStateUpdateManyArgs>(args: SelectSubset<T, GlobalStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalStates and returns the data updated in the database.
     * @param {GlobalStateUpdateManyAndReturnArgs} args - Arguments to update many GlobalStates.
     * @example
     * // Update many GlobalStates
     * const globalState = await prisma.globalState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalStates and only return the `globalStateId`
     * const globalStateWithGlobalStateIdOnly = await prisma.globalState.updateManyAndReturn({
     *   select: { globalStateId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalStateUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalState.
     * @param {GlobalStateUpsertArgs} args - Arguments to update or create a GlobalState.
     * @example
     * // Update or create a GlobalState
     * const globalState = await prisma.globalState.upsert({
     *   create: {
     *     // ... data to create a GlobalState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalState we want to update
     *   }
     * })
     */
    upsert<T extends GlobalStateUpsertArgs>(args: SelectSubset<T, GlobalStateUpsertArgs<ExtArgs>>): Prisma__GlobalStateClient<$Result.GetResult<Prisma.$GlobalStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateCountArgs} args - Arguments to filter GlobalStates to count.
     * @example
     * // Count the number of GlobalStates
     * const count = await prisma.globalState.count({
     *   where: {
     *     // ... the filter for the GlobalStates we want to count
     *   }
     * })
    **/
    count<T extends GlobalStateCountArgs>(
      args?: Subset<T, GlobalStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalStateAggregateArgs>(args: Subset<T, GlobalStateAggregateArgs>): Prisma.PrismaPromise<GetGlobalStateAggregateType<T>>

    /**
     * Group by GlobalState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalStateGroupByArgs['orderBy'] }
        : { orderBy?: GlobalStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalState model
   */
  readonly fields: GlobalStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalState model
   */
  interface GlobalStateFieldRefs {
    readonly globalStateId: FieldRef<"GlobalState", 'Int'>
    readonly category: FieldRef<"GlobalState", 'AnimalType'>
    readonly startDate: FieldRef<"GlobalState", 'DateTime'>
    readonly skips: FieldRef<"GlobalState", 'Int'>
    readonly cycleImages: FieldRef<"GlobalState", 'Boolean'>
    readonly shuffleOrder: FieldRef<"GlobalState", 'Int[]'>
    readonly dateShuffled: FieldRef<"GlobalState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalState findUnique
   */
  export type GlobalStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * Filter, which GlobalState to fetch.
     */
    where: GlobalStateWhereUniqueInput
  }

  /**
   * GlobalState findUniqueOrThrow
   */
  export type GlobalStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * Filter, which GlobalState to fetch.
     */
    where: GlobalStateWhereUniqueInput
  }

  /**
   * GlobalState findFirst
   */
  export type GlobalStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * Filter, which GlobalState to fetch.
     */
    where?: GlobalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStates to fetch.
     */
    orderBy?: GlobalStateOrderByWithRelationInput | GlobalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalStates.
     */
    cursor?: GlobalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalStates.
     */
    distinct?: GlobalStateScalarFieldEnum | GlobalStateScalarFieldEnum[]
  }

  /**
   * GlobalState findFirstOrThrow
   */
  export type GlobalStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * Filter, which GlobalState to fetch.
     */
    where?: GlobalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStates to fetch.
     */
    orderBy?: GlobalStateOrderByWithRelationInput | GlobalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalStates.
     */
    cursor?: GlobalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalStates.
     */
    distinct?: GlobalStateScalarFieldEnum | GlobalStateScalarFieldEnum[]
  }

  /**
   * GlobalState findMany
   */
  export type GlobalStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * Filter, which GlobalStates to fetch.
     */
    where?: GlobalStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStates to fetch.
     */
    orderBy?: GlobalStateOrderByWithRelationInput | GlobalStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalStates.
     */
    cursor?: GlobalStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStates.
     */
    skip?: number
    distinct?: GlobalStateScalarFieldEnum | GlobalStateScalarFieldEnum[]
  }

  /**
   * GlobalState create
   */
  export type GlobalStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalState.
     */
    data: XOR<GlobalStateCreateInput, GlobalStateUncheckedCreateInput>
  }

  /**
   * GlobalState createMany
   */
  export type GlobalStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalStates.
     */
    data: GlobalStateCreateManyInput | GlobalStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalState createManyAndReturn
   */
  export type GlobalStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalStates.
     */
    data: GlobalStateCreateManyInput | GlobalStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalState update
   */
  export type GlobalStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalState.
     */
    data: XOR<GlobalStateUpdateInput, GlobalStateUncheckedUpdateInput>
    /**
     * Choose, which GlobalState to update.
     */
    where: GlobalStateWhereUniqueInput
  }

  /**
   * GlobalState updateMany
   */
  export type GlobalStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalStates.
     */
    data: XOR<GlobalStateUpdateManyMutationInput, GlobalStateUncheckedUpdateManyInput>
    /**
     * Filter which GlobalStates to update
     */
    where?: GlobalStateWhereInput
    /**
     * Limit how many GlobalStates to update.
     */
    limit?: number
  }

  /**
   * GlobalState updateManyAndReturn
   */
  export type GlobalStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * The data used to update GlobalStates.
     */
    data: XOR<GlobalStateUpdateManyMutationInput, GlobalStateUncheckedUpdateManyInput>
    /**
     * Filter which GlobalStates to update
     */
    where?: GlobalStateWhereInput
    /**
     * Limit how many GlobalStates to update.
     */
    limit?: number
  }

  /**
   * GlobalState upsert
   */
  export type GlobalStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalState to update in case it exists.
     */
    where: GlobalStateWhereUniqueInput
    /**
     * In case the GlobalState found by the `where` argument doesn't exist, create a new GlobalState with this data.
     */
    create: XOR<GlobalStateCreateInput, GlobalStateUncheckedCreateInput>
    /**
     * In case the GlobalState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalStateUpdateInput, GlobalStateUncheckedUpdateInput>
  }

  /**
   * GlobalState delete
   */
  export type GlobalStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
    /**
     * Filter which GlobalState to delete.
     */
    where: GlobalStateWhereUniqueInput
  }

  /**
   * GlobalState deleteMany
   */
  export type GlobalStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalStates to delete
     */
    where?: GlobalStateWhereInput
    /**
     * Limit how many GlobalStates to delete.
     */
    limit?: number
  }

  /**
   * GlobalState without action
   */
  export type GlobalStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalState
     */
    select?: GlobalStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalState
     */
    omit?: GlobalStateOmit<ExtArgs> | null
  }


  /**
   * Model UnsplashCollection
   */

  export type AggregateUnsplashCollection = {
    _count: UnsplashCollectionCountAggregateOutputType | null
    _min: UnsplashCollectionMinAggregateOutputType | null
    _max: UnsplashCollectionMaxAggregateOutputType | null
  }

  export type UnsplashCollectionMinAggregateOutputType = {
    collectionId: string | null
    ingestionComplete: boolean | null
  }

  export type UnsplashCollectionMaxAggregateOutputType = {
    collectionId: string | null
    ingestionComplete: boolean | null
  }

  export type UnsplashCollectionCountAggregateOutputType = {
    collectionId: number
    ingestionComplete: number
    _all: number
  }


  export type UnsplashCollectionMinAggregateInputType = {
    collectionId?: true
    ingestionComplete?: true
  }

  export type UnsplashCollectionMaxAggregateInputType = {
    collectionId?: true
    ingestionComplete?: true
  }

  export type UnsplashCollectionCountAggregateInputType = {
    collectionId?: true
    ingestionComplete?: true
    _all?: true
  }

  export type UnsplashCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnsplashCollection to aggregate.
     */
    where?: UnsplashCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsplashCollections to fetch.
     */
    orderBy?: UnsplashCollectionOrderByWithRelationInput | UnsplashCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnsplashCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsplashCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsplashCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnsplashCollections
    **/
    _count?: true | UnsplashCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnsplashCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnsplashCollectionMaxAggregateInputType
  }

  export type GetUnsplashCollectionAggregateType<T extends UnsplashCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUnsplashCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnsplashCollection[P]>
      : GetScalarType<T[P], AggregateUnsplashCollection[P]>
  }




  export type UnsplashCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnsplashCollectionWhereInput
    orderBy?: UnsplashCollectionOrderByWithAggregationInput | UnsplashCollectionOrderByWithAggregationInput[]
    by: UnsplashCollectionScalarFieldEnum[] | UnsplashCollectionScalarFieldEnum
    having?: UnsplashCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnsplashCollectionCountAggregateInputType | true
    _min?: UnsplashCollectionMinAggregateInputType
    _max?: UnsplashCollectionMaxAggregateInputType
  }

  export type UnsplashCollectionGroupByOutputType = {
    collectionId: string
    ingestionComplete: boolean
    _count: UnsplashCollectionCountAggregateOutputType | null
    _min: UnsplashCollectionMinAggregateOutputType | null
    _max: UnsplashCollectionMaxAggregateOutputType | null
  }

  type GetUnsplashCollectionGroupByPayload<T extends UnsplashCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnsplashCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnsplashCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnsplashCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], UnsplashCollectionGroupByOutputType[P]>
        }
      >
    >


  export type UnsplashCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collectionId?: boolean
    ingestionComplete?: boolean
    ingestedUnsplashImages?: boolean | UnsplashCollection$ingestedUnsplashImagesArgs<ExtArgs>
    ScheduledImage?: boolean | UnsplashCollection$ScheduledImageArgs<ExtArgs>
    _count?: boolean | UnsplashCollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unsplashCollection"]>

  export type UnsplashCollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collectionId?: boolean
    ingestionComplete?: boolean
  }, ExtArgs["result"]["unsplashCollection"]>

  export type UnsplashCollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collectionId?: boolean
    ingestionComplete?: boolean
  }, ExtArgs["result"]["unsplashCollection"]>

  export type UnsplashCollectionSelectScalar = {
    collectionId?: boolean
    ingestionComplete?: boolean
  }

  export type UnsplashCollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"collectionId" | "ingestionComplete", ExtArgs["result"]["unsplashCollection"]>
  export type UnsplashCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingestedUnsplashImages?: boolean | UnsplashCollection$ingestedUnsplashImagesArgs<ExtArgs>
    ScheduledImage?: boolean | UnsplashCollection$ScheduledImageArgs<ExtArgs>
    _count?: boolean | UnsplashCollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnsplashCollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnsplashCollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnsplashCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnsplashCollection"
    objects: {
      ingestedUnsplashImages: Prisma.$IngestedUnsplashImagePayload<ExtArgs>[]
      ScheduledImage: Prisma.$ScheduledImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      collectionId: string
      ingestionComplete: boolean
    }, ExtArgs["result"]["unsplashCollection"]>
    composites: {}
  }

  type UnsplashCollectionGetPayload<S extends boolean | null | undefined | UnsplashCollectionDefaultArgs> = $Result.GetResult<Prisma.$UnsplashCollectionPayload, S>

  type UnsplashCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnsplashCollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnsplashCollectionCountAggregateInputType | true
    }

  export interface UnsplashCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnsplashCollection'], meta: { name: 'UnsplashCollection' } }
    /**
     * Find zero or one UnsplashCollection that matches the filter.
     * @param {UnsplashCollectionFindUniqueArgs} args - Arguments to find a UnsplashCollection
     * @example
     * // Get one UnsplashCollection
     * const unsplashCollection = await prisma.unsplashCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnsplashCollectionFindUniqueArgs>(args: SelectSubset<T, UnsplashCollectionFindUniqueArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnsplashCollection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnsplashCollectionFindUniqueOrThrowArgs} args - Arguments to find a UnsplashCollection
     * @example
     * // Get one UnsplashCollection
     * const unsplashCollection = await prisma.unsplashCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnsplashCollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, UnsplashCollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnsplashCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionFindFirstArgs} args - Arguments to find a UnsplashCollection
     * @example
     * // Get one UnsplashCollection
     * const unsplashCollection = await prisma.unsplashCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnsplashCollectionFindFirstArgs>(args?: SelectSubset<T, UnsplashCollectionFindFirstArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnsplashCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionFindFirstOrThrowArgs} args - Arguments to find a UnsplashCollection
     * @example
     * // Get one UnsplashCollection
     * const unsplashCollection = await prisma.unsplashCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnsplashCollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, UnsplashCollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnsplashCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnsplashCollections
     * const unsplashCollections = await prisma.unsplashCollection.findMany()
     * 
     * // Get first 10 UnsplashCollections
     * const unsplashCollections = await prisma.unsplashCollection.findMany({ take: 10 })
     * 
     * // Only select the `collectionId`
     * const unsplashCollectionWithCollectionIdOnly = await prisma.unsplashCollection.findMany({ select: { collectionId: true } })
     * 
     */
    findMany<T extends UnsplashCollectionFindManyArgs>(args?: SelectSubset<T, UnsplashCollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnsplashCollection.
     * @param {UnsplashCollectionCreateArgs} args - Arguments to create a UnsplashCollection.
     * @example
     * // Create one UnsplashCollection
     * const UnsplashCollection = await prisma.unsplashCollection.create({
     *   data: {
     *     // ... data to create a UnsplashCollection
     *   }
     * })
     * 
     */
    create<T extends UnsplashCollectionCreateArgs>(args: SelectSubset<T, UnsplashCollectionCreateArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnsplashCollections.
     * @param {UnsplashCollectionCreateManyArgs} args - Arguments to create many UnsplashCollections.
     * @example
     * // Create many UnsplashCollections
     * const unsplashCollection = await prisma.unsplashCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnsplashCollectionCreateManyArgs>(args?: SelectSubset<T, UnsplashCollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnsplashCollections and returns the data saved in the database.
     * @param {UnsplashCollectionCreateManyAndReturnArgs} args - Arguments to create many UnsplashCollections.
     * @example
     * // Create many UnsplashCollections
     * const unsplashCollection = await prisma.unsplashCollection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnsplashCollections and only return the `collectionId`
     * const unsplashCollectionWithCollectionIdOnly = await prisma.unsplashCollection.createManyAndReturn({
     *   select: { collectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnsplashCollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, UnsplashCollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnsplashCollection.
     * @param {UnsplashCollectionDeleteArgs} args - Arguments to delete one UnsplashCollection.
     * @example
     * // Delete one UnsplashCollection
     * const UnsplashCollection = await prisma.unsplashCollection.delete({
     *   where: {
     *     // ... filter to delete one UnsplashCollection
     *   }
     * })
     * 
     */
    delete<T extends UnsplashCollectionDeleteArgs>(args: SelectSubset<T, UnsplashCollectionDeleteArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnsplashCollection.
     * @param {UnsplashCollectionUpdateArgs} args - Arguments to update one UnsplashCollection.
     * @example
     * // Update one UnsplashCollection
     * const unsplashCollection = await prisma.unsplashCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnsplashCollectionUpdateArgs>(args: SelectSubset<T, UnsplashCollectionUpdateArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnsplashCollections.
     * @param {UnsplashCollectionDeleteManyArgs} args - Arguments to filter UnsplashCollections to delete.
     * @example
     * // Delete a few UnsplashCollections
     * const { count } = await prisma.unsplashCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnsplashCollectionDeleteManyArgs>(args?: SelectSubset<T, UnsplashCollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnsplashCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnsplashCollections
     * const unsplashCollection = await prisma.unsplashCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnsplashCollectionUpdateManyArgs>(args: SelectSubset<T, UnsplashCollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnsplashCollections and returns the data updated in the database.
     * @param {UnsplashCollectionUpdateManyAndReturnArgs} args - Arguments to update many UnsplashCollections.
     * @example
     * // Update many UnsplashCollections
     * const unsplashCollection = await prisma.unsplashCollection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnsplashCollections and only return the `collectionId`
     * const unsplashCollectionWithCollectionIdOnly = await prisma.unsplashCollection.updateManyAndReturn({
     *   select: { collectionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnsplashCollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, UnsplashCollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnsplashCollection.
     * @param {UnsplashCollectionUpsertArgs} args - Arguments to update or create a UnsplashCollection.
     * @example
     * // Update or create a UnsplashCollection
     * const unsplashCollection = await prisma.unsplashCollection.upsert({
     *   create: {
     *     // ... data to create a UnsplashCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnsplashCollection we want to update
     *   }
     * })
     */
    upsert<T extends UnsplashCollectionUpsertArgs>(args: SelectSubset<T, UnsplashCollectionUpsertArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnsplashCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionCountArgs} args - Arguments to filter UnsplashCollections to count.
     * @example
     * // Count the number of UnsplashCollections
     * const count = await prisma.unsplashCollection.count({
     *   where: {
     *     // ... the filter for the UnsplashCollections we want to count
     *   }
     * })
    **/
    count<T extends UnsplashCollectionCountArgs>(
      args?: Subset<T, UnsplashCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnsplashCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnsplashCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnsplashCollectionAggregateArgs>(args: Subset<T, UnsplashCollectionAggregateArgs>): Prisma.PrismaPromise<GetUnsplashCollectionAggregateType<T>>

    /**
     * Group by UnsplashCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsplashCollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnsplashCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnsplashCollectionGroupByArgs['orderBy'] }
        : { orderBy?: UnsplashCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnsplashCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnsplashCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnsplashCollection model
   */
  readonly fields: UnsplashCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnsplashCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnsplashCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingestedUnsplashImages<T extends UnsplashCollection$ingestedUnsplashImagesArgs<ExtArgs> = {}>(args?: Subset<T, UnsplashCollection$ingestedUnsplashImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ScheduledImage<T extends UnsplashCollection$ScheduledImageArgs<ExtArgs> = {}>(args?: Subset<T, UnsplashCollection$ScheduledImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnsplashCollection model
   */
  interface UnsplashCollectionFieldRefs {
    readonly collectionId: FieldRef<"UnsplashCollection", 'String'>
    readonly ingestionComplete: FieldRef<"UnsplashCollection", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UnsplashCollection findUnique
   */
  export type UnsplashCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UnsplashCollection to fetch.
     */
    where: UnsplashCollectionWhereUniqueInput
  }

  /**
   * UnsplashCollection findUniqueOrThrow
   */
  export type UnsplashCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UnsplashCollection to fetch.
     */
    where: UnsplashCollectionWhereUniqueInput
  }

  /**
   * UnsplashCollection findFirst
   */
  export type UnsplashCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UnsplashCollection to fetch.
     */
    where?: UnsplashCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsplashCollections to fetch.
     */
    orderBy?: UnsplashCollectionOrderByWithRelationInput | UnsplashCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnsplashCollections.
     */
    cursor?: UnsplashCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsplashCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsplashCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnsplashCollections.
     */
    distinct?: UnsplashCollectionScalarFieldEnum | UnsplashCollectionScalarFieldEnum[]
  }

  /**
   * UnsplashCollection findFirstOrThrow
   */
  export type UnsplashCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UnsplashCollection to fetch.
     */
    where?: UnsplashCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsplashCollections to fetch.
     */
    orderBy?: UnsplashCollectionOrderByWithRelationInput | UnsplashCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnsplashCollections.
     */
    cursor?: UnsplashCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsplashCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsplashCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnsplashCollections.
     */
    distinct?: UnsplashCollectionScalarFieldEnum | UnsplashCollectionScalarFieldEnum[]
  }

  /**
   * UnsplashCollection findMany
   */
  export type UnsplashCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UnsplashCollections to fetch.
     */
    where?: UnsplashCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsplashCollections to fetch.
     */
    orderBy?: UnsplashCollectionOrderByWithRelationInput | UnsplashCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnsplashCollections.
     */
    cursor?: UnsplashCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsplashCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsplashCollections.
     */
    skip?: number
    distinct?: UnsplashCollectionScalarFieldEnum | UnsplashCollectionScalarFieldEnum[]
  }

  /**
   * UnsplashCollection create
   */
  export type UnsplashCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a UnsplashCollection.
     */
    data: XOR<UnsplashCollectionCreateInput, UnsplashCollectionUncheckedCreateInput>
  }

  /**
   * UnsplashCollection createMany
   */
  export type UnsplashCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnsplashCollections.
     */
    data: UnsplashCollectionCreateManyInput | UnsplashCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnsplashCollection createManyAndReturn
   */
  export type UnsplashCollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * The data used to create many UnsplashCollections.
     */
    data: UnsplashCollectionCreateManyInput | UnsplashCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnsplashCollection update
   */
  export type UnsplashCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a UnsplashCollection.
     */
    data: XOR<UnsplashCollectionUpdateInput, UnsplashCollectionUncheckedUpdateInput>
    /**
     * Choose, which UnsplashCollection to update.
     */
    where: UnsplashCollectionWhereUniqueInput
  }

  /**
   * UnsplashCollection updateMany
   */
  export type UnsplashCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnsplashCollections.
     */
    data: XOR<UnsplashCollectionUpdateManyMutationInput, UnsplashCollectionUncheckedUpdateManyInput>
    /**
     * Filter which UnsplashCollections to update
     */
    where?: UnsplashCollectionWhereInput
    /**
     * Limit how many UnsplashCollections to update.
     */
    limit?: number
  }

  /**
   * UnsplashCollection updateManyAndReturn
   */
  export type UnsplashCollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * The data used to update UnsplashCollections.
     */
    data: XOR<UnsplashCollectionUpdateManyMutationInput, UnsplashCollectionUncheckedUpdateManyInput>
    /**
     * Filter which UnsplashCollections to update
     */
    where?: UnsplashCollectionWhereInput
    /**
     * Limit how many UnsplashCollections to update.
     */
    limit?: number
  }

  /**
   * UnsplashCollection upsert
   */
  export type UnsplashCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the UnsplashCollection to update in case it exists.
     */
    where: UnsplashCollectionWhereUniqueInput
    /**
     * In case the UnsplashCollection found by the `where` argument doesn't exist, create a new UnsplashCollection with this data.
     */
    create: XOR<UnsplashCollectionCreateInput, UnsplashCollectionUncheckedCreateInput>
    /**
     * In case the UnsplashCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnsplashCollectionUpdateInput, UnsplashCollectionUncheckedUpdateInput>
  }

  /**
   * UnsplashCollection delete
   */
  export type UnsplashCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    /**
     * Filter which UnsplashCollection to delete.
     */
    where: UnsplashCollectionWhereUniqueInput
  }

  /**
   * UnsplashCollection deleteMany
   */
  export type UnsplashCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnsplashCollections to delete
     */
    where?: UnsplashCollectionWhereInput
    /**
     * Limit how many UnsplashCollections to delete.
     */
    limit?: number
  }

  /**
   * UnsplashCollection.ingestedUnsplashImages
   */
  export type UnsplashCollection$ingestedUnsplashImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    where?: IngestedUnsplashImageWhereInput
    orderBy?: IngestedUnsplashImageOrderByWithRelationInput | IngestedUnsplashImageOrderByWithRelationInput[]
    cursor?: IngestedUnsplashImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngestedUnsplashImageScalarFieldEnum | IngestedUnsplashImageScalarFieldEnum[]
  }

  /**
   * UnsplashCollection.ScheduledImage
   */
  export type UnsplashCollection$ScheduledImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    where?: ScheduledImageWhereInput
    orderBy?: ScheduledImageOrderByWithRelationInput | ScheduledImageOrderByWithRelationInput[]
    cursor?: ScheduledImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledImageScalarFieldEnum | ScheduledImageScalarFieldEnum[]
  }

  /**
   * UnsplashCollection without action
   */
  export type UnsplashCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
  }


  /**
   * Model IngestedUnsplashImage
   */

  export type AggregateIngestedUnsplashImage = {
    _count: IngestedUnsplashImageCountAggregateOutputType | null
    _min: IngestedUnsplashImageMinAggregateOutputType | null
    _max: IngestedUnsplashImageMaxAggregateOutputType | null
  }

  export type IngestedUnsplashImageMinAggregateOutputType = {
    ingestedImageId: string | null
    source: $Enums.ImageSource | null
    url: string | null
    sourceId: string | null
    approved: boolean | null
    animalType: $Enums.AnimalType | null
    collectionId: string | null
    dateIngested: Date | null
  }

  export type IngestedUnsplashImageMaxAggregateOutputType = {
    ingestedImageId: string | null
    source: $Enums.ImageSource | null
    url: string | null
    sourceId: string | null
    approved: boolean | null
    animalType: $Enums.AnimalType | null
    collectionId: string | null
    dateIngested: Date | null
  }

  export type IngestedUnsplashImageCountAggregateOutputType = {
    ingestedImageId: number
    source: number
    url: number
    sourceId: number
    approved: number
    animalType: number
    collectionId: number
    dateIngested: number
    _all: number
  }


  export type IngestedUnsplashImageMinAggregateInputType = {
    ingestedImageId?: true
    source?: true
    url?: true
    sourceId?: true
    approved?: true
    animalType?: true
    collectionId?: true
    dateIngested?: true
  }

  export type IngestedUnsplashImageMaxAggregateInputType = {
    ingestedImageId?: true
    source?: true
    url?: true
    sourceId?: true
    approved?: true
    animalType?: true
    collectionId?: true
    dateIngested?: true
  }

  export type IngestedUnsplashImageCountAggregateInputType = {
    ingestedImageId?: true
    source?: true
    url?: true
    sourceId?: true
    approved?: true
    animalType?: true
    collectionId?: true
    dateIngested?: true
    _all?: true
  }

  export type IngestedUnsplashImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestedUnsplashImage to aggregate.
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestedUnsplashImages to fetch.
     */
    orderBy?: IngestedUnsplashImageOrderByWithRelationInput | IngestedUnsplashImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestedUnsplashImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestedUnsplashImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestedUnsplashImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestedUnsplashImages
    **/
    _count?: true | IngestedUnsplashImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestedUnsplashImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestedUnsplashImageMaxAggregateInputType
  }

  export type GetIngestedUnsplashImageAggregateType<T extends IngestedUnsplashImageAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestedUnsplashImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestedUnsplashImage[P]>
      : GetScalarType<T[P], AggregateIngestedUnsplashImage[P]>
  }




  export type IngestedUnsplashImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestedUnsplashImageWhereInput
    orderBy?: IngestedUnsplashImageOrderByWithAggregationInput | IngestedUnsplashImageOrderByWithAggregationInput[]
    by: IngestedUnsplashImageScalarFieldEnum[] | IngestedUnsplashImageScalarFieldEnum
    having?: IngestedUnsplashImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestedUnsplashImageCountAggregateInputType | true
    _min?: IngestedUnsplashImageMinAggregateInputType
    _max?: IngestedUnsplashImageMaxAggregateInputType
  }

  export type IngestedUnsplashImageGroupByOutputType = {
    ingestedImageId: string
    source: $Enums.ImageSource
    url: string
    sourceId: string
    approved: boolean | null
    animalType: $Enums.AnimalType
    collectionId: string
    dateIngested: Date
    _count: IngestedUnsplashImageCountAggregateOutputType | null
    _min: IngestedUnsplashImageMinAggregateOutputType | null
    _max: IngestedUnsplashImageMaxAggregateOutputType | null
  }

  type GetIngestedUnsplashImageGroupByPayload<T extends IngestedUnsplashImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestedUnsplashImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestedUnsplashImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestedUnsplashImageGroupByOutputType[P]>
            : GetScalarType<T[P], IngestedUnsplashImageGroupByOutputType[P]>
        }
      >
    >


  export type IngestedUnsplashImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingestedImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    approved?: boolean
    animalType?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestedUnsplashImage"]>

  export type IngestedUnsplashImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingestedImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    approved?: boolean
    animalType?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestedUnsplashImage"]>

  export type IngestedUnsplashImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingestedImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    approved?: boolean
    animalType?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingestedUnsplashImage"]>

  export type IngestedUnsplashImageSelectScalar = {
    ingestedImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    approved?: boolean
    animalType?: boolean
    collectionId?: boolean
    dateIngested?: boolean
  }

  export type IngestedUnsplashImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ingestedImageId" | "source" | "url" | "sourceId" | "approved" | "animalType" | "collectionId" | "dateIngested", ExtArgs["result"]["ingestedUnsplashImage"]>
  export type IngestedUnsplashImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }
  export type IngestedUnsplashImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }
  export type IngestedUnsplashImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }

  export type $IngestedUnsplashImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestedUnsplashImage"
    objects: {
      collection: Prisma.$UnsplashCollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ingestedImageId: string
      source: $Enums.ImageSource
      url: string
      sourceId: string
      approved: boolean | null
      animalType: $Enums.AnimalType
      collectionId: string
      dateIngested: Date
    }, ExtArgs["result"]["ingestedUnsplashImage"]>
    composites: {}
  }

  type IngestedUnsplashImageGetPayload<S extends boolean | null | undefined | IngestedUnsplashImageDefaultArgs> = $Result.GetResult<Prisma.$IngestedUnsplashImagePayload, S>

  type IngestedUnsplashImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngestedUnsplashImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngestedUnsplashImageCountAggregateInputType | true
    }

  export interface IngestedUnsplashImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestedUnsplashImage'], meta: { name: 'IngestedUnsplashImage' } }
    /**
     * Find zero or one IngestedUnsplashImage that matches the filter.
     * @param {IngestedUnsplashImageFindUniqueArgs} args - Arguments to find a IngestedUnsplashImage
     * @example
     * // Get one IngestedUnsplashImage
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestedUnsplashImageFindUniqueArgs>(args: SelectSubset<T, IngestedUnsplashImageFindUniqueArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngestedUnsplashImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngestedUnsplashImageFindUniqueOrThrowArgs} args - Arguments to find a IngestedUnsplashImage
     * @example
     * // Get one IngestedUnsplashImage
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestedUnsplashImageFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestedUnsplashImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestedUnsplashImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageFindFirstArgs} args - Arguments to find a IngestedUnsplashImage
     * @example
     * // Get one IngestedUnsplashImage
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestedUnsplashImageFindFirstArgs>(args?: SelectSubset<T, IngestedUnsplashImageFindFirstArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestedUnsplashImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageFindFirstOrThrowArgs} args - Arguments to find a IngestedUnsplashImage
     * @example
     * // Get one IngestedUnsplashImage
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestedUnsplashImageFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestedUnsplashImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngestedUnsplashImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestedUnsplashImages
     * const ingestedUnsplashImages = await prisma.ingestedUnsplashImage.findMany()
     * 
     * // Get first 10 IngestedUnsplashImages
     * const ingestedUnsplashImages = await prisma.ingestedUnsplashImage.findMany({ take: 10 })
     * 
     * // Only select the `ingestedImageId`
     * const ingestedUnsplashImageWithIngestedImageIdOnly = await prisma.ingestedUnsplashImage.findMany({ select: { ingestedImageId: true } })
     * 
     */
    findMany<T extends IngestedUnsplashImageFindManyArgs>(args?: SelectSubset<T, IngestedUnsplashImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngestedUnsplashImage.
     * @param {IngestedUnsplashImageCreateArgs} args - Arguments to create a IngestedUnsplashImage.
     * @example
     * // Create one IngestedUnsplashImage
     * const IngestedUnsplashImage = await prisma.ingestedUnsplashImage.create({
     *   data: {
     *     // ... data to create a IngestedUnsplashImage
     *   }
     * })
     * 
     */
    create<T extends IngestedUnsplashImageCreateArgs>(args: SelectSubset<T, IngestedUnsplashImageCreateArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngestedUnsplashImages.
     * @param {IngestedUnsplashImageCreateManyArgs} args - Arguments to create many IngestedUnsplashImages.
     * @example
     * // Create many IngestedUnsplashImages
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestedUnsplashImageCreateManyArgs>(args?: SelectSubset<T, IngestedUnsplashImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestedUnsplashImages and returns the data saved in the database.
     * @param {IngestedUnsplashImageCreateManyAndReturnArgs} args - Arguments to create many IngestedUnsplashImages.
     * @example
     * // Create many IngestedUnsplashImages
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestedUnsplashImages and only return the `ingestedImageId`
     * const ingestedUnsplashImageWithIngestedImageIdOnly = await prisma.ingestedUnsplashImage.createManyAndReturn({
     *   select: { ingestedImageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestedUnsplashImageCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestedUnsplashImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngestedUnsplashImage.
     * @param {IngestedUnsplashImageDeleteArgs} args - Arguments to delete one IngestedUnsplashImage.
     * @example
     * // Delete one IngestedUnsplashImage
     * const IngestedUnsplashImage = await prisma.ingestedUnsplashImage.delete({
     *   where: {
     *     // ... filter to delete one IngestedUnsplashImage
     *   }
     * })
     * 
     */
    delete<T extends IngestedUnsplashImageDeleteArgs>(args: SelectSubset<T, IngestedUnsplashImageDeleteArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngestedUnsplashImage.
     * @param {IngestedUnsplashImageUpdateArgs} args - Arguments to update one IngestedUnsplashImage.
     * @example
     * // Update one IngestedUnsplashImage
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestedUnsplashImageUpdateArgs>(args: SelectSubset<T, IngestedUnsplashImageUpdateArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngestedUnsplashImages.
     * @param {IngestedUnsplashImageDeleteManyArgs} args - Arguments to filter IngestedUnsplashImages to delete.
     * @example
     * // Delete a few IngestedUnsplashImages
     * const { count } = await prisma.ingestedUnsplashImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestedUnsplashImageDeleteManyArgs>(args?: SelectSubset<T, IngestedUnsplashImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestedUnsplashImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestedUnsplashImages
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestedUnsplashImageUpdateManyArgs>(args: SelectSubset<T, IngestedUnsplashImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestedUnsplashImages and returns the data updated in the database.
     * @param {IngestedUnsplashImageUpdateManyAndReturnArgs} args - Arguments to update many IngestedUnsplashImages.
     * @example
     * // Update many IngestedUnsplashImages
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngestedUnsplashImages and only return the `ingestedImageId`
     * const ingestedUnsplashImageWithIngestedImageIdOnly = await prisma.ingestedUnsplashImage.updateManyAndReturn({
     *   select: { ingestedImageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngestedUnsplashImageUpdateManyAndReturnArgs>(args: SelectSubset<T, IngestedUnsplashImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngestedUnsplashImage.
     * @param {IngestedUnsplashImageUpsertArgs} args - Arguments to update or create a IngestedUnsplashImage.
     * @example
     * // Update or create a IngestedUnsplashImage
     * const ingestedUnsplashImage = await prisma.ingestedUnsplashImage.upsert({
     *   create: {
     *     // ... data to create a IngestedUnsplashImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestedUnsplashImage we want to update
     *   }
     * })
     */
    upsert<T extends IngestedUnsplashImageUpsertArgs>(args: SelectSubset<T, IngestedUnsplashImageUpsertArgs<ExtArgs>>): Prisma__IngestedUnsplashImageClient<$Result.GetResult<Prisma.$IngestedUnsplashImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngestedUnsplashImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageCountArgs} args - Arguments to filter IngestedUnsplashImages to count.
     * @example
     * // Count the number of IngestedUnsplashImages
     * const count = await prisma.ingestedUnsplashImage.count({
     *   where: {
     *     // ... the filter for the IngestedUnsplashImages we want to count
     *   }
     * })
    **/
    count<T extends IngestedUnsplashImageCountArgs>(
      args?: Subset<T, IngestedUnsplashImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestedUnsplashImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestedUnsplashImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngestedUnsplashImageAggregateArgs>(args: Subset<T, IngestedUnsplashImageAggregateArgs>): Prisma.PrismaPromise<GetIngestedUnsplashImageAggregateType<T>>

    /**
     * Group by IngestedUnsplashImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestedUnsplashImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngestedUnsplashImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestedUnsplashImageGroupByArgs['orderBy'] }
        : { orderBy?: IngestedUnsplashImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngestedUnsplashImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestedUnsplashImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestedUnsplashImage model
   */
  readonly fields: IngestedUnsplashImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestedUnsplashImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestedUnsplashImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends UnsplashCollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnsplashCollectionDefaultArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IngestedUnsplashImage model
   */
  interface IngestedUnsplashImageFieldRefs {
    readonly ingestedImageId: FieldRef<"IngestedUnsplashImage", 'String'>
    readonly source: FieldRef<"IngestedUnsplashImage", 'ImageSource'>
    readonly url: FieldRef<"IngestedUnsplashImage", 'String'>
    readonly sourceId: FieldRef<"IngestedUnsplashImage", 'String'>
    readonly approved: FieldRef<"IngestedUnsplashImage", 'Boolean'>
    readonly animalType: FieldRef<"IngestedUnsplashImage", 'AnimalType'>
    readonly collectionId: FieldRef<"IngestedUnsplashImage", 'String'>
    readonly dateIngested: FieldRef<"IngestedUnsplashImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestedUnsplashImage findUnique
   */
  export type IngestedUnsplashImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * Filter, which IngestedUnsplashImage to fetch.
     */
    where: IngestedUnsplashImageWhereUniqueInput
  }

  /**
   * IngestedUnsplashImage findUniqueOrThrow
   */
  export type IngestedUnsplashImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * Filter, which IngestedUnsplashImage to fetch.
     */
    where: IngestedUnsplashImageWhereUniqueInput
  }

  /**
   * IngestedUnsplashImage findFirst
   */
  export type IngestedUnsplashImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * Filter, which IngestedUnsplashImage to fetch.
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestedUnsplashImages to fetch.
     */
    orderBy?: IngestedUnsplashImageOrderByWithRelationInput | IngestedUnsplashImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestedUnsplashImages.
     */
    cursor?: IngestedUnsplashImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestedUnsplashImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestedUnsplashImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestedUnsplashImages.
     */
    distinct?: IngestedUnsplashImageScalarFieldEnum | IngestedUnsplashImageScalarFieldEnum[]
  }

  /**
   * IngestedUnsplashImage findFirstOrThrow
   */
  export type IngestedUnsplashImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * Filter, which IngestedUnsplashImage to fetch.
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestedUnsplashImages to fetch.
     */
    orderBy?: IngestedUnsplashImageOrderByWithRelationInput | IngestedUnsplashImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestedUnsplashImages.
     */
    cursor?: IngestedUnsplashImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestedUnsplashImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestedUnsplashImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestedUnsplashImages.
     */
    distinct?: IngestedUnsplashImageScalarFieldEnum | IngestedUnsplashImageScalarFieldEnum[]
  }

  /**
   * IngestedUnsplashImage findMany
   */
  export type IngestedUnsplashImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * Filter, which IngestedUnsplashImages to fetch.
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestedUnsplashImages to fetch.
     */
    orderBy?: IngestedUnsplashImageOrderByWithRelationInput | IngestedUnsplashImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestedUnsplashImages.
     */
    cursor?: IngestedUnsplashImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestedUnsplashImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestedUnsplashImages.
     */
    skip?: number
    distinct?: IngestedUnsplashImageScalarFieldEnum | IngestedUnsplashImageScalarFieldEnum[]
  }

  /**
   * IngestedUnsplashImage create
   */
  export type IngestedUnsplashImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * The data needed to create a IngestedUnsplashImage.
     */
    data: XOR<IngestedUnsplashImageCreateInput, IngestedUnsplashImageUncheckedCreateInput>
  }

  /**
   * IngestedUnsplashImage createMany
   */
  export type IngestedUnsplashImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestedUnsplashImages.
     */
    data: IngestedUnsplashImageCreateManyInput | IngestedUnsplashImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngestedUnsplashImage createManyAndReturn
   */
  export type IngestedUnsplashImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * The data used to create many IngestedUnsplashImages.
     */
    data: IngestedUnsplashImageCreateManyInput | IngestedUnsplashImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngestedUnsplashImage update
   */
  export type IngestedUnsplashImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * The data needed to update a IngestedUnsplashImage.
     */
    data: XOR<IngestedUnsplashImageUpdateInput, IngestedUnsplashImageUncheckedUpdateInput>
    /**
     * Choose, which IngestedUnsplashImage to update.
     */
    where: IngestedUnsplashImageWhereUniqueInput
  }

  /**
   * IngestedUnsplashImage updateMany
   */
  export type IngestedUnsplashImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestedUnsplashImages.
     */
    data: XOR<IngestedUnsplashImageUpdateManyMutationInput, IngestedUnsplashImageUncheckedUpdateManyInput>
    /**
     * Filter which IngestedUnsplashImages to update
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * Limit how many IngestedUnsplashImages to update.
     */
    limit?: number
  }

  /**
   * IngestedUnsplashImage updateManyAndReturn
   */
  export type IngestedUnsplashImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * The data used to update IngestedUnsplashImages.
     */
    data: XOR<IngestedUnsplashImageUpdateManyMutationInput, IngestedUnsplashImageUncheckedUpdateManyInput>
    /**
     * Filter which IngestedUnsplashImages to update
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * Limit how many IngestedUnsplashImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngestedUnsplashImage upsert
   */
  export type IngestedUnsplashImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * The filter to search for the IngestedUnsplashImage to update in case it exists.
     */
    where: IngestedUnsplashImageWhereUniqueInput
    /**
     * In case the IngestedUnsplashImage found by the `where` argument doesn't exist, create a new IngestedUnsplashImage with this data.
     */
    create: XOR<IngestedUnsplashImageCreateInput, IngestedUnsplashImageUncheckedCreateInput>
    /**
     * In case the IngestedUnsplashImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestedUnsplashImageUpdateInput, IngestedUnsplashImageUncheckedUpdateInput>
  }

  /**
   * IngestedUnsplashImage delete
   */
  export type IngestedUnsplashImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
    /**
     * Filter which IngestedUnsplashImage to delete.
     */
    where: IngestedUnsplashImageWhereUniqueInput
  }

  /**
   * IngestedUnsplashImage deleteMany
   */
  export type IngestedUnsplashImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestedUnsplashImages to delete
     */
    where?: IngestedUnsplashImageWhereInput
    /**
     * Limit how many IngestedUnsplashImages to delete.
     */
    limit?: number
  }

  /**
   * IngestedUnsplashImage without action
   */
  export type IngestedUnsplashImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestedUnsplashImage
     */
    select?: IngestedUnsplashImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestedUnsplashImage
     */
    omit?: IngestedUnsplashImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngestedUnsplashImageInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledImage
   */

  export type AggregateScheduledImage = {
    _count: ScheduledImageCountAggregateOutputType | null
    _avg: ScheduledImageAvgAggregateOutputType | null
    _sum: ScheduledImageSumAggregateOutputType | null
    _min: ScheduledImageMinAggregateOutputType | null
    _max: ScheduledImageMaxAggregateOutputType | null
  }

  export type ScheduledImageAvgAggregateOutputType = {
    index: number | null
  }

  export type ScheduledImageSumAggregateOutputType = {
    index: number | null
  }

  export type ScheduledImageMinAggregateOutputType = {
    scheduledImageId: string | null
    source: $Enums.ImageSource | null
    url: string | null
    sourceId: string | null
    published: Date | null
    collectionId: string | null
    dateIngested: Date | null
    animalType: $Enums.AnimalType | null
    index: number | null
  }

  export type ScheduledImageMaxAggregateOutputType = {
    scheduledImageId: string | null
    source: $Enums.ImageSource | null
    url: string | null
    sourceId: string | null
    published: Date | null
    collectionId: string | null
    dateIngested: Date | null
    animalType: $Enums.AnimalType | null
    index: number | null
  }

  export type ScheduledImageCountAggregateOutputType = {
    scheduledImageId: number
    source: number
    url: number
    sourceId: number
    published: number
    collectionId: number
    dateIngested: number
    animalType: number
    index: number
    _all: number
  }


  export type ScheduledImageAvgAggregateInputType = {
    index?: true
  }

  export type ScheduledImageSumAggregateInputType = {
    index?: true
  }

  export type ScheduledImageMinAggregateInputType = {
    scheduledImageId?: true
    source?: true
    url?: true
    sourceId?: true
    published?: true
    collectionId?: true
    dateIngested?: true
    animalType?: true
    index?: true
  }

  export type ScheduledImageMaxAggregateInputType = {
    scheduledImageId?: true
    source?: true
    url?: true
    sourceId?: true
    published?: true
    collectionId?: true
    dateIngested?: true
    animalType?: true
    index?: true
  }

  export type ScheduledImageCountAggregateInputType = {
    scheduledImageId?: true
    source?: true
    url?: true
    sourceId?: true
    published?: true
    collectionId?: true
    dateIngested?: true
    animalType?: true
    index?: true
    _all?: true
  }

  export type ScheduledImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledImage to aggregate.
     */
    where?: ScheduledImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledImages to fetch.
     */
    orderBy?: ScheduledImageOrderByWithRelationInput | ScheduledImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledImages
    **/
    _count?: true | ScheduledImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduledImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduledImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledImageMaxAggregateInputType
  }

  export type GetScheduledImageAggregateType<T extends ScheduledImageAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledImage[P]>
      : GetScalarType<T[P], AggregateScheduledImage[P]>
  }




  export type ScheduledImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledImageWhereInput
    orderBy?: ScheduledImageOrderByWithAggregationInput | ScheduledImageOrderByWithAggregationInput[]
    by: ScheduledImageScalarFieldEnum[] | ScheduledImageScalarFieldEnum
    having?: ScheduledImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledImageCountAggregateInputType | true
    _avg?: ScheduledImageAvgAggregateInputType
    _sum?: ScheduledImageSumAggregateInputType
    _min?: ScheduledImageMinAggregateInputType
    _max?: ScheduledImageMaxAggregateInputType
  }

  export type ScheduledImageGroupByOutputType = {
    scheduledImageId: string
    source: $Enums.ImageSource
    url: string
    sourceId: string | null
    published: Date | null
    collectionId: string | null
    dateIngested: Date
    animalType: $Enums.AnimalType
    index: number | null
    _count: ScheduledImageCountAggregateOutputType | null
    _avg: ScheduledImageAvgAggregateOutputType | null
    _sum: ScheduledImageSumAggregateOutputType | null
    _min: ScheduledImageMinAggregateOutputType | null
    _max: ScheduledImageMaxAggregateOutputType | null
  }

  type GetScheduledImageGroupByPayload<T extends ScheduledImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledImageGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledImageGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    animalType?: boolean
    index?: boolean
    collection?: boolean | ScheduledImage$collectionArgs<ExtArgs>
    users?: boolean | ScheduledImage$usersArgs<ExtArgs>
    _count?: boolean | ScheduledImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledImage"]>

  export type ScheduledImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    animalType?: boolean
    index?: boolean
    collection?: boolean | ScheduledImage$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledImage"]>

  export type ScheduledImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    animalType?: boolean
    index?: boolean
    collection?: boolean | ScheduledImage$collectionArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledImage"]>

  export type ScheduledImageSelectScalar = {
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    animalType?: boolean
    index?: boolean
  }

  export type ScheduledImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduledImageId" | "source" | "url" | "sourceId" | "published" | "collectionId" | "dateIngested" | "animalType" | "index", ExtArgs["result"]["scheduledImage"]>
  export type ScheduledImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | ScheduledImage$collectionArgs<ExtArgs>
    users?: boolean | ScheduledImage$usersArgs<ExtArgs>
    _count?: boolean | ScheduledImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduledImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | ScheduledImage$collectionArgs<ExtArgs>
  }
  export type ScheduledImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | ScheduledImage$collectionArgs<ExtArgs>
  }

  export type $ScheduledImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledImage"
    objects: {
      collection: Prisma.$UnsplashCollectionPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduledImageId: string
      source: $Enums.ImageSource
      url: string
      sourceId: string | null
      published: Date | null
      collectionId: string | null
      dateIngested: Date
      animalType: $Enums.AnimalType
      index: number | null
    }, ExtArgs["result"]["scheduledImage"]>
    composites: {}
  }

  type ScheduledImageGetPayload<S extends boolean | null | undefined | ScheduledImageDefaultArgs> = $Result.GetResult<Prisma.$ScheduledImagePayload, S>

  type ScheduledImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledImageCountAggregateInputType | true
    }

  export interface ScheduledImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledImage'], meta: { name: 'ScheduledImage' } }
    /**
     * Find zero or one ScheduledImage that matches the filter.
     * @param {ScheduledImageFindUniqueArgs} args - Arguments to find a ScheduledImage
     * @example
     * // Get one ScheduledImage
     * const scheduledImage = await prisma.scheduledImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledImageFindUniqueArgs>(args: SelectSubset<T, ScheduledImageFindUniqueArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledImageFindUniqueOrThrowArgs} args - Arguments to find a ScheduledImage
     * @example
     * // Get one ScheduledImage
     * const scheduledImage = await prisma.scheduledImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageFindFirstArgs} args - Arguments to find a ScheduledImage
     * @example
     * // Get one ScheduledImage
     * const scheduledImage = await prisma.scheduledImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledImageFindFirstArgs>(args?: SelectSubset<T, ScheduledImageFindFirstArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageFindFirstOrThrowArgs} args - Arguments to find a ScheduledImage
     * @example
     * // Get one ScheduledImage
     * const scheduledImage = await prisma.scheduledImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledImages
     * const scheduledImages = await prisma.scheduledImage.findMany()
     * 
     * // Get first 10 ScheduledImages
     * const scheduledImages = await prisma.scheduledImage.findMany({ take: 10 })
     * 
     * // Only select the `scheduledImageId`
     * const scheduledImageWithScheduledImageIdOnly = await prisma.scheduledImage.findMany({ select: { scheduledImageId: true } })
     * 
     */
    findMany<T extends ScheduledImageFindManyArgs>(args?: SelectSubset<T, ScheduledImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledImage.
     * @param {ScheduledImageCreateArgs} args - Arguments to create a ScheduledImage.
     * @example
     * // Create one ScheduledImage
     * const ScheduledImage = await prisma.scheduledImage.create({
     *   data: {
     *     // ... data to create a ScheduledImage
     *   }
     * })
     * 
     */
    create<T extends ScheduledImageCreateArgs>(args: SelectSubset<T, ScheduledImageCreateArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledImages.
     * @param {ScheduledImageCreateManyArgs} args - Arguments to create many ScheduledImages.
     * @example
     * // Create many ScheduledImages
     * const scheduledImage = await prisma.scheduledImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledImageCreateManyArgs>(args?: SelectSubset<T, ScheduledImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledImages and returns the data saved in the database.
     * @param {ScheduledImageCreateManyAndReturnArgs} args - Arguments to create many ScheduledImages.
     * @example
     * // Create many ScheduledImages
     * const scheduledImage = await prisma.scheduledImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledImages and only return the `scheduledImageId`
     * const scheduledImageWithScheduledImageIdOnly = await prisma.scheduledImage.createManyAndReturn({
     *   select: { scheduledImageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledImage.
     * @param {ScheduledImageDeleteArgs} args - Arguments to delete one ScheduledImage.
     * @example
     * // Delete one ScheduledImage
     * const ScheduledImage = await prisma.scheduledImage.delete({
     *   where: {
     *     // ... filter to delete one ScheduledImage
     *   }
     * })
     * 
     */
    delete<T extends ScheduledImageDeleteArgs>(args: SelectSubset<T, ScheduledImageDeleteArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledImage.
     * @param {ScheduledImageUpdateArgs} args - Arguments to update one ScheduledImage.
     * @example
     * // Update one ScheduledImage
     * const scheduledImage = await prisma.scheduledImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledImageUpdateArgs>(args: SelectSubset<T, ScheduledImageUpdateArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledImages.
     * @param {ScheduledImageDeleteManyArgs} args - Arguments to filter ScheduledImages to delete.
     * @example
     * // Delete a few ScheduledImages
     * const { count } = await prisma.scheduledImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledImageDeleteManyArgs>(args?: SelectSubset<T, ScheduledImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledImages
     * const scheduledImage = await prisma.scheduledImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledImageUpdateManyArgs>(args: SelectSubset<T, ScheduledImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledImages and returns the data updated in the database.
     * @param {ScheduledImageUpdateManyAndReturnArgs} args - Arguments to update many ScheduledImages.
     * @example
     * // Update many ScheduledImages
     * const scheduledImage = await prisma.scheduledImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledImages and only return the `scheduledImageId`
     * const scheduledImageWithScheduledImageIdOnly = await prisma.scheduledImage.updateManyAndReturn({
     *   select: { scheduledImageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduledImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledImage.
     * @param {ScheduledImageUpsertArgs} args - Arguments to update or create a ScheduledImage.
     * @example
     * // Update or create a ScheduledImage
     * const scheduledImage = await prisma.scheduledImage.upsert({
     *   create: {
     *     // ... data to create a ScheduledImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledImage we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledImageUpsertArgs>(args: SelectSubset<T, ScheduledImageUpsertArgs<ExtArgs>>): Prisma__ScheduledImageClient<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageCountArgs} args - Arguments to filter ScheduledImages to count.
     * @example
     * // Count the number of ScheduledImages
     * const count = await prisma.scheduledImage.count({
     *   where: {
     *     // ... the filter for the ScheduledImages we want to count
     *   }
     * })
    **/
    count<T extends ScheduledImageCountArgs>(
      args?: Subset<T, ScheduledImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduledImageAggregateArgs>(args: Subset<T, ScheduledImageAggregateArgs>): Prisma.PrismaPromise<GetScheduledImageAggregateType<T>>

    /**
     * Group by ScheduledImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduledImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledImageGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduledImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledImage model
   */
  readonly fields: ScheduledImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends ScheduledImage$collectionArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledImage$collectionArgs<ExtArgs>>): Prisma__UnsplashCollectionClient<$Result.GetResult<Prisma.$UnsplashCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends ScheduledImage$usersArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledImage$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduledImage model
   */
  interface ScheduledImageFieldRefs {
    readonly scheduledImageId: FieldRef<"ScheduledImage", 'String'>
    readonly source: FieldRef<"ScheduledImage", 'ImageSource'>
    readonly url: FieldRef<"ScheduledImage", 'String'>
    readonly sourceId: FieldRef<"ScheduledImage", 'String'>
    readonly published: FieldRef<"ScheduledImage", 'DateTime'>
    readonly collectionId: FieldRef<"ScheduledImage", 'String'>
    readonly dateIngested: FieldRef<"ScheduledImage", 'DateTime'>
    readonly animalType: FieldRef<"ScheduledImage", 'AnimalType'>
    readonly index: FieldRef<"ScheduledImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledImage findUnique
   */
  export type ScheduledImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledImage to fetch.
     */
    where: ScheduledImageWhereUniqueInput
  }

  /**
   * ScheduledImage findUniqueOrThrow
   */
  export type ScheduledImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledImage to fetch.
     */
    where: ScheduledImageWhereUniqueInput
  }

  /**
   * ScheduledImage findFirst
   */
  export type ScheduledImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledImage to fetch.
     */
    where?: ScheduledImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledImages to fetch.
     */
    orderBy?: ScheduledImageOrderByWithRelationInput | ScheduledImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledImages.
     */
    cursor?: ScheduledImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledImages.
     */
    distinct?: ScheduledImageScalarFieldEnum | ScheduledImageScalarFieldEnum[]
  }

  /**
   * ScheduledImage findFirstOrThrow
   */
  export type ScheduledImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledImage to fetch.
     */
    where?: ScheduledImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledImages to fetch.
     */
    orderBy?: ScheduledImageOrderByWithRelationInput | ScheduledImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledImages.
     */
    cursor?: ScheduledImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledImages.
     */
    distinct?: ScheduledImageScalarFieldEnum | ScheduledImageScalarFieldEnum[]
  }

  /**
   * ScheduledImage findMany
   */
  export type ScheduledImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledImages to fetch.
     */
    where?: ScheduledImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledImages to fetch.
     */
    orderBy?: ScheduledImageOrderByWithRelationInput | ScheduledImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledImages.
     */
    cursor?: ScheduledImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledImages.
     */
    skip?: number
    distinct?: ScheduledImageScalarFieldEnum | ScheduledImageScalarFieldEnum[]
  }

  /**
   * ScheduledImage create
   */
  export type ScheduledImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledImage.
     */
    data: XOR<ScheduledImageCreateInput, ScheduledImageUncheckedCreateInput>
  }

  /**
   * ScheduledImage createMany
   */
  export type ScheduledImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledImages.
     */
    data: ScheduledImageCreateManyInput | ScheduledImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduledImage createManyAndReturn
   */
  export type ScheduledImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledImages.
     */
    data: ScheduledImageCreateManyInput | ScheduledImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledImage update
   */
  export type ScheduledImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledImage.
     */
    data: XOR<ScheduledImageUpdateInput, ScheduledImageUncheckedUpdateInput>
    /**
     * Choose, which ScheduledImage to update.
     */
    where: ScheduledImageWhereUniqueInput
  }

  /**
   * ScheduledImage updateMany
   */
  export type ScheduledImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledImages.
     */
    data: XOR<ScheduledImageUpdateManyMutationInput, ScheduledImageUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledImages to update
     */
    where?: ScheduledImageWhereInput
    /**
     * Limit how many ScheduledImages to update.
     */
    limit?: number
  }

  /**
   * ScheduledImage updateManyAndReturn
   */
  export type ScheduledImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledImages.
     */
    data: XOR<ScheduledImageUpdateManyMutationInput, ScheduledImageUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledImages to update
     */
    where?: ScheduledImageWhereInput
    /**
     * Limit how many ScheduledImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledImage upsert
   */
  export type ScheduledImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledImage to update in case it exists.
     */
    where: ScheduledImageWhereUniqueInput
    /**
     * In case the ScheduledImage found by the `where` argument doesn't exist, create a new ScheduledImage with this data.
     */
    create: XOR<ScheduledImageCreateInput, ScheduledImageUncheckedCreateInput>
    /**
     * In case the ScheduledImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledImageUpdateInput, ScheduledImageUncheckedUpdateInput>
  }

  /**
   * ScheduledImage delete
   */
  export type ScheduledImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    /**
     * Filter which ScheduledImage to delete.
     */
    where: ScheduledImageWhereUniqueInput
  }

  /**
   * ScheduledImage deleteMany
   */
  export type ScheduledImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledImages to delete
     */
    where?: ScheduledImageWhereInput
    /**
     * Limit how many ScheduledImages to delete.
     */
    limit?: number
  }

  /**
   * ScheduledImage.collection
   */
  export type ScheduledImage$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsplashCollection
     */
    select?: UnsplashCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsplashCollection
     */
    omit?: UnsplashCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsplashCollectionInclude<ExtArgs> | null
    where?: UnsplashCollectionWhereInput
  }

  /**
   * ScheduledImage.users
   */
  export type ScheduledImage$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * ScheduledImage without action
   */
  export type ScheduledImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      favourites: Prisma.$ScheduledImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledImage
     */
    select?: ScheduledImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledImage
     */
    omit?: ScheduledImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledImageInclude<ExtArgs> | null
    where?: ScheduledImageWhereInput
    orderBy?: ScheduledImageOrderByWithRelationInput | ScheduledImageOrderByWithRelationInput[]
    cursor?: ScheduledImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledImageScalarFieldEnum | ScheduledImageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GlobalStateScalarFieldEnum: {
    globalStateId: 'globalStateId',
    category: 'category',
    startDate: 'startDate',
    skips: 'skips',
    cycleImages: 'cycleImages',
    shuffleOrder: 'shuffleOrder',
    dateShuffled: 'dateShuffled'
  };

  export type GlobalStateScalarFieldEnum = (typeof GlobalStateScalarFieldEnum)[keyof typeof GlobalStateScalarFieldEnum]


  export const UnsplashCollectionScalarFieldEnum: {
    collectionId: 'collectionId',
    ingestionComplete: 'ingestionComplete'
  };

  export type UnsplashCollectionScalarFieldEnum = (typeof UnsplashCollectionScalarFieldEnum)[keyof typeof UnsplashCollectionScalarFieldEnum]


  export const IngestedUnsplashImageScalarFieldEnum: {
    ingestedImageId: 'ingestedImageId',
    source: 'source',
    url: 'url',
    sourceId: 'sourceId',
    approved: 'approved',
    animalType: 'animalType',
    collectionId: 'collectionId',
    dateIngested: 'dateIngested'
  };

  export type IngestedUnsplashImageScalarFieldEnum = (typeof IngestedUnsplashImageScalarFieldEnum)[keyof typeof IngestedUnsplashImageScalarFieldEnum]


  export const ScheduledImageScalarFieldEnum: {
    scheduledImageId: 'scheduledImageId',
    source: 'source',
    url: 'url',
    sourceId: 'sourceId',
    published: 'published',
    collectionId: 'collectionId',
    dateIngested: 'dateIngested',
    animalType: 'animalType',
    index: 'index'
  };

  export type ScheduledImageScalarFieldEnum = (typeof ScheduledImageScalarFieldEnum)[keyof typeof ScheduledImageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AnimalType'
   */
  export type EnumAnimalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalType'>
    


  /**
   * Reference to a field of type 'AnimalType[]'
   */
  export type ListEnumAnimalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ImageSource'
   */
  export type EnumImageSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageSource'>
    


  /**
   * Reference to a field of type 'ImageSource[]'
   */
  export type ListEnumImageSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageSource[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GlobalStateWhereInput = {
    AND?: GlobalStateWhereInput | GlobalStateWhereInput[]
    OR?: GlobalStateWhereInput[]
    NOT?: GlobalStateWhereInput | GlobalStateWhereInput[]
    globalStateId?: IntFilter<"GlobalState"> | number
    category?: EnumAnimalTypeFilter<"GlobalState"> | $Enums.AnimalType
    startDate?: DateTimeFilter<"GlobalState"> | Date | string
    skips?: IntFilter<"GlobalState"> | number
    cycleImages?: BoolFilter<"GlobalState"> | boolean
    shuffleOrder?: IntNullableListFilter<"GlobalState">
    dateShuffled?: DateTimeNullableFilter<"GlobalState"> | Date | string | null
  }

  export type GlobalStateOrderByWithRelationInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
    cycleImages?: SortOrder
    shuffleOrder?: SortOrder
    dateShuffled?: SortOrderInput | SortOrder
  }

  export type GlobalStateWhereUniqueInput = Prisma.AtLeast<{
    globalStateId?: number
    category?: $Enums.AnimalType
    AND?: GlobalStateWhereInput | GlobalStateWhereInput[]
    OR?: GlobalStateWhereInput[]
    NOT?: GlobalStateWhereInput | GlobalStateWhereInput[]
    startDate?: DateTimeFilter<"GlobalState"> | Date | string
    skips?: IntFilter<"GlobalState"> | number
    cycleImages?: BoolFilter<"GlobalState"> | boolean
    shuffleOrder?: IntNullableListFilter<"GlobalState">
    dateShuffled?: DateTimeNullableFilter<"GlobalState"> | Date | string | null
  }, "globalStateId" | "category">

  export type GlobalStateOrderByWithAggregationInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
    cycleImages?: SortOrder
    shuffleOrder?: SortOrder
    dateShuffled?: SortOrderInput | SortOrder
    _count?: GlobalStateCountOrderByAggregateInput
    _avg?: GlobalStateAvgOrderByAggregateInput
    _max?: GlobalStateMaxOrderByAggregateInput
    _min?: GlobalStateMinOrderByAggregateInput
    _sum?: GlobalStateSumOrderByAggregateInput
  }

  export type GlobalStateScalarWhereWithAggregatesInput = {
    AND?: GlobalStateScalarWhereWithAggregatesInput | GlobalStateScalarWhereWithAggregatesInput[]
    OR?: GlobalStateScalarWhereWithAggregatesInput[]
    NOT?: GlobalStateScalarWhereWithAggregatesInput | GlobalStateScalarWhereWithAggregatesInput[]
    globalStateId?: IntWithAggregatesFilter<"GlobalState"> | number
    category?: EnumAnimalTypeWithAggregatesFilter<"GlobalState"> | $Enums.AnimalType
    startDate?: DateTimeWithAggregatesFilter<"GlobalState"> | Date | string
    skips?: IntWithAggregatesFilter<"GlobalState"> | number
    cycleImages?: BoolWithAggregatesFilter<"GlobalState"> | boolean
    shuffleOrder?: IntNullableListFilter<"GlobalState">
    dateShuffled?: DateTimeNullableWithAggregatesFilter<"GlobalState"> | Date | string | null
  }

  export type UnsplashCollectionWhereInput = {
    AND?: UnsplashCollectionWhereInput | UnsplashCollectionWhereInput[]
    OR?: UnsplashCollectionWhereInput[]
    NOT?: UnsplashCollectionWhereInput | UnsplashCollectionWhereInput[]
    collectionId?: StringFilter<"UnsplashCollection"> | string
    ingestionComplete?: BoolFilter<"UnsplashCollection"> | boolean
    ingestedUnsplashImages?: IngestedUnsplashImageListRelationFilter
    ScheduledImage?: ScheduledImageListRelationFilter
  }

  export type UnsplashCollectionOrderByWithRelationInput = {
    collectionId?: SortOrder
    ingestionComplete?: SortOrder
    ingestedUnsplashImages?: IngestedUnsplashImageOrderByRelationAggregateInput
    ScheduledImage?: ScheduledImageOrderByRelationAggregateInput
  }

  export type UnsplashCollectionWhereUniqueInput = Prisma.AtLeast<{
    collectionId?: string
    AND?: UnsplashCollectionWhereInput | UnsplashCollectionWhereInput[]
    OR?: UnsplashCollectionWhereInput[]
    NOT?: UnsplashCollectionWhereInput | UnsplashCollectionWhereInput[]
    ingestionComplete?: BoolFilter<"UnsplashCollection"> | boolean
    ingestedUnsplashImages?: IngestedUnsplashImageListRelationFilter
    ScheduledImage?: ScheduledImageListRelationFilter
  }, "collectionId">

  export type UnsplashCollectionOrderByWithAggregationInput = {
    collectionId?: SortOrder
    ingestionComplete?: SortOrder
    _count?: UnsplashCollectionCountOrderByAggregateInput
    _max?: UnsplashCollectionMaxOrderByAggregateInput
    _min?: UnsplashCollectionMinOrderByAggregateInput
  }

  export type UnsplashCollectionScalarWhereWithAggregatesInput = {
    AND?: UnsplashCollectionScalarWhereWithAggregatesInput | UnsplashCollectionScalarWhereWithAggregatesInput[]
    OR?: UnsplashCollectionScalarWhereWithAggregatesInput[]
    NOT?: UnsplashCollectionScalarWhereWithAggregatesInput | UnsplashCollectionScalarWhereWithAggregatesInput[]
    collectionId?: StringWithAggregatesFilter<"UnsplashCollection"> | string
    ingestionComplete?: BoolWithAggregatesFilter<"UnsplashCollection"> | boolean
  }

  export type IngestedUnsplashImageWhereInput = {
    AND?: IngestedUnsplashImageWhereInput | IngestedUnsplashImageWhereInput[]
    OR?: IngestedUnsplashImageWhereInput[]
    NOT?: IngestedUnsplashImageWhereInput | IngestedUnsplashImageWhereInput[]
    ingestedImageId?: StringFilter<"IngestedUnsplashImage"> | string
    source?: EnumImageSourceFilter<"IngestedUnsplashImage"> | $Enums.ImageSource
    url?: StringFilter<"IngestedUnsplashImage"> | string
    sourceId?: StringFilter<"IngestedUnsplashImage"> | string
    approved?: BoolNullableFilter<"IngestedUnsplashImage"> | boolean | null
    animalType?: EnumAnimalTypeFilter<"IngestedUnsplashImage"> | $Enums.AnimalType
    collectionId?: StringFilter<"IngestedUnsplashImage"> | string
    dateIngested?: DateTimeFilter<"IngestedUnsplashImage"> | Date | string
    collection?: XOR<UnsplashCollectionScalarRelationFilter, UnsplashCollectionWhereInput>
  }

  export type IngestedUnsplashImageOrderByWithRelationInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrderInput | SortOrder
    animalType?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    collection?: UnsplashCollectionOrderByWithRelationInput
  }

  export type IngestedUnsplashImageWhereUniqueInput = Prisma.AtLeast<{
    ingestedImageId?: string
    sourceId?: string
    AND?: IngestedUnsplashImageWhereInput | IngestedUnsplashImageWhereInput[]
    OR?: IngestedUnsplashImageWhereInput[]
    NOT?: IngestedUnsplashImageWhereInput | IngestedUnsplashImageWhereInput[]
    source?: EnumImageSourceFilter<"IngestedUnsplashImage"> | $Enums.ImageSource
    url?: StringFilter<"IngestedUnsplashImage"> | string
    approved?: BoolNullableFilter<"IngestedUnsplashImage"> | boolean | null
    animalType?: EnumAnimalTypeFilter<"IngestedUnsplashImage"> | $Enums.AnimalType
    collectionId?: StringFilter<"IngestedUnsplashImage"> | string
    dateIngested?: DateTimeFilter<"IngestedUnsplashImage"> | Date | string
    collection?: XOR<UnsplashCollectionScalarRelationFilter, UnsplashCollectionWhereInput>
  }, "ingestedImageId" | "sourceId">

  export type IngestedUnsplashImageOrderByWithAggregationInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrderInput | SortOrder
    animalType?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    _count?: IngestedUnsplashImageCountOrderByAggregateInput
    _max?: IngestedUnsplashImageMaxOrderByAggregateInput
    _min?: IngestedUnsplashImageMinOrderByAggregateInput
  }

  export type IngestedUnsplashImageScalarWhereWithAggregatesInput = {
    AND?: IngestedUnsplashImageScalarWhereWithAggregatesInput | IngestedUnsplashImageScalarWhereWithAggregatesInput[]
    OR?: IngestedUnsplashImageScalarWhereWithAggregatesInput[]
    NOT?: IngestedUnsplashImageScalarWhereWithAggregatesInput | IngestedUnsplashImageScalarWhereWithAggregatesInput[]
    ingestedImageId?: StringWithAggregatesFilter<"IngestedUnsplashImage"> | string
    source?: EnumImageSourceWithAggregatesFilter<"IngestedUnsplashImage"> | $Enums.ImageSource
    url?: StringWithAggregatesFilter<"IngestedUnsplashImage"> | string
    sourceId?: StringWithAggregatesFilter<"IngestedUnsplashImage"> | string
    approved?: BoolNullableWithAggregatesFilter<"IngestedUnsplashImage"> | boolean | null
    animalType?: EnumAnimalTypeWithAggregatesFilter<"IngestedUnsplashImage"> | $Enums.AnimalType
    collectionId?: StringWithAggregatesFilter<"IngestedUnsplashImage"> | string
    dateIngested?: DateTimeWithAggregatesFilter<"IngestedUnsplashImage"> | Date | string
  }

  export type ScheduledImageWhereInput = {
    AND?: ScheduledImageWhereInput | ScheduledImageWhereInput[]
    OR?: ScheduledImageWhereInput[]
    NOT?: ScheduledImageWhereInput | ScheduledImageWhereInput[]
    scheduledImageId?: StringFilter<"ScheduledImage"> | string
    source?: EnumImageSourceFilter<"ScheduledImage"> | $Enums.ImageSource
    url?: StringFilter<"ScheduledImage"> | string
    sourceId?: StringNullableFilter<"ScheduledImage"> | string | null
    published?: DateTimeNullableFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringNullableFilter<"ScheduledImage"> | string | null
    dateIngested?: DateTimeFilter<"ScheduledImage"> | Date | string
    animalType?: EnumAnimalTypeFilter<"ScheduledImage"> | $Enums.AnimalType
    index?: IntNullableFilter<"ScheduledImage"> | number | null
    collection?: XOR<UnsplashCollectionNullableScalarRelationFilter, UnsplashCollectionWhereInput> | null
    users?: UserListRelationFilter
  }

  export type ScheduledImageOrderByWithRelationInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    published?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    dateIngested?: SortOrder
    animalType?: SortOrder
    index?: SortOrderInput | SortOrder
    collection?: UnsplashCollectionOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ScheduledImageWhereUniqueInput = Prisma.AtLeast<{
    scheduledImageId?: string
    sourceId?: string
    animalType_index?: ScheduledImageAnimalTypeIndexCompoundUniqueInput
    AND?: ScheduledImageWhereInput | ScheduledImageWhereInput[]
    OR?: ScheduledImageWhereInput[]
    NOT?: ScheduledImageWhereInput | ScheduledImageWhereInput[]
    source?: EnumImageSourceFilter<"ScheduledImage"> | $Enums.ImageSource
    url?: StringFilter<"ScheduledImage"> | string
    published?: DateTimeNullableFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringNullableFilter<"ScheduledImage"> | string | null
    dateIngested?: DateTimeFilter<"ScheduledImage"> | Date | string
    animalType?: EnumAnimalTypeFilter<"ScheduledImage"> | $Enums.AnimalType
    index?: IntNullableFilter<"ScheduledImage"> | number | null
    collection?: XOR<UnsplashCollectionNullableScalarRelationFilter, UnsplashCollectionWhereInput> | null
    users?: UserListRelationFilter
  }, "scheduledImageId" | "sourceId" | "animalType_index">

  export type ScheduledImageOrderByWithAggregationInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    published?: SortOrderInput | SortOrder
    collectionId?: SortOrderInput | SortOrder
    dateIngested?: SortOrder
    animalType?: SortOrder
    index?: SortOrderInput | SortOrder
    _count?: ScheduledImageCountOrderByAggregateInput
    _avg?: ScheduledImageAvgOrderByAggregateInput
    _max?: ScheduledImageMaxOrderByAggregateInput
    _min?: ScheduledImageMinOrderByAggregateInput
    _sum?: ScheduledImageSumOrderByAggregateInput
  }

  export type ScheduledImageScalarWhereWithAggregatesInput = {
    AND?: ScheduledImageScalarWhereWithAggregatesInput | ScheduledImageScalarWhereWithAggregatesInput[]
    OR?: ScheduledImageScalarWhereWithAggregatesInput[]
    NOT?: ScheduledImageScalarWhereWithAggregatesInput | ScheduledImageScalarWhereWithAggregatesInput[]
    scheduledImageId?: StringWithAggregatesFilter<"ScheduledImage"> | string
    source?: EnumImageSourceWithAggregatesFilter<"ScheduledImage"> | $Enums.ImageSource
    url?: StringWithAggregatesFilter<"ScheduledImage"> | string
    sourceId?: StringNullableWithAggregatesFilter<"ScheduledImage"> | string | null
    published?: DateTimeNullableWithAggregatesFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringNullableWithAggregatesFilter<"ScheduledImage"> | string | null
    dateIngested?: DateTimeWithAggregatesFilter<"ScheduledImage"> | Date | string
    animalType?: EnumAnimalTypeWithAggregatesFilter<"ScheduledImage"> | $Enums.AnimalType
    index?: IntNullableWithAggregatesFilter<"ScheduledImage"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    favourites?: ScheduledImageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    favourites?: ScheduledImageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    favourites?: ScheduledImageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type GlobalStateCreateInput = {
    category: $Enums.AnimalType
    startDate: Date | string
    skips?: number
    cycleImages?: boolean
    shuffleOrder?: GlobalStateCreateshuffleOrderInput | number[]
    dateShuffled?: Date | string | null
  }

  export type GlobalStateUncheckedCreateInput = {
    globalStateId?: number
    category: $Enums.AnimalType
    startDate: Date | string
    skips?: number
    cycleImages?: boolean
    shuffleOrder?: GlobalStateCreateshuffleOrderInput | number[]
    dateShuffled?: Date | string | null
  }

  export type GlobalStateUpdateInput = {
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
    cycleImages?: BoolFieldUpdateOperationsInput | boolean
    shuffleOrder?: GlobalStateUpdateshuffleOrderInput | number[]
    dateShuffled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GlobalStateUncheckedUpdateInput = {
    globalStateId?: IntFieldUpdateOperationsInput | number
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
    cycleImages?: BoolFieldUpdateOperationsInput | boolean
    shuffleOrder?: GlobalStateUpdateshuffleOrderInput | number[]
    dateShuffled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GlobalStateCreateManyInput = {
    globalStateId?: number
    category: $Enums.AnimalType
    startDate: Date | string
    skips?: number
    cycleImages?: boolean
    shuffleOrder?: GlobalStateCreateshuffleOrderInput | number[]
    dateShuffled?: Date | string | null
  }

  export type GlobalStateUpdateManyMutationInput = {
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
    cycleImages?: BoolFieldUpdateOperationsInput | boolean
    shuffleOrder?: GlobalStateUpdateshuffleOrderInput | number[]
    dateShuffled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GlobalStateUncheckedUpdateManyInput = {
    globalStateId?: IntFieldUpdateOperationsInput | number
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
    cycleImages?: BoolFieldUpdateOperationsInput | boolean
    shuffleOrder?: GlobalStateUpdateshuffleOrderInput | number[]
    dateShuffled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnsplashCollectionCreateInput = {
    collectionId: string
    ingestionComplete?: boolean
    ingestedUnsplashImages?: IngestedUnsplashImageCreateNestedManyWithoutCollectionInput
    ScheduledImage?: ScheduledImageCreateNestedManyWithoutCollectionInput
  }

  export type UnsplashCollectionUncheckedCreateInput = {
    collectionId: string
    ingestionComplete?: boolean
    ingestedUnsplashImages?: IngestedUnsplashImageUncheckedCreateNestedManyWithoutCollectionInput
    ScheduledImage?: ScheduledImageUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type UnsplashCollectionUpdateInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
    ingestedUnsplashImages?: IngestedUnsplashImageUpdateManyWithoutCollectionNestedInput
    ScheduledImage?: ScheduledImageUpdateManyWithoutCollectionNestedInput
  }

  export type UnsplashCollectionUncheckedUpdateInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
    ingestedUnsplashImages?: IngestedUnsplashImageUncheckedUpdateManyWithoutCollectionNestedInput
    ScheduledImage?: ScheduledImageUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UnsplashCollectionCreateManyInput = {
    collectionId: string
    ingestionComplete?: boolean
  }

  export type UnsplashCollectionUpdateManyMutationInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnsplashCollectionUncheckedUpdateManyInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngestedUnsplashImageCreateInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    animalType?: $Enums.AnimalType
    dateIngested?: Date | string
    collection: UnsplashCollectionCreateNestedOneWithoutIngestedUnsplashImagesInput
  }

  export type IngestedUnsplashImageUncheckedCreateInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    animalType?: $Enums.AnimalType
    collectionId: string
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageUpdateInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: UnsplashCollectionUpdateOneRequiredWithoutIngestedUnsplashImagesNestedInput
  }

  export type IngestedUnsplashImageUncheckedUpdateInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    collectionId?: StringFieldUpdateOperationsInput | string
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageCreateManyInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    animalType?: $Enums.AnimalType
    collectionId: string
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageUpdateManyMutationInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageUncheckedUpdateManyInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    collectionId?: StringFieldUpdateOperationsInput | string
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageCreateInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
    collection?: UnsplashCollectionCreateNestedOneWithoutScheduledImageInput
    users?: UserCreateNestedManyWithoutFavouritesInput
  }

  export type ScheduledImageUncheckedCreateInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    collectionId?: string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
    users?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type ScheduledImageUpdateInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
    collection?: UnsplashCollectionUpdateOneWithoutScheduledImageNestedInput
    users?: UserUpdateManyWithoutFavouritesNestedInput
  }

  export type ScheduledImageUncheckedUpdateInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type ScheduledImageCreateManyInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    collectionId?: string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
  }

  export type ScheduledImageUpdateManyMutationInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduledImageUncheckedUpdateManyInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    favourites?: ScheduledImageCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    favourites?: ScheduledImageUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    favourites?: ScheduledImageUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    favourites?: ScheduledImageUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumAnimalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeFilter<$PrismaModel> | $Enums.AnimalType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GlobalStateCountOrderByAggregateInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
    cycleImages?: SortOrder
    shuffleOrder?: SortOrder
    dateShuffled?: SortOrder
  }

  export type GlobalStateAvgOrderByAggregateInput = {
    globalStateId?: SortOrder
    skips?: SortOrder
    shuffleOrder?: SortOrder
  }

  export type GlobalStateMaxOrderByAggregateInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
    cycleImages?: SortOrder
    dateShuffled?: SortOrder
  }

  export type GlobalStateMinOrderByAggregateInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
    cycleImages?: SortOrder
    dateShuffled?: SortOrder
  }

  export type GlobalStateSumOrderByAggregateInput = {
    globalStateId?: SortOrder
    skips?: SortOrder
    shuffleOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAnimalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnimalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalTypeFilter<$PrismaModel>
    _max?: NestedEnumAnimalTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IngestedUnsplashImageListRelationFilter = {
    every?: IngestedUnsplashImageWhereInput
    some?: IngestedUnsplashImageWhereInput
    none?: IngestedUnsplashImageWhereInput
  }

  export type ScheduledImageListRelationFilter = {
    every?: ScheduledImageWhereInput
    some?: ScheduledImageWhereInput
    none?: ScheduledImageWhereInput
  }

  export type IngestedUnsplashImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnsplashCollectionCountOrderByAggregateInput = {
    collectionId?: SortOrder
    ingestionComplete?: SortOrder
  }

  export type UnsplashCollectionMaxOrderByAggregateInput = {
    collectionId?: SortOrder
    ingestionComplete?: SortOrder
  }

  export type UnsplashCollectionMinOrderByAggregateInput = {
    collectionId?: SortOrder
    ingestionComplete?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumImageSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageSource | EnumImageSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumImageSourceFilter<$PrismaModel> | $Enums.ImageSource
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UnsplashCollectionScalarRelationFilter = {
    is?: UnsplashCollectionWhereInput
    isNot?: UnsplashCollectionWhereInput
  }

  export type IngestedUnsplashImageCountOrderByAggregateInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrder
    animalType?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
  }

  export type IngestedUnsplashImageMaxOrderByAggregateInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrder
    animalType?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
  }

  export type IngestedUnsplashImageMinOrderByAggregateInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrder
    animalType?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
  }

  export type EnumImageSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageSource | EnumImageSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumImageSourceWithAggregatesFilter<$PrismaModel> | $Enums.ImageSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageSourceFilter<$PrismaModel>
    _max?: NestedEnumImageSourceFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UnsplashCollectionNullableScalarRelationFilter = {
    is?: UnsplashCollectionWhereInput | null
    isNot?: UnsplashCollectionWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledImageAnimalTypeIndexCompoundUniqueInput = {
    animalType: $Enums.AnimalType
    index: number
  }

  export type ScheduledImageCountOrderByAggregateInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    published?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    animalType?: SortOrder
    index?: SortOrder
  }

  export type ScheduledImageAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type ScheduledImageMaxOrderByAggregateInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    published?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    animalType?: SortOrder
    index?: SortOrder
  }

  export type ScheduledImageMinOrderByAggregateInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    published?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    animalType?: SortOrder
    index?: SortOrder
  }

  export type ScheduledImageSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalStateCreateshuffleOrderInput = {
    set: number[]
  }

  export type EnumAnimalTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnimalType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GlobalStateUpdateshuffleOrderInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IngestedUnsplashImageCreateNestedManyWithoutCollectionInput = {
    create?: XOR<IngestedUnsplashImageCreateWithoutCollectionInput, IngestedUnsplashImageUncheckedCreateWithoutCollectionInput> | IngestedUnsplashImageCreateWithoutCollectionInput[] | IngestedUnsplashImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: IngestedUnsplashImageCreateOrConnectWithoutCollectionInput | IngestedUnsplashImageCreateOrConnectWithoutCollectionInput[]
    createMany?: IngestedUnsplashImageCreateManyCollectionInputEnvelope
    connect?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
  }

  export type ScheduledImageCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ScheduledImageCreateWithoutCollectionInput, ScheduledImageUncheckedCreateWithoutCollectionInput> | ScheduledImageCreateWithoutCollectionInput[] | ScheduledImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutCollectionInput | ScheduledImageCreateOrConnectWithoutCollectionInput[]
    createMany?: ScheduledImageCreateManyCollectionInputEnvelope
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
  }

  export type IngestedUnsplashImageUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<IngestedUnsplashImageCreateWithoutCollectionInput, IngestedUnsplashImageUncheckedCreateWithoutCollectionInput> | IngestedUnsplashImageCreateWithoutCollectionInput[] | IngestedUnsplashImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: IngestedUnsplashImageCreateOrConnectWithoutCollectionInput | IngestedUnsplashImageCreateOrConnectWithoutCollectionInput[]
    createMany?: IngestedUnsplashImageCreateManyCollectionInputEnvelope
    connect?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
  }

  export type ScheduledImageUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ScheduledImageCreateWithoutCollectionInput, ScheduledImageUncheckedCreateWithoutCollectionInput> | ScheduledImageCreateWithoutCollectionInput[] | ScheduledImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutCollectionInput | ScheduledImageCreateOrConnectWithoutCollectionInput[]
    createMany?: ScheduledImageCreateManyCollectionInputEnvelope
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IngestedUnsplashImageUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<IngestedUnsplashImageCreateWithoutCollectionInput, IngestedUnsplashImageUncheckedCreateWithoutCollectionInput> | IngestedUnsplashImageCreateWithoutCollectionInput[] | IngestedUnsplashImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: IngestedUnsplashImageCreateOrConnectWithoutCollectionInput | IngestedUnsplashImageCreateOrConnectWithoutCollectionInput[]
    upsert?: IngestedUnsplashImageUpsertWithWhereUniqueWithoutCollectionInput | IngestedUnsplashImageUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: IngestedUnsplashImageCreateManyCollectionInputEnvelope
    set?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    disconnect?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    delete?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    connect?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    update?: IngestedUnsplashImageUpdateWithWhereUniqueWithoutCollectionInput | IngestedUnsplashImageUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: IngestedUnsplashImageUpdateManyWithWhereWithoutCollectionInput | IngestedUnsplashImageUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: IngestedUnsplashImageScalarWhereInput | IngestedUnsplashImageScalarWhereInput[]
  }

  export type ScheduledImageUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ScheduledImageCreateWithoutCollectionInput, ScheduledImageUncheckedCreateWithoutCollectionInput> | ScheduledImageCreateWithoutCollectionInput[] | ScheduledImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutCollectionInput | ScheduledImageCreateOrConnectWithoutCollectionInput[]
    upsert?: ScheduledImageUpsertWithWhereUniqueWithoutCollectionInput | ScheduledImageUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ScheduledImageCreateManyCollectionInputEnvelope
    set?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    disconnect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    delete?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    update?: ScheduledImageUpdateWithWhereUniqueWithoutCollectionInput | ScheduledImageUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ScheduledImageUpdateManyWithWhereWithoutCollectionInput | ScheduledImageUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ScheduledImageScalarWhereInput | ScheduledImageScalarWhereInput[]
  }

  export type IngestedUnsplashImageUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<IngestedUnsplashImageCreateWithoutCollectionInput, IngestedUnsplashImageUncheckedCreateWithoutCollectionInput> | IngestedUnsplashImageCreateWithoutCollectionInput[] | IngestedUnsplashImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: IngestedUnsplashImageCreateOrConnectWithoutCollectionInput | IngestedUnsplashImageCreateOrConnectWithoutCollectionInput[]
    upsert?: IngestedUnsplashImageUpsertWithWhereUniqueWithoutCollectionInput | IngestedUnsplashImageUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: IngestedUnsplashImageCreateManyCollectionInputEnvelope
    set?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    disconnect?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    delete?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    connect?: IngestedUnsplashImageWhereUniqueInput | IngestedUnsplashImageWhereUniqueInput[]
    update?: IngestedUnsplashImageUpdateWithWhereUniqueWithoutCollectionInput | IngestedUnsplashImageUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: IngestedUnsplashImageUpdateManyWithWhereWithoutCollectionInput | IngestedUnsplashImageUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: IngestedUnsplashImageScalarWhereInput | IngestedUnsplashImageScalarWhereInput[]
  }

  export type ScheduledImageUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ScheduledImageCreateWithoutCollectionInput, ScheduledImageUncheckedCreateWithoutCollectionInput> | ScheduledImageCreateWithoutCollectionInput[] | ScheduledImageUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutCollectionInput | ScheduledImageCreateOrConnectWithoutCollectionInput[]
    upsert?: ScheduledImageUpsertWithWhereUniqueWithoutCollectionInput | ScheduledImageUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ScheduledImageCreateManyCollectionInputEnvelope
    set?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    disconnect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    delete?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    update?: ScheduledImageUpdateWithWhereUniqueWithoutCollectionInput | ScheduledImageUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ScheduledImageUpdateManyWithWhereWithoutCollectionInput | ScheduledImageUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ScheduledImageScalarWhereInput | ScheduledImageScalarWhereInput[]
  }

  export type UnsplashCollectionCreateNestedOneWithoutIngestedUnsplashImagesInput = {
    create?: XOR<UnsplashCollectionCreateWithoutIngestedUnsplashImagesInput, UnsplashCollectionUncheckedCreateWithoutIngestedUnsplashImagesInput>
    connectOrCreate?: UnsplashCollectionCreateOrConnectWithoutIngestedUnsplashImagesInput
    connect?: UnsplashCollectionWhereUniqueInput
  }

  export type EnumImageSourceFieldUpdateOperationsInput = {
    set?: $Enums.ImageSource
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UnsplashCollectionUpdateOneRequiredWithoutIngestedUnsplashImagesNestedInput = {
    create?: XOR<UnsplashCollectionCreateWithoutIngestedUnsplashImagesInput, UnsplashCollectionUncheckedCreateWithoutIngestedUnsplashImagesInput>
    connectOrCreate?: UnsplashCollectionCreateOrConnectWithoutIngestedUnsplashImagesInput
    upsert?: UnsplashCollectionUpsertWithoutIngestedUnsplashImagesInput
    connect?: UnsplashCollectionWhereUniqueInput
    update?: XOR<XOR<UnsplashCollectionUpdateToOneWithWhereWithoutIngestedUnsplashImagesInput, UnsplashCollectionUpdateWithoutIngestedUnsplashImagesInput>, UnsplashCollectionUncheckedUpdateWithoutIngestedUnsplashImagesInput>
  }

  export type UnsplashCollectionCreateNestedOneWithoutScheduledImageInput = {
    create?: XOR<UnsplashCollectionCreateWithoutScheduledImageInput, UnsplashCollectionUncheckedCreateWithoutScheduledImageInput>
    connectOrCreate?: UnsplashCollectionCreateOrConnectWithoutScheduledImageInput
    connect?: UnsplashCollectionWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnsplashCollectionUpdateOneWithoutScheduledImageNestedInput = {
    create?: XOR<UnsplashCollectionCreateWithoutScheduledImageInput, UnsplashCollectionUncheckedCreateWithoutScheduledImageInput>
    connectOrCreate?: UnsplashCollectionCreateOrConnectWithoutScheduledImageInput
    upsert?: UnsplashCollectionUpsertWithoutScheduledImageInput
    disconnect?: UnsplashCollectionWhereInput | boolean
    delete?: UnsplashCollectionWhereInput | boolean
    connect?: UnsplashCollectionWhereUniqueInput
    update?: XOR<XOR<UnsplashCollectionUpdateToOneWithWhereWithoutScheduledImageInput, UnsplashCollectionUpdateWithoutScheduledImageInput>, UnsplashCollectionUncheckedUpdateWithoutScheduledImageInput>
  }

  export type UserUpdateManyWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavouritesInput | UserUpsertWithWhereUniqueWithoutFavouritesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavouritesInput | UserUpdateWithWhereUniqueWithoutFavouritesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavouritesInput | UserUpdateManyWithWhereWithoutFavouritesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavouritesInput | UserUpsertWithWhereUniqueWithoutFavouritesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavouritesInput | UserUpdateWithWhereUniqueWithoutFavouritesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavouritesInput | UserUpdateManyWithWhereWithoutFavouritesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ScheduledImageCreateNestedManyWithoutUsersInput = {
    create?: XOR<ScheduledImageCreateWithoutUsersInput, ScheduledImageUncheckedCreateWithoutUsersInput> | ScheduledImageCreateWithoutUsersInput[] | ScheduledImageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutUsersInput | ScheduledImageCreateOrConnectWithoutUsersInput[]
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ScheduledImageUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ScheduledImageCreateWithoutUsersInput, ScheduledImageUncheckedCreateWithoutUsersInput> | ScheduledImageCreateWithoutUsersInput[] | ScheduledImageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutUsersInput | ScheduledImageCreateOrConnectWithoutUsersInput[]
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ScheduledImageUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ScheduledImageCreateWithoutUsersInput, ScheduledImageUncheckedCreateWithoutUsersInput> | ScheduledImageCreateWithoutUsersInput[] | ScheduledImageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutUsersInput | ScheduledImageCreateOrConnectWithoutUsersInput[]
    upsert?: ScheduledImageUpsertWithWhereUniqueWithoutUsersInput | ScheduledImageUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    disconnect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    delete?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    update?: ScheduledImageUpdateWithWhereUniqueWithoutUsersInput | ScheduledImageUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ScheduledImageUpdateManyWithWhereWithoutUsersInput | ScheduledImageUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ScheduledImageScalarWhereInput | ScheduledImageScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ScheduledImageUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ScheduledImageCreateWithoutUsersInput, ScheduledImageUncheckedCreateWithoutUsersInput> | ScheduledImageCreateWithoutUsersInput[] | ScheduledImageUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ScheduledImageCreateOrConnectWithoutUsersInput | ScheduledImageCreateOrConnectWithoutUsersInput[]
    upsert?: ScheduledImageUpsertWithWhereUniqueWithoutUsersInput | ScheduledImageUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    disconnect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    delete?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    connect?: ScheduledImageWhereUniqueInput | ScheduledImageWhereUniqueInput[]
    update?: ScheduledImageUpdateWithWhereUniqueWithoutUsersInput | ScheduledImageUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ScheduledImageUpdateManyWithWhereWithoutUsersInput | ScheduledImageUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ScheduledImageScalarWhereInput | ScheduledImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAnimalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeFilter<$PrismaModel> | $Enums.AnimalType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAnimalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnimalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalTypeFilter<$PrismaModel>
    _max?: NestedEnumAnimalTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumImageSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageSource | EnumImageSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumImageSourceFilter<$PrismaModel> | $Enums.ImageSource
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumImageSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageSource | EnumImageSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageSource[] | ListEnumImageSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumImageSourceWithAggregatesFilter<$PrismaModel> | $Enums.ImageSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageSourceFilter<$PrismaModel>
    _max?: NestedEnumImageSourceFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type IngestedUnsplashImageCreateWithoutCollectionInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    animalType?: $Enums.AnimalType
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageUncheckedCreateWithoutCollectionInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    animalType?: $Enums.AnimalType
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageCreateOrConnectWithoutCollectionInput = {
    where: IngestedUnsplashImageWhereUniqueInput
    create: XOR<IngestedUnsplashImageCreateWithoutCollectionInput, IngestedUnsplashImageUncheckedCreateWithoutCollectionInput>
  }

  export type IngestedUnsplashImageCreateManyCollectionInputEnvelope = {
    data: IngestedUnsplashImageCreateManyCollectionInput | IngestedUnsplashImageCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type ScheduledImageCreateWithoutCollectionInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
    users?: UserCreateNestedManyWithoutFavouritesInput
  }

  export type ScheduledImageUncheckedCreateWithoutCollectionInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
    users?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type ScheduledImageCreateOrConnectWithoutCollectionInput = {
    where: ScheduledImageWhereUniqueInput
    create: XOR<ScheduledImageCreateWithoutCollectionInput, ScheduledImageUncheckedCreateWithoutCollectionInput>
  }

  export type ScheduledImageCreateManyCollectionInputEnvelope = {
    data: ScheduledImageCreateManyCollectionInput | ScheduledImageCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type IngestedUnsplashImageUpsertWithWhereUniqueWithoutCollectionInput = {
    where: IngestedUnsplashImageWhereUniqueInput
    update: XOR<IngestedUnsplashImageUpdateWithoutCollectionInput, IngestedUnsplashImageUncheckedUpdateWithoutCollectionInput>
    create: XOR<IngestedUnsplashImageCreateWithoutCollectionInput, IngestedUnsplashImageUncheckedCreateWithoutCollectionInput>
  }

  export type IngestedUnsplashImageUpdateWithWhereUniqueWithoutCollectionInput = {
    where: IngestedUnsplashImageWhereUniqueInput
    data: XOR<IngestedUnsplashImageUpdateWithoutCollectionInput, IngestedUnsplashImageUncheckedUpdateWithoutCollectionInput>
  }

  export type IngestedUnsplashImageUpdateManyWithWhereWithoutCollectionInput = {
    where: IngestedUnsplashImageScalarWhereInput
    data: XOR<IngestedUnsplashImageUpdateManyMutationInput, IngestedUnsplashImageUncheckedUpdateManyWithoutCollectionInput>
  }

  export type IngestedUnsplashImageScalarWhereInput = {
    AND?: IngestedUnsplashImageScalarWhereInput | IngestedUnsplashImageScalarWhereInput[]
    OR?: IngestedUnsplashImageScalarWhereInput[]
    NOT?: IngestedUnsplashImageScalarWhereInput | IngestedUnsplashImageScalarWhereInput[]
    ingestedImageId?: StringFilter<"IngestedUnsplashImage"> | string
    source?: EnumImageSourceFilter<"IngestedUnsplashImage"> | $Enums.ImageSource
    url?: StringFilter<"IngestedUnsplashImage"> | string
    sourceId?: StringFilter<"IngestedUnsplashImage"> | string
    approved?: BoolNullableFilter<"IngestedUnsplashImage"> | boolean | null
    animalType?: EnumAnimalTypeFilter<"IngestedUnsplashImage"> | $Enums.AnimalType
    collectionId?: StringFilter<"IngestedUnsplashImage"> | string
    dateIngested?: DateTimeFilter<"IngestedUnsplashImage"> | Date | string
  }

  export type ScheduledImageUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ScheduledImageWhereUniqueInput
    update: XOR<ScheduledImageUpdateWithoutCollectionInput, ScheduledImageUncheckedUpdateWithoutCollectionInput>
    create: XOR<ScheduledImageCreateWithoutCollectionInput, ScheduledImageUncheckedCreateWithoutCollectionInput>
  }

  export type ScheduledImageUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ScheduledImageWhereUniqueInput
    data: XOR<ScheduledImageUpdateWithoutCollectionInput, ScheduledImageUncheckedUpdateWithoutCollectionInput>
  }

  export type ScheduledImageUpdateManyWithWhereWithoutCollectionInput = {
    where: ScheduledImageScalarWhereInput
    data: XOR<ScheduledImageUpdateManyMutationInput, ScheduledImageUncheckedUpdateManyWithoutCollectionInput>
  }

  export type ScheduledImageScalarWhereInput = {
    AND?: ScheduledImageScalarWhereInput | ScheduledImageScalarWhereInput[]
    OR?: ScheduledImageScalarWhereInput[]
    NOT?: ScheduledImageScalarWhereInput | ScheduledImageScalarWhereInput[]
    scheduledImageId?: StringFilter<"ScheduledImage"> | string
    source?: EnumImageSourceFilter<"ScheduledImage"> | $Enums.ImageSource
    url?: StringFilter<"ScheduledImage"> | string
    sourceId?: StringNullableFilter<"ScheduledImage"> | string | null
    published?: DateTimeNullableFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringNullableFilter<"ScheduledImage"> | string | null
    dateIngested?: DateTimeFilter<"ScheduledImage"> | Date | string
    animalType?: EnumAnimalTypeFilter<"ScheduledImage"> | $Enums.AnimalType
    index?: IntNullableFilter<"ScheduledImage"> | number | null
  }

  export type UnsplashCollectionCreateWithoutIngestedUnsplashImagesInput = {
    collectionId: string
    ingestionComplete?: boolean
    ScheduledImage?: ScheduledImageCreateNestedManyWithoutCollectionInput
  }

  export type UnsplashCollectionUncheckedCreateWithoutIngestedUnsplashImagesInput = {
    collectionId: string
    ingestionComplete?: boolean
    ScheduledImage?: ScheduledImageUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type UnsplashCollectionCreateOrConnectWithoutIngestedUnsplashImagesInput = {
    where: UnsplashCollectionWhereUniqueInput
    create: XOR<UnsplashCollectionCreateWithoutIngestedUnsplashImagesInput, UnsplashCollectionUncheckedCreateWithoutIngestedUnsplashImagesInput>
  }

  export type UnsplashCollectionUpsertWithoutIngestedUnsplashImagesInput = {
    update: XOR<UnsplashCollectionUpdateWithoutIngestedUnsplashImagesInput, UnsplashCollectionUncheckedUpdateWithoutIngestedUnsplashImagesInput>
    create: XOR<UnsplashCollectionCreateWithoutIngestedUnsplashImagesInput, UnsplashCollectionUncheckedCreateWithoutIngestedUnsplashImagesInput>
    where?: UnsplashCollectionWhereInput
  }

  export type UnsplashCollectionUpdateToOneWithWhereWithoutIngestedUnsplashImagesInput = {
    where?: UnsplashCollectionWhereInput
    data: XOR<UnsplashCollectionUpdateWithoutIngestedUnsplashImagesInput, UnsplashCollectionUncheckedUpdateWithoutIngestedUnsplashImagesInput>
  }

  export type UnsplashCollectionUpdateWithoutIngestedUnsplashImagesInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
    ScheduledImage?: ScheduledImageUpdateManyWithoutCollectionNestedInput
  }

  export type UnsplashCollectionUncheckedUpdateWithoutIngestedUnsplashImagesInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
    ScheduledImage?: ScheduledImageUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UnsplashCollectionCreateWithoutScheduledImageInput = {
    collectionId: string
    ingestionComplete?: boolean
    ingestedUnsplashImages?: IngestedUnsplashImageCreateNestedManyWithoutCollectionInput
  }

  export type UnsplashCollectionUncheckedCreateWithoutScheduledImageInput = {
    collectionId: string
    ingestionComplete?: boolean
    ingestedUnsplashImages?: IngestedUnsplashImageUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type UnsplashCollectionCreateOrConnectWithoutScheduledImageInput = {
    where: UnsplashCollectionWhereUniqueInput
    create: XOR<UnsplashCollectionCreateWithoutScheduledImageInput, UnsplashCollectionUncheckedCreateWithoutScheduledImageInput>
  }

  export type UserCreateWithoutFavouritesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type UnsplashCollectionUpsertWithoutScheduledImageInput = {
    update: XOR<UnsplashCollectionUpdateWithoutScheduledImageInput, UnsplashCollectionUncheckedUpdateWithoutScheduledImageInput>
    create: XOR<UnsplashCollectionCreateWithoutScheduledImageInput, UnsplashCollectionUncheckedCreateWithoutScheduledImageInput>
    where?: UnsplashCollectionWhereInput
  }

  export type UnsplashCollectionUpdateToOneWithWhereWithoutScheduledImageInput = {
    where?: UnsplashCollectionWhereInput
    data: XOR<UnsplashCollectionUpdateWithoutScheduledImageInput, UnsplashCollectionUncheckedUpdateWithoutScheduledImageInput>
  }

  export type UnsplashCollectionUpdateWithoutScheduledImageInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
    ingestedUnsplashImages?: IngestedUnsplashImageUpdateManyWithoutCollectionNestedInput
  }

  export type UnsplashCollectionUncheckedUpdateWithoutScheduledImageInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    ingestionComplete?: BoolFieldUpdateOperationsInput | boolean
    ingestedUnsplashImages?: IngestedUnsplashImageUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateManyWithWhereWithoutFavouritesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavouritesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScheduledImageCreateWithoutUsersInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
    collection?: UnsplashCollectionCreateNestedOneWithoutScheduledImageInput
  }

  export type ScheduledImageUncheckedCreateWithoutUsersInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    collectionId?: string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
  }

  export type ScheduledImageCreateOrConnectWithoutUsersInput = {
    where: ScheduledImageWhereUniqueInput
    create: XOR<ScheduledImageCreateWithoutUsersInput, ScheduledImageUncheckedCreateWithoutUsersInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ScheduledImageUpsertWithWhereUniqueWithoutUsersInput = {
    where: ScheduledImageWhereUniqueInput
    update: XOR<ScheduledImageUpdateWithoutUsersInput, ScheduledImageUncheckedUpdateWithoutUsersInput>
    create: XOR<ScheduledImageCreateWithoutUsersInput, ScheduledImageUncheckedCreateWithoutUsersInput>
  }

  export type ScheduledImageUpdateWithWhereUniqueWithoutUsersInput = {
    where: ScheduledImageWhereUniqueInput
    data: XOR<ScheduledImageUpdateWithoutUsersInput, ScheduledImageUncheckedUpdateWithoutUsersInput>
  }

  export type ScheduledImageUpdateManyWithWhereWithoutUsersInput = {
    where: ScheduledImageScalarWhereInput
    data: XOR<ScheduledImageUpdateManyMutationInput, ScheduledImageUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    favourites?: ScheduledImageCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    favourites?: ScheduledImageUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    favourites?: ScheduledImageUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    favourites?: ScheduledImageUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    favourites?: ScheduledImageCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    favourites?: ScheduledImageUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    favourites?: ScheduledImageUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    favourites?: ScheduledImageUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type IngestedUnsplashImageCreateManyCollectionInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    animalType?: $Enums.AnimalType
    dateIngested?: Date | string
  }

  export type ScheduledImageCreateManyCollectionInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId?: string | null
    published?: Date | string | null
    dateIngested?: Date | string
    animalType?: $Enums.AnimalType
    index?: number | null
  }

  export type IngestedUnsplashImageUpdateWithoutCollectionInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageUncheckedUpdateWithoutCollectionInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageUncheckedUpdateManyWithoutCollectionInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageUpdateWithoutCollectionInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserUpdateManyWithoutFavouritesNestedInput
  }

  export type ScheduledImageUncheckedUpdateWithoutCollectionInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type ScheduledImageUncheckedUpdateManyWithoutCollectionInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageUpdateWithoutUsersInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
    collection?: UnsplashCollectionUpdateOneWithoutScheduledImageNestedInput
  }

  export type ScheduledImageUncheckedUpdateWithoutUsersInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduledImageUncheckedUpdateManyWithoutUsersInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collectionId?: NullableStringFieldUpdateOperationsInput | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    animalType?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    index?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
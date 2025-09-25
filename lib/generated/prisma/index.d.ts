
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
 * Model GlobalState
 * 
 */
export type GlobalState = $Result.DefaultSelection<Prisma.$GlobalStatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ImageSource: {
  Unsplash: 'Unsplash',
  Other: 'Other'
};

export type ImageSource = (typeof ImageSource)[keyof typeof ImageSource]


export const AnimalType: {
  Horse: 'Horse'
};

export type AnimalType = (typeof AnimalType)[keyof typeof AnimalType]

}

export type ImageSource = $Enums.ImageSource

export const ImageSource: typeof $Enums.ImageSource

export type AnimalType = $Enums.AnimalType

export const AnimalType: typeof $Enums.AnimalType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UnsplashCollections
 * const unsplashCollections = await prisma.unsplashCollection.findMany()
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
   * // Fetch zero or more UnsplashCollections
   * const unsplashCollections = await prisma.unsplashCollection.findMany()
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
   * `prisma.globalState`: Exposes CRUD operations for the **GlobalState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalStates
    * const globalStates = await prisma.globalState.findMany()
    * ```
    */
  get globalState(): Prisma.GlobalStateDelegate<ExtArgs, ClientOptions>;
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
    UnsplashCollection: 'UnsplashCollection',
    IngestedUnsplashImage: 'IngestedUnsplashImage',
    ScheduledImage: 'ScheduledImage',
    GlobalState: 'GlobalState'
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
      modelProps: "unsplashCollection" | "ingestedUnsplashImage" | "scheduledImage" | "globalState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
    unsplashCollection?: UnsplashCollectionOmit
    ingestedUnsplashImage?: IngestedUnsplashImageOmit
    scheduledImage?: ScheduledImageOmit
    globalState?: GlobalStateOmit
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
   * Models
   */

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
    collectionId: string | null
    dateIngested: Date | null
  }

  export type IngestedUnsplashImageMaxAggregateOutputType = {
    ingestedImageId: string | null
    source: $Enums.ImageSource | null
    url: string | null
    sourceId: string | null
    approved: boolean | null
    collectionId: string | null
    dateIngested: Date | null
  }

  export type IngestedUnsplashImageCountAggregateOutputType = {
    ingestedImageId: number
    source: number
    url: number
    sourceId: number
    approved: number
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
    collectionId?: true
    dateIngested?: true
  }

  export type IngestedUnsplashImageMaxAggregateInputType = {
    ingestedImageId?: true
    source?: true
    url?: true
    sourceId?: true
    approved?: true
    collectionId?: true
    dateIngested?: true
  }

  export type IngestedUnsplashImageCountAggregateInputType = {
    ingestedImageId?: true
    source?: true
    url?: true
    sourceId?: true
    approved?: true
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
    collectionId?: boolean
    dateIngested?: boolean
  }

  export type IngestedUnsplashImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ingestedImageId" | "source" | "url" | "sourceId" | "approved" | "collectionId" | "dateIngested", ExtArgs["result"]["ingestedUnsplashImage"]>
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
    sourceId: string
    published: Date | null
    collectionId: string
    dateIngested: Date
    index: number
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
    index?: boolean
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledImage"]>

  export type ScheduledImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    index?: boolean
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledImage"]>

  export type ScheduledImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    index?: boolean
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledImage"]>

  export type ScheduledImageSelectScalar = {
    scheduledImageId?: boolean
    source?: boolean
    url?: boolean
    sourceId?: boolean
    published?: boolean
    collectionId?: boolean
    dateIngested?: boolean
    index?: boolean
  }

  export type ScheduledImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduledImageId" | "source" | "url" | "sourceId" | "published" | "collectionId" | "dateIngested" | "index", ExtArgs["result"]["scheduledImage"]>
  export type ScheduledImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }
  export type ScheduledImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }
  export type ScheduledImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UnsplashCollectionDefaultArgs<ExtArgs>
  }

  export type $ScheduledImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledImage"
    objects: {
      collection: Prisma.$UnsplashCollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduledImageId: string
      source: $Enums.ImageSource
      url: string
      sourceId: string
      published: Date | null
      collectionId: string
      dateIngested: Date
      index: number
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
  }

  export type GlobalStateSumAggregateOutputType = {
    globalStateId: number | null
    skips: number | null
  }

  export type GlobalStateMinAggregateOutputType = {
    globalStateId: number | null
    category: $Enums.AnimalType | null
    startDate: Date | null
    skips: number | null
  }

  export type GlobalStateMaxAggregateOutputType = {
    globalStateId: number | null
    category: $Enums.AnimalType | null
    startDate: Date | null
    skips: number | null
  }

  export type GlobalStateCountAggregateOutputType = {
    globalStateId: number
    category: number
    startDate: number
    skips: number
    _all: number
  }


  export type GlobalStateAvgAggregateInputType = {
    globalStateId?: true
    skips?: true
  }

  export type GlobalStateSumAggregateInputType = {
    globalStateId?: true
    skips?: true
  }

  export type GlobalStateMinAggregateInputType = {
    globalStateId?: true
    category?: true
    startDate?: true
    skips?: true
  }

  export type GlobalStateMaxAggregateInputType = {
    globalStateId?: true
    category?: true
    startDate?: true
    skips?: true
  }

  export type GlobalStateCountAggregateInputType = {
    globalStateId?: true
    category?: true
    startDate?: true
    skips?: true
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
  }, ExtArgs["result"]["globalState"]>

  export type GlobalStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
  }, ExtArgs["result"]["globalState"]>

  export type GlobalStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
  }, ExtArgs["result"]["globalState"]>

  export type GlobalStateSelectScalar = {
    globalStateId?: boolean
    category?: boolean
    startDate?: boolean
    skips?: boolean
  }

  export type GlobalStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"globalStateId" | "category" | "startDate" | "skips", ExtArgs["result"]["globalState"]>

  export type $GlobalStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      globalStateId: number
      category: $Enums.AnimalType
      startDate: Date
      skips: number
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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
    index: 'index'
  };

  export type ScheduledImageScalarFieldEnum = (typeof ScheduledImageScalarFieldEnum)[keyof typeof ScheduledImageScalarFieldEnum]


  export const GlobalStateScalarFieldEnum: {
    globalStateId: 'globalStateId',
    category: 'category',
    startDate: 'startDate',
    skips: 'skips'
  };

  export type GlobalStateScalarFieldEnum = (typeof GlobalStateScalarFieldEnum)[keyof typeof GlobalStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ImageSource'
   */
  export type EnumImageSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageSource'>
    


  /**
   * Reference to a field of type 'ImageSource[]'
   */
  export type ListEnumImageSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageSource[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    sourceId?: StringFilter<"ScheduledImage"> | string
    published?: DateTimeNullableFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringFilter<"ScheduledImage"> | string
    dateIngested?: DateTimeFilter<"ScheduledImage"> | Date | string
    index?: IntFilter<"ScheduledImage"> | number
    collection?: XOR<UnsplashCollectionScalarRelationFilter, UnsplashCollectionWhereInput>
  }

  export type ScheduledImageOrderByWithRelationInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    published?: SortOrderInput | SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    index?: SortOrder
    collection?: UnsplashCollectionOrderByWithRelationInput
  }

  export type ScheduledImageWhereUniqueInput = Prisma.AtLeast<{
    scheduledImageId?: string
    sourceId?: string
    index?: number
    AND?: ScheduledImageWhereInput | ScheduledImageWhereInput[]
    OR?: ScheduledImageWhereInput[]
    NOT?: ScheduledImageWhereInput | ScheduledImageWhereInput[]
    source?: EnumImageSourceFilter<"ScheduledImage"> | $Enums.ImageSource
    url?: StringFilter<"ScheduledImage"> | string
    published?: DateTimeNullableFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringFilter<"ScheduledImage"> | string
    dateIngested?: DateTimeFilter<"ScheduledImage"> | Date | string
    collection?: XOR<UnsplashCollectionScalarRelationFilter, UnsplashCollectionWhereInput>
  }, "scheduledImageId" | "sourceId" | "index">

  export type ScheduledImageOrderByWithAggregationInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    published?: SortOrderInput | SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
    index?: SortOrder
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
    sourceId?: StringWithAggregatesFilter<"ScheduledImage"> | string
    published?: DateTimeNullableWithAggregatesFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringWithAggregatesFilter<"ScheduledImage"> | string
    dateIngested?: DateTimeWithAggregatesFilter<"ScheduledImage"> | Date | string
    index?: IntWithAggregatesFilter<"ScheduledImage"> | number
  }

  export type GlobalStateWhereInput = {
    AND?: GlobalStateWhereInput | GlobalStateWhereInput[]
    OR?: GlobalStateWhereInput[]
    NOT?: GlobalStateWhereInput | GlobalStateWhereInput[]
    globalStateId?: IntFilter<"GlobalState"> | number
    category?: EnumAnimalTypeFilter<"GlobalState"> | $Enums.AnimalType
    startDate?: DateTimeFilter<"GlobalState"> | Date | string
    skips?: IntFilter<"GlobalState"> | number
  }

  export type GlobalStateOrderByWithRelationInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
  }

  export type GlobalStateWhereUniqueInput = Prisma.AtLeast<{
    globalStateId?: number
    category?: $Enums.AnimalType
    AND?: GlobalStateWhereInput | GlobalStateWhereInput[]
    OR?: GlobalStateWhereInput[]
    NOT?: GlobalStateWhereInput | GlobalStateWhereInput[]
    startDate?: DateTimeFilter<"GlobalState"> | Date | string
    skips?: IntFilter<"GlobalState"> | number
  }, "globalStateId" | "category">

  export type GlobalStateOrderByWithAggregationInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
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
    dateIngested?: Date | string
    collection: UnsplashCollectionCreateNestedOneWithoutIngestedUnsplashImagesInput
  }

  export type IngestedUnsplashImageUncheckedCreateInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    collectionId: string
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageUpdateInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: UnsplashCollectionUpdateOneRequiredWithoutIngestedUnsplashImagesNestedInput
  }

  export type IngestedUnsplashImageUncheckedUpdateInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    collectionId?: StringFieldUpdateOperationsInput | string
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageCreateManyInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    collectionId: string
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageUpdateManyMutationInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageUncheckedUpdateManyInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    collectionId?: StringFieldUpdateOperationsInput | string
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageCreateInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId: string
    published?: Date | string | null
    dateIngested?: Date | string
    index?: number
    collection: UnsplashCollectionCreateNestedOneWithoutScheduledImageInput
  }

  export type ScheduledImageUncheckedCreateInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId: string
    published?: Date | string | null
    collectionId: string
    dateIngested?: Date | string
    index?: number
  }

  export type ScheduledImageUpdateInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: UnsplashCollectionUpdateOneRequiredWithoutScheduledImageNestedInput
  }

  export type ScheduledImageUncheckedUpdateInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collectionId?: StringFieldUpdateOperationsInput | string
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduledImageCreateManyInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId: string
    published?: Date | string | null
    collectionId: string
    dateIngested?: Date | string
    index?: number
  }

  export type ScheduledImageUpdateManyMutationInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageUncheckedUpdateManyInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collectionId?: StringFieldUpdateOperationsInput | string
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalStateCreateInput = {
    category: $Enums.AnimalType
    startDate: Date | string
    skips?: number
  }

  export type GlobalStateUncheckedCreateInput = {
    globalStateId?: number
    category: $Enums.AnimalType
    startDate: Date | string
    skips?: number
  }

  export type GlobalStateUpdateInput = {
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalStateUncheckedUpdateInput = {
    globalStateId?: IntFieldUpdateOperationsInput | number
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalStateCreateManyInput = {
    globalStateId?: number
    category: $Enums.AnimalType
    startDate: Date | string
    skips?: number
  }

  export type GlobalStateUpdateManyMutationInput = {
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalStateUncheckedUpdateManyInput = {
    globalStateId?: IntFieldUpdateOperationsInput | number
    category?: EnumAnimalTypeFieldUpdateOperationsInput | $Enums.AnimalType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    skips?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UnsplashCollectionScalarRelationFilter = {
    is?: UnsplashCollectionWhereInput
    isNot?: UnsplashCollectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IngestedUnsplashImageCountOrderByAggregateInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
  }

  export type IngestedUnsplashImageMaxOrderByAggregateInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
  }

  export type IngestedUnsplashImageMinOrderByAggregateInput = {
    ingestedImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    approved?: SortOrder
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

  export type ScheduledImageCountOrderByAggregateInput = {
    scheduledImageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    sourceId?: SortOrder
    published?: SortOrder
    collectionId?: SortOrder
    dateIngested?: SortOrder
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
    index?: SortOrder
  }

  export type ScheduledImageSumOrderByAggregateInput = {
    index?: SortOrder
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

  export type EnumAnimalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeFilter<$PrismaModel> | $Enums.AnimalType
  }

  export type GlobalStateCountOrderByAggregateInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
  }

  export type GlobalStateAvgOrderByAggregateInput = {
    globalStateId?: SortOrder
    skips?: SortOrder
  }

  export type GlobalStateMaxOrderByAggregateInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
  }

  export type GlobalStateMinOrderByAggregateInput = {
    globalStateId?: SortOrder
    category?: SortOrder
    startDate?: SortOrder
    skips?: SortOrder
  }

  export type GlobalStateSumOrderByAggregateInput = {
    globalStateId?: SortOrder
    skips?: SortOrder
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UnsplashCollectionUpdateOneRequiredWithoutScheduledImageNestedInput = {
    create?: XOR<UnsplashCollectionCreateWithoutScheduledImageInput, UnsplashCollectionUncheckedCreateWithoutScheduledImageInput>
    connectOrCreate?: UnsplashCollectionCreateOrConnectWithoutScheduledImageInput
    upsert?: UnsplashCollectionUpsertWithoutScheduledImageInput
    connect?: UnsplashCollectionWhereUniqueInput
    update?: XOR<XOR<UnsplashCollectionUpdateToOneWithWhereWithoutScheduledImageInput, UnsplashCollectionUpdateWithoutScheduledImageInput>, UnsplashCollectionUncheckedUpdateWithoutScheduledImageInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAnimalTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnimalType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumAnimalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalType | EnumAnimalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalType[] | ListEnumAnimalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalTypeFilter<$PrismaModel> | $Enums.AnimalType
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

  export type IngestedUnsplashImageCreateWithoutCollectionInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    dateIngested?: Date | string
  }

  export type IngestedUnsplashImageUncheckedCreateWithoutCollectionInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
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
    sourceId: string
    published?: Date | string | null
    dateIngested?: Date | string
    index?: number
  }

  export type ScheduledImageUncheckedCreateWithoutCollectionInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId: string
    published?: Date | string | null
    dateIngested?: Date | string
    index?: number
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
    sourceId?: StringFilter<"ScheduledImage"> | string
    published?: DateTimeNullableFilter<"ScheduledImage"> | Date | string | null
    collectionId?: StringFilter<"ScheduledImage"> | string
    dateIngested?: DateTimeFilter<"ScheduledImage"> | Date | string
    index?: IntFilter<"ScheduledImage"> | number
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

  export type IngestedUnsplashImageCreateManyCollectionInput = {
    ingestedImageId?: string
    source?: $Enums.ImageSource
    url: string
    sourceId: string
    approved?: boolean | null
    dateIngested?: Date | string
  }

  export type ScheduledImageCreateManyCollectionInput = {
    scheduledImageId?: string
    source: $Enums.ImageSource
    url: string
    sourceId: string
    published?: Date | string | null
    dateIngested?: Date | string
    index?: number
  }

  export type IngestedUnsplashImageUpdateWithoutCollectionInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageUncheckedUpdateWithoutCollectionInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestedUnsplashImageUncheckedUpdateManyWithoutCollectionInput = {
    ingestedImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageUpdateWithoutCollectionInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledImageUncheckedUpdateWithoutCollectionInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduledImageUncheckedUpdateManyWithoutCollectionInput = {
    scheduledImageId?: StringFieldUpdateOperationsInput | string
    source?: EnumImageSourceFieldUpdateOperationsInput | $Enums.ImageSource
    url?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    published?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateIngested?: DateTimeFieldUpdateOperationsInput | Date | string
    index?: IntFieldUpdateOperationsInput | number
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